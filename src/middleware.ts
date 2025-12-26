import { defineMiddleware } from "astro/middleware"

export const onRequest = defineMiddleware(async (ctx, next) => {
	const response = await next()
	const path = ctx.url.pathname

	// ❌ НЕ кэшируем скрипты и стили
	if (/\.(js|mjs|ts|css)$/i.test(path)) {
		response.headers.set("Cache-Control", "no-store")
		return response
	}

	// ✅ Кэш изображений (7 дней + immutable)
	if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(path)) {
		response.headers.set("Cache-Control", "public, max-age=604800, immutable")
		return response
	}

	// ✅ Кэш HTML-страниц (7 дней)
	if (
		!path.includes(".") || // обычные страницы
		path.endsWith(".html")
	) {
		response.headers.set(
			"Cache-Control",
			"public, s-maxage=604800, stale-while-revalidate=86400",
		)
	}

	return response
})

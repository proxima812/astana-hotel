import { getCollection } from "astro:content"

export const socials = [
	// {
	// 	aria_label: "Youtube",
	// 	title: "@userName2",
	// 	href: "#",
	// 	social: "youtube",
	// },
	// {
	// 	aria_label: "ВКонтакте",
	// 	title: "ВКонтакте",
	// 	href: "#",
	// 	social: "vk",
	// },
	{
		aria_label: "WhatsApp",
		title: "+7 700 157 4697",
		href: "https://wa.me/77001574697?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%BD%D0%B0%D1%81%D1%87%D0%B5%D1%82%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0%20%D0%B2%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B5.%20",
		social: "ws",
		target: "_blank",
	},
	{
		aria_label: "Yandex Карты",
		title: "Яндекс.Карты",
		href: "https://yandex.kz/maps/-/CLWJ7BOH",
		social: "yandex_map",
		target: "_blank",
	},
	{
		aria_label: "Google Карты",
		title: "Google Maps",
		href: "https://maps.app.goo.gl/fGmYiqjkfGxPLWLC9",
		social: "google_map",
		target: "_blank",
	},
	{
		aria_label: "2Gis Карта",
		title: "2Gis маршрут",
		href: "https://go.2gis.com/pOy3A",
		social: "twogis_map",
		target: "_blank",
	},
	// {
	// 	aria_label: "Telegram",
	// 	title: "@telegram",
	// 	href: "#",
	// 	social: "tg",
	// },
	// {
	// 	aria_label: "Instagram",
	// 	title: "@man9",
	// 	href: "#",
	// 	social: "inst",
	// },
	// {
	// 	aria_label: "GitHub",
	// 	title: "@Kamil12",
	// 	href: "#",
	// 	social: "github",
	// },
	// {
	// 	aria_label: "",
	// 	href: "#",
	// 	social: "",
	// },
]

const posts = await getCollection("posts")

export const navigation = [
	{
		label: "Отзывы",
		href: "#yandex",
		// target: "_blank",
		icon: "mdi:account-multiple",
		style: "",
	},
	{
		label: "Карта",
		href: "#yandex",
		// target: "_blank",
		icon: "mdi:google-maps",
		style: "",
	},
	{
		label: "Забронировать",
		href: "https://wa.me/77001574697?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%BD%D0%B0%D1%81%D1%87%D0%B5%D1%82%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0%20%D0%B2%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B5.%20",
		style: "",
		icon: "mdi:whatsapp",
	},
	// {
	// 	label: "",
	// 	href: "#",
	// 	target: "",
	// 	icon: "",
	// 	style: "",
	// },
]

export const navigation_footer = [
	{
		category: "Категория 1",
		colunm1: [
			{
				label: "Ссылка1",
				href: "#",
				target: "_blank",
				icon: "mdi:progress-pencil",
				style: "",
			},
			// {
			// 	label: "Ссылка1",
			// 	href: "#",
			// 	target: "_blank",
			// 	icon: "mdi:progress-pencil",
			// 	style: "",
			// },
		],
	},
	{
		category: "Категория из коллеции",
		colunm1: posts.map(post => ({
			label: post.data.title,
			href: `/posts/${post.id}/`,
			target: "_blank",
			icon: "mdi:progress-pencil",
			style: "",
		})),
	},
	{
		category: "Категория 2",
		colunm2: [
			{
				label: "Ссылка1",
				href: "#",
				target: "_blank",
				icon: "mdi:progress-pencil",
				style: "",
			},
			{
				label: "Ссылка1",
				href: "#",
				target: "_blank",
				icon: "mdi:progress-pencil",
				style: "underline-offset-4 text-blue-500 underline",
			},
			// {
			// 	label: "Ссылка1",
			// 	href: "#",
			// 	target: "_blank",
			// 	icon: "mdi:progress-pencil",
			// 	style: "",
			// },
		],
	},
]

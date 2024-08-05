const regions = {
	africa: {
		name: 'Africa',
		value: 'africa',
		properties: {
			coordinates: [15.69, 2.14],
			zoom: 2.55,
		},
		countries: [
			'Algeria',
			'Egypt',
			'Kenya',
			'Morocco',
			'Madagascar',
			'Nigeria',
			'South Africa',
			'Tunisia',
		],
	},
	asia: {
		name: 'Asia',
		value: 'asia',
		properties: {
			coordinates: [88.5, 50.74],
			zoom: 1.6,
		},
		countries: ['China', 'Japan', 'India', 'Taiwan', 'Thailand', 'Vietnam'],
	},
	europe: {
		name: 'Europe',
		value: 'europe',
		properties: {
			coordinates: [15.54, 56.73],
			zoom: 3.03,
		},
		countries: [
			'Austria',
			'Belgium',
			'Denmark',
			'France',
			'Germany',
			'Ireland',
			'Italy',
			'Luxembourg',
			'Netherlands',
			'Norway',
			'Poland',
			'Portugal',
			'Romania',
			'Spain',
		],
	},
	latinAmerica: {
		name: 'Latin America & Caribbean',
		value: 'latinAmerica',
		properties: {
			coordinates: [-65.74, -18.35],
			zoom: 2,
		},
		countries: [
			'Argentina',
			'Brazil',
			'Chile',
			'Colombia',
			'Cuba',
			'Dominican Republic',
			'Mexico',
			'Peru',
		],
	},
	northAmerica: {
		name: 'North America',
		value: 'northAmerica',
		properties: {
			coordinates: [-103.32, 48.68],
			zoom: 2,
		},
		countries: ['United States', 'Canada'],
	},
	oceania: {
		name: 'Oceania',
		value: 'oceania',
		properties: {
			coordinates: [138.84, -24.66],
			zoom: 3.48,
		},
		countries: ['Australia', 'New Zealand'],
	},
}

export default regions

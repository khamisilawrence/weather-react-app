export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a2c9d1d46msh7e2a2b35220aac4p163f29jsnde7f818c35ec',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "2d889da4407231c859947f2eaf0f3643";

try {
	const response = await fetch(GEO_API_URL, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// 3a2c9d1d46msh7e2a2b35220aac4p163f29jsnde7f818c35ec


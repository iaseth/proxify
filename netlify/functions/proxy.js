import fetch from 'node-fetch';



export async function handler (event, context) {
	try {
		const data = JSON.parse(event.body);
		const { pageURL } = data;

		const res = await fetch(pageURL);
		const htmlContent = await res.text();

		return {
			statusCode: 200,
			body: htmlContent,
		};
	} catch (e) {
		return {
			statusCode: 404,
			body: "Something bad happened!",
		};
	}
}

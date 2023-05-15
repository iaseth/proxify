import fetch from 'node-fetch';



export async function handler (event, context) {
	const data = JSON.parse(event.body);
	const { pageURL } = data;

	const res = await fetch(pageURL);
	const htmlContent = await res.text();

	return {
		statusCode: 200,
		body: htmlContent,
	};
}

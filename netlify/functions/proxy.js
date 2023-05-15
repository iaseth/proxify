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
		let responseBody = "Something bad happened!";
		if (e instanceof SyntaxError) {
			responseBody = "Bad JSON!";
		} else if (e instanceof TypeError) {
			responseBody = "Bad URL!";
		}

		return {
			statusCode: 404,
			body: responseBody,
		};
	}
}

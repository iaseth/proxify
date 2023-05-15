import fetch from 'node-fetch';

const PROXY_URL = "https://proxify.netlify.app/proxy";

async function getURL (pageURL) {
	const data = {
		pageURL
	};

	const config = {
		method: 'POST',
		headers: {},
		body: JSON.stringify(data)
	}

	const res = await fetch(PROXY_URL, config);
	const htmlContent = await res.text();
	return htmlContent;
}

async function main () {
	const htmlContent = await getURL("https://www.example.com");
	console.log(htmlContent);
}

main();

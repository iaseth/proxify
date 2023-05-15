import requests

PROXY_URL = "https://proxify.netlify.app/proxy"


def main():
	data = {"pageURL": "https://www.example.com"}
	res = requests.post(PROXY_URL, json=data)
	print(res.text)


if __name__ == '__main__':
	main()

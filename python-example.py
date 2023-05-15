import requests

PROXY_URL = "https://proxify.netlify.app/proxy"

def getURL(pageURL):
	data = {"pageURL": pageURL}
	response = requests.post(PROXY_URL, json=data)
	return response

def main():
	response = getURL("https://www.example.com")
	print(response.text)


if __name__ == '__main__':
	main()

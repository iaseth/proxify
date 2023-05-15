import requests

PROXY_URL = "https://proxify.netlify.app/proxy"
NCSI_URL = "http://www.msftncsi.com/ncsi.txt"
NCSI_EXPECTED_RESPONSE = "Microsoft NCSI"

def main():
	data = {"pageURL": NCSI_URL}
	res = requests.post(PROXY_URL, json=data)
	if res.text == NCSI_EXPECTED_RESPONSE:
		print(f"Proxy is working: {PROXY_URL}")
	else:
		print(f"Proxy is NOT working: {PROXY_URL}")


if __name__ == '__main__':
	main()

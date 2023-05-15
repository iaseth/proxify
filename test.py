import requests

LOCAL_PROXY_URL = "http://localhost:9999/.netlify/functions/proxy"
REMOTE_PROXY_URL = "https://proxify.netlify.app/proxy"
NCSI_URL = "http://www.msftncsi.com/ncsi.txt"
NCSI_EXPECTED_RESPONSE = "Microsoft NCSI"

remote = True
PROXY_URL = REMOTE_PROXY_URL if remote else LOCAL_PROXY_URL


def main():
	data = {"pageURL": NCSI_URL}
	res = requests.post(PROXY_URL, json=data)
	if res.text == NCSI_EXPECTED_RESPONSE:
		print(f"Proxy is working: {PROXY_URL}")
	else:
		print(f"Proxy is NOT working: {PROXY_URL}")
		print(f"\tResponse: \"{res.text}\"")


if __name__ == '__main__':
	main()

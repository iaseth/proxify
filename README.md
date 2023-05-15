
# Proxify
[Proxify](https://proxify.netlify.app/) allows you to use netlify as a proxy server.

I felt the need for a proxy server when I was working on [`iaseth/top-100-yc-companies`](https://github.com/iaseth/top-100-yc-companies).
Many of the top websites are blocked in my country for various reasons.
So, I created [Proxify](https://proxify.netlify.app/).

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/proxify/blob/master/README.md.rx).


## Table of contents
* [Proxify](#proxify)
    * [Table of contents](#table-of-contents)
    * [Getting Started](#getting-started)
    * [Using with Python](#using-with-python)
    * [Using with JavaScript](#using-with-javascript)
    * [Project details](#project-details)
    * [Dependencies](#dependencies)
    * [Dev dependencies](#dev-dependencies)
    * [License](#license)


## Getting Started


## Using with Python
You can see the full example at [python-example.js](https://github.com/iaseth/proxify/blob/master/python-example.js).
```python
import requests

PROXY_URL = "https://proxify.netlify.app/proxy"

def getURL(pageURL):
    data = {"pageURL": pageURL}
    response = requests.post(PROXY_URL, json=data)
    return response
```

## Using with JavaScript
You can see the full example at [javascript-example.js](https://github.com/iaseth/proxify/blob/master/javascript-example.js).
```javascript
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
```


## Project details
| `Name`         | `Value`                            |
| -------------- | ---------------------------------- |
| `Name`         | `proxify`                          |
| `Description`  | `Using Netlify as a Proxy Server.` |
| `Version`      | `0.0.0`                            |
| `Dependencies` | `3`                                |



## Dependencies
|     | `Package`    | `Version`   |
| --- | ------------ | ----------- |
| 1   | `node-fetch` | `^3.3.1`    |
| 2   | `react`      | `^18.2.0`   |
| 3   | `react-dom`  | `^18.2.0`   |



## Dev dependencies
|     | `Package`                          | `Version`   |
| --- | ---------------------------------- | ----------- |
| 1   | `@types/react`                     | `^18.0.28`  |
| 2   | `@types/react-dom`                 | `^18.0.11`  |
| 3   | `@typescript-eslint/eslint-plugin` | `^5.57.1`   |
| 4   | `@typescript-eslint/parser`        | `^5.57.1`   |
| 5   | `@vitejs/plugin-react`             | `^4.0.0`    |
| 6   | `autoprefixer`                     | `^10.4.14`  |
| 7   | `eslint`                           | `^8.38.0`   |
| 8   | `eslint-plugin-react-hooks`        | `^4.6.0`    |
| 9   | `eslint-plugin-react-refresh`      | `^0.3.4`    |
| 10  | `postcss`                          | `^8.4.23`   |
| 11  | `tailwindcss`                      | `^3.3.2`    |
| 12  | `typescript`                       | `^5.0.2`    |
| 13  | `vite`                             | `^4.3.2`    |



## License
File not found: LICENSE.md



## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).



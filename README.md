
# Proxify
[Proxify](https://proxify.netlify.app/) allows you to use Netlify as a Proxy Server.
Proxify just takes advantage of the fact that Netlify Functions can make fetch requests.
I mostly use this for crawling blocked websites in my web scraping projects.

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
* Install `node-fetch`:

    ```
    npm install node-fetch
    ```

* Drop the [proxy.js](https://github.com/iaseth/proxify/blob/master/netlify/functions/proxy.js) script into your `netlify/functions` folder.
* Add the following to your [netlify.toml](https://github.com/iaseth/proxify/blob/master/netlify.toml) file:
    ```
    
    [functions]
      node_bundler = "esbuild"
    
    [[redirects]]
    from = "/proxy"
    to = "/.netlify/functions/proxy"
    status = 200
    ```
    
* You can now deploy your website to Netlify. Your proxy server will be ready at `your-app-name.netlify.app/proxy`.



## Using with Python
You can see the full example at [python-example.py](https://github.com/iaseth/proxify/blob/master/python-example.py).
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
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).



<div align="center">
	<h1>scp-api.js</h1>
	<a href="https://www.codefactor.io/repository/github/ifraan/scp-api.js"><img src="https://www.codefactor.io/repository/github/ifraan/scp-api.js/badge" alt="CodeFactor" /></a>
	<a href="https://www.npmjs.com/package/scp-api.js"><img src="https://badgen.net/npm/v/scp-api.js?color=blue" alt="NPM-Version"/></a>
	<a href="https://www.npmjs.com/package/scp-api.js"><img src="https://badgen.net/npm/dt/scp-api.js?color=blue" alt="NPM-Downloads"/></a>
	<a href="https://github.com/iFraan/scp-api.js"><img src="https://badgen.net/github/stars/iFraan/scp-api.js?color=yellow" alt="Github Stars"/></a>
	<a href="https://github.com/iFraan/scp-api.js/issues"><img src="https://badgen.net/github/open-issues/iFraan/scp-api.js?color=green" alt="Issues"/></a>
	<h2>This a wrapper/scrapper of the <a href="https://scp.fandom.com">SCP Fandom</a> site.</h2>
	<h3>There is no API key required.</h3>
</div>

To install use:
```shell
npm i scp-api.js
```

There is two ways to fetch data.

You can use the method `fetchSCP` without creating an API instance first, 
or you can create and API instance and use `getSCP` to take adventage of local cache data.

Here you have the two examples: 
```js title=test.ts
import { API, fetchSCP } from './src';

console.log('---- Direct Method: ----')
const scp3007 = await fetchSCP('3007')
console.log({ scp3007 })

console.log('---- Cache Method: ----')
const api = new API();
const first = await api.getSCP('3007');
const second = await api.getSCP('982');
console.log('results: ', {
    first,
    second,
})
console.log('cache: ', api.raw)
```

# Disclaimer
This project is fully made for educational purposes
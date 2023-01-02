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

You can use the method `API.fetchSCP` without creating an API instance first as it creates an API instance and returns the data fetched.
Or you can create and API instance and use `getSCP` to take adventage of local cache data.

Here you have the two examples: 
```js title=test.js
const { API } = require('scp-api.js')

console.log('---- Direct Method: ----')
try {
    /* can also pass langs and other options */
    /* API.fetchSCP('3007', 'es', { return_api }) // This will return the API instance instead */
    console.log(await API.fetchSCP('3007')) 
} catch (e) {
    console.log(e)
}
console.log('---- Cache Method: ----')
const api = new API();
try {
    await api.getSCP('3007'); // 3007 data
    await api.getSCP('982'); // 982 data
    console.log(api.scps) // Array of all SCPs fetched yet
} catch (e) {
    console.log(e)
}
```

# Disclaimer
This project is fully made for educational purposes
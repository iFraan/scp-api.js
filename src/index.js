const { getSCP: _getSCP } = require('./lib/scrapper');
const { getCode } = require('./lib/lang')
class API {

    /**
     * Use API.getSCP instead.
     * @param {string} lang
     * @private // idk if it does something outside of typescript, but there it is
     */
    constructor(lang = 'es') {
        this.lang = getCode(lang);
        this.scps = {}
    }

    /**
     * Initialize the class
     * @param {string} code 
     * @param {string} lang 
     * @returns API instance
     */
    static async fetchSCP(code, lang, options = {}) {
        if (typeof code == 'undefined') throw new Error('You gotta provide an SCP code.');
        const _API = new API(lang);
        _API.scps[`${code}`] = await _getSCP(code, _API.lang);
        return options.return_api ? _API : _API.scps[`${code}`];
    }

    async getSCP(code) {
        if (this.scps[`${code}`]) {
            /* fetch if doesnt have it on cache */
            this.scps[`${code}`] = await _getSCP(code, this.lang);
        }
        return this.scps[`${code}`];
    }

    get raw() { return this.scps; }
}

module.exports = {
    API,
}
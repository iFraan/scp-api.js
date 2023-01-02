const { getSCP } = require('./lib/scrapper');
const { getCode } = require('./lib/lang')
class API {

    /**
     * Use API.getSCP instead.
     * @param {string} scp_code 
     * @param {string} lang
     * @private // idk if it does something outside of typescript, but there it is
     */
    constructor(scp_code, lang = 'es') {
        this.code = scp_code;
        this.lang = getCode(lang);
        this._raw = {}
    }

    /**
     * Initialize the class
     * @param {string} code 
     * @param {string} lang 
     * @returns API instance
     */
    static async fetchSCP(code, lang) {
        if (typeof code == 'undefined') throw new Error('You gotta provide an SCP code.');
        const API = new API(code, lang);
        return API;
    }

    get raw() { return this._raw; }
}

module.exports = {
    API,
}
import { fetchSCP as external_fetchSCP } from './lib/scrapper';
import { getCode } from './lib/lang';
import { SCP, Language } from './types/internal';

class API {

    lang: Language;
    scps: {
        [id: string]: SCP;
    }

    constructor(options?: { lang?: Language | string }) {
        this.lang = getCode(options?.lang ?? 'es');
        this.scps = {}
    }

    async getSCP(code: string) {
        if (typeof code == 'undefined') throw new Error('You gotta provide an SCP code.');
        if (!this.scps[`${code}`]) {
            /* fetch if doesnt have it on cache */
            this.scps[`${code}`] = await external_fetchSCP(code, this.lang);
        }
        return this.scps[`${code}`];
    }

    // Compatibility with the old API
    static async fetchSCP(code: string, lang?: Language) {
        return await external_fetchSCP(code, lang);
    }

    get raw() { return {
        scps: this.scps,
        lang: this.lang,
    }}
}

export {
    API,
    external_fetchSCP as fetchSCP
}

export default API;
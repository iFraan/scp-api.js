import { fetchSCP } from './lib/scrapper';
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
            this.scps[`${code}`] = await fetchSCP(code, this.lang);
        }
        return this.scps[`${code}`];
    }

    get raw() { return {
        scps: this.scps,
        lang: this.lang,
    }}
}

export {
    API,
    fetchSCP
}

export default API;
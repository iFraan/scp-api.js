import { fetchSCP } from './lib/scrapper';
import { getCode } from './lib/lang';

type SCP = {
    title: string,
    content: any[],
    images: string[],
    full_text: string
}

class API {

    lang: string;
    scps: {
        [id: string]: SCP;
    }

    constructor({ lang = 'es' }) {
        this.lang = getCode(lang);
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
import axios from "axios";
import { JSDOM } from 'jsdom';
import { Language, SCP } from "../types/internal";

const empty = (x: any) => x.length === 0 || x === '' || x == 0 || x == false;
const clean = (x: string) => x.replace(/(\+|\-) show block/, '').replace(/\t/g, '').replace(/\n/g, '').trim();

export const fetchSCP = async (code: string, lang: Language = 'es') => {

    const result = {} as SCP;

    try {
        const response = await axios.get(`https://scp.fandom.com/${lang}/wiki/SCP-${code}`);
        const dom = new JSDOM(response.data)
        const { document } = dom.window;

        const content = Array.from(document.querySelectorAll(".page-content p")).slice(2); // first 2 items are trash

        result.title = `${document.querySelector('.page-header__title')?.textContent?.trim()}`;
        result.content = content.map((x => clean(x?.textContent ?? ''))).filter(x => !empty(x));
        result.full_text = result.content.join('\n');

        try {
            const thumbnail = {
                // @ts-ignore href does exists in a element
                link: document.querySelector(".tright .image")?.href ?? '',
                details: clean(document.querySelector(".tright")?.textContent ?? ''),
            }
            if (Boolean(thumbnail?.link)) {
                result.images.push(thumbnail);
            }
        } catch (e) { /* doesnt have an image */ }

    } catch (e) {
        console.log(e)
        throw new Error('Cant find that SCP')
    }

    return result
}

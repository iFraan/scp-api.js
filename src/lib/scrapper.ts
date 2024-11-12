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

        result.title = `${document.querySelector('.page-header__title')?.textContent?.trim()}`;
        result.content = Array.from(document.querySelectorAll(".page-content p"))
            .map((child, index) => index >= 2 && clean(child.textContent ?? '')) // first 2 items are trash
            .filter(x => !empty(x));
        result.full_text = result.content.join('\n');

        try {
            const thumbnail = {
                // @ts-ignore href does exists in a elements
                link: document.querySelector(".tright .image")?.href ?? '',
                details: clean(document.querySelector(".tright")?.textContent ?? ''),
            }
            thumbnail?.link && result.images.push(thumbnail);
        } catch (e) {
            /* doesnt have an image */
        }

    } catch (e) {
        console.log(e)
        throw new Error('Cant find that SCP')
    }

    return result
}

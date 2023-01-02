const axios = require('axios');
const { JSDOM } = require('jsdom');

const empty = (x) => x.length === 0 || x === '' || x == 0 || x == false;
const clean = x => x.replace(/(\+|\-) show block/, '').replace(/\t/g, '').replace(/\n/g, '').trim();

const getSCP = async (code, lang = 'es') => new Promise((resolve, reject) => {

    axios.get(`https://scp.fandom.com/${lang}/wiki/SCP-${code}`)

        .then(response => {
            const dom = new JSDOM(response.data)
            const { document } = dom.window;
            const data = {
                title: '',
                content: [],
                images: [],
                full_text: ''
            };

            const title = `${document.querySelector('.page-header__title').textContent.trim()}`;
            const content = Array.from(document.querySelectorAll(".page-content p"))
                .map((child, index) => index >= 2 && clean(child.textContent)) // first 2 items are trash
                .filter(x => !empty(x));

            try {
                const thumbnail = {
                    link: document.querySelector(".tright .image").href,
                    details: clean(document.querySelector(".tright").textContent),
                }
                thumbnail && data.images.push(thumbnail);
            } catch (e) {
                /* doesnt have an image */
            }

            data['title'] = title;
            data['content'] = content;
            data['full_text'] = content.join('\n');

            resolve(data)
        })
        .catch(e => {
            console.log(e)
            reject('Cant find that SCP')
        })
})

module.exports = {
    getSCP
}
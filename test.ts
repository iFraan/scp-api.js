import { API, fetchSCP } from './src';

const test = async () => {
    console.log('---- Direct Method: ----')
    try {
        console.log(await fetchSCP('3007'))
    } catch (e) {
        console.log(e)
    }

    console.log('---- Cache Method: ----')
    const api = new API();
    try {
        const scp1 = await api.getSCP('3007');
        const scp2 = await api.getSCP('982');
        console.log('results: ')
        console.log({
            scp1,
            scp2,
        })
        console.log('cache: ')
        console.log(api.raw)
    } catch (e) {
        console.log(e)
    }
}

test()
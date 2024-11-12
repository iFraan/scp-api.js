import { API, fetchSCP } from './src';

const test = async () => {
    console.log('---- Direct Method: ----')
    try {
        const scp3007 = await fetchSCP('3007')
        console.log({ scp3007 })
    } catch (e) {
        console.log(e)
    }

    console.log('---- Cache Method: ----')
    const api = new API();
    try {
        const first = await api.getSCP('3007');
        const second = await api.getSCP('982');
        console.log('results: ', {
            first,
            second,
        })
        console.log('cache: ', api.raw)
    } catch (e) {
        console.log(e)
    }
}

test()
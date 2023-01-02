const { API } = require('./index');

m = (async () => {

    console.log('---- Direct Method: ----')
    try {
        console.log(await API.fetchSCP('3007'))
    } catch (e) {
        console.log(e)
    }
    console.log('---- Cache Method: ----')
    const api = new API();
    try {
        await api.getSCP('3007');
        await api.getSCP('982');
        console.log(api.scps)
    } catch (e) {
        console.log(e)
    }
})

m()
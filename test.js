const { API } = require('./index');

m = (async () => {

    const api = new API();
    try {
        console.log(await api.getSCP('3007'))
    } catch (e) {
        console.log(e)
    }
    console.log(api)
})

m()
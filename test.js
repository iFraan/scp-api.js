const { getSCP } = require('./src/lib/scrapper');

m = (async () => {

    try {
        console.log(await getSCP('3007'))
    } catch (e) {
        console.log(e)
    }

})

m()
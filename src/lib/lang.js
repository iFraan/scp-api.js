const getCode = (lang) => {
    if (lang.toLowerCase() != 'es')
        throw new Error('only spanish is supported for now (es)')

    return 'es'
}

module.exports = {
    getCode
}
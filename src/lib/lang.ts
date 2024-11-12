import { Language } from "../types/internal"

export const getCode = (lang: string) => {
    if (lang.toLowerCase() != 'es')
        throw new Error('only spanish is supported for now (es)')

    return 'es' as Language;
}
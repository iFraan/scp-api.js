
export type SCP = {
    title: string,
    content: string[],
    images: {
        link: string | null,
        details: string | null,
    }[],
    full_text: string
}

export type Language = 'es';
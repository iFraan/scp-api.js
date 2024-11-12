
export type SCP = {
    title: string,
    content: any[],
    images: {
        link: string | null,
        details: string | null,
    }[],
    full_text: string
}

export type Language = 'es';
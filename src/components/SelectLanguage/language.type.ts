export const Langugages = {
    RU: 'Русский',
    KZ: 'Казахский',
    EN: 'Английский',
} as const;

export type Langugages = keyof typeof Langugages;
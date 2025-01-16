export interface INews {
    news_id: number,
    news_title: string,
    news_information: string,
    news_img: string,
    news_lang: string,
    created_at: string
};

export interface IAllNews {
    all?: boolean
}
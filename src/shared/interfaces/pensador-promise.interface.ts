export interface PhrasesInterface {
    author: string;
    text: string;
}
export interface ResultInterface {
    total: number;
    searchTerm: string;
    phrases: PhrasesInterface[];
}

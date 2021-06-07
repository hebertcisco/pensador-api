export interface IPhrases {
    author: string;
    text: string;
}
export interface IResult {
    total: number;
    searchTerm: string;
    phrases: IPhrases[];
}

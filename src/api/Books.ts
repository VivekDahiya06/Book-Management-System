import axios from "axios";
import type { Book_Type } from "../types/Books.types";

const url = 'http://localhost:3000/books';

export const GETBooks = async () => {
    const response = await axios.get(url);
    return response.data;
}

export const POSTBooks = async (book: Book_Type) => {
    const response = await axios.post(url, book);
    return response;
}

export const PUTBooks = async (book: Book_Type) => {
    const response = await axios.put(url+`/${book.id}`, { book });
    return response.data;
}
export const DELETEBooks = async (id: number) => {
    const response = await axios.delete(url+`/${id}`);
    return response;
}
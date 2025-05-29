import axios from "axios";
import type { Book_Type } from "../types/Books.types";

const remoteUrl = 'https://my-json-server.typicode.com/VivekDahiya06/Book-Management-System/books';
// const localUrl = 'http://localhost:3000/books';

export const GETBooks = async () => {
    const response = await axios.get(remoteUrl);
    return response.data;
}

export const POSTBooks = async (book: Book_Type) => {
    const response = await axios.post(remoteUrl, book);
    return response;
}

export const PUTBooks = async (book: Book_Type) => {
    const response = await axios.patch(remoteUrl+`/${book.id}`, { book });
    return response;
}
export const DELETEBooks = async (id: number) => {
    const response = await axios.delete(remoteUrl+`/${id}`);
    return response;
}
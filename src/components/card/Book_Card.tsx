import { Button, Chip } from '@mui/material';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import type { FC } from 'react';
import type { Book_Type } from '../../types/Books.types';
import { GiBookmarklet } from "react-icons/gi";

interface Props {
    Book: Book_Type,
    index: number
}

const Book_Card: FC<Props> = ({ Book, index }) => {

    const handle_BookDelete = () => {
        console.log(`Book with index ${index} Deleted`);
    }

    const handle_BookEdit = () => {
        console.log(`Book with index ${index} Edited`);
    }

    return (
        <main className="w-full max-w-110 border-2 rounded-xl border-black">
            <section className="w-full flex flex-col items-center justify-start border-b-2 border-black gap-3 ">
                <header className="w-full p-6 flex items-center justify-between rounded-tl-xl rounded-tr-xl text-white bg-[#019ECA]">
                    <div className="flex items-start justify-start gap-3">
                        <GiBookmarklet size={30} color={'#fff'} />
                        <h1 className="text-2xl">{Book.title}</h1>
                    </div>
                </header>
                <div className="p-5 w-full flex flex-col items-start justify-start gap-3">
                    <span><b>Author: </b>{Book.author}</span>
                    <span><b>Published Year: </b>{Book.publishedYear}</span>
                    <span><b>Genre: </b>{Book.genre}</span>
                    <span><b>Status:</b>{" "}
                        <Chip label={Book.status} color={Book.status === "Available" ? 'success' : 'error'} />
                    </span>
                </div>
            </section>
            <footer className="w-full p-3 flex items-center justify-center">
                <div className="flex items-center justify-evenly gap-7">
                    <Button
                        variant="contained"
                        endIcon={<FiEdit />}
                        color="success"
                        onClick={handle_BookEdit}
                        sx={{ textTransform: "none" }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        endIcon={<MdDelete />}
                        color="error"
                        onClick={handle_BookDelete}
                        sx={{ textTransform: "none" }}
                    >
                        Delete
                    </Button>
                </div>
            </footer>
        </main>
    )
}

export default Book_Card;
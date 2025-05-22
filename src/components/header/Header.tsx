import { useState } from 'react';
import { useStore } from '../../hooks/useStore';
import ToolTip from '../tooltip/CustomToolTip';
import logo from '/images/logo.png';
import { MdSearch } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaBookMedical } from "react-icons/fa";
import { IconButton, TextField, InputAdornment } from '@mui/material';


const Header = () => {

    // States & Hooks
    const { dispatch } = useStore();
    const [search, setSearch] = useState<string>("");


    // Functions
    const handle_Search = () => {
        dispatch({ type: 'SET_SEARCH_BOOK_FILTER', payload: search });
        dispatch({ type: 'CHANGE_PAGE', payload: 1 });
    }

    const handle_AddBook = () => {
        dispatch({ type: 'SET_FORM_TYPE', payload: 'add' });
        dispatch({ type: 'SET_FORM_OPEN', payload: true });
    }


    return (
        <header className='w-full h-20 flex items-center justify-between p-5 bg-[#c5b500]'>
            <nav className='w-full h-full flex items-center justify-between'>
                <div className="flex items-center justify-start">
                    <img src={logo} alt="BookHive Logo" loading='lazy' className='w-40 h-40' />
                    <h1 className="text-3xl font-bold">BookHive</h1>
                </div>
                <div className='flex md:hidden'>
                    <IconButton onClick={handle_Search}>
                        <IoMenu size={24} color={'#000'} />
                    </IconButton>
                </div>
                <div className='hidden md:flex gap-8 items-center justify-center'>
                    <ToolTip
                        title="Add Book"
                    >
                        <IconButton onClick={handle_AddBook}>
                            <FaBookMedical size={24} color={'#000'} />
                        </IconButton>
                    </ToolTip>
                    <TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search books..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handle_Search}>
                                        <MdSearch size={24} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            style: { backgroundColor: "#fff", borderRadius: 4 },
                        }}
                        size="small"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;

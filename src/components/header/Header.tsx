import { IconButton, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import logo from '/images/Logo.webp';
import { MdSearch } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [search, setSearch] = useState<string>("");

    const handle_Search = () => {
        console.log(search);
    }

    return (
        <header className='w-full h-20 flex items-center justify-between p-5 bg-[#019ECA]'>
            <nav className='w-full h-full flex items-center justify-between'>
                <div className="flex items-center justify-start gap-3">
                    <img src={logo} alt="BookHive Logo" loading='lazy' className='w-20 h-20' />
                    <h1 className="text-white text-3xl font-bold">BookHive</h1>
                </div>
                <div className='flex md:hidden'>
                    <IconButton onClick={handle_Search}>
                        <IoMenu size={24} color={'#fff'} />
                    </IconButton>
                </div>
                <div className='hidden md:flex'>
                    <TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search books..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
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

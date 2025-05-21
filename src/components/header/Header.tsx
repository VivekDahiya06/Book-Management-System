import { IconButton, TextField, InputAdornment, Tooltip, styled, type TooltipProps, tooltipClasses } from '@mui/material';
import { useContext, useState } from 'react';
import logo from '/images/logo.png';
import { MdSearch } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaBookMedical } from "react-icons/fa";
import { StoreContext } from '../../store/StoreProvider';

const Header = () => {

    const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#000000',
            color: '#fff',            
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#000000',
        },
    }));


    const [search, setSearch] = useState<string>("");
    const Store = useContext(StoreContext);
    if (!Store) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <h1 className="text-xl text-red-500">Something went wrong.</h1>
            </div>
        );
    }
    const { dispatch } = Store;

    const handle_Search = () => {
        console.log(search);
    }

    const handle_AddBook = () => {
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
                    <CustomTooltip
                        title="Add Book"
                        arrow
                    >
                        <IconButton onClick={handle_AddBook}>
                            <FaBookMedical size={24} color={'#000'} />
                        </IconButton>
                    </CustomTooltip>
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

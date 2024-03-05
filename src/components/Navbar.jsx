import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
function Navbar() {
    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed top-0 w-full z-10 flex items-center h-24 text-white'>
            <div className='flex justify-between items-center w-full max-w-[1240px] mx-auto px-4'>
                <h1 className='text-3xl font-bold text-[#00df9a]'>React.</h1>
                <ul className='hidden md:flex space-x-5'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Company</li>
                    <li className='p-4'>Resources</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={22}/> :  <AiOutlineClose size={22} />}
            </div>
        <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-black m-4 ease-in-out duration-500 ${nav ? 'opacity-100' : 'opacity-0 translate-x-[-100%]'}`}>
    <h1 className='text-3xl font-bold text-[#00df9a]'>React.</h1>
    <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
    </ul>
</div>

        </div>
    );
}

export default Navbar;


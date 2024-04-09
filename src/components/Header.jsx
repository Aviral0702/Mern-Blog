import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link ,useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className=' border-b-2'>
            <Link to='/' className=' self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Aviral's</span>
                Blog
            </Link>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
            <Button className='w-12 h-10 lg:hidden' color='gray' pill><AiOutlineSearch/></Button>
            <div className='flex gap-4 md:order-2'>
                <Button className='w-12 h-10 hidden:sm inline' color='gray' pill >
                    <FaMoon/>
                </Button>
                <Button className=' h-10' gradientDuoTone='purpleToBlue'>
                    <Link to='/signin'>Sign In</Link>
                </Button>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to='/' className='nav-link'>Home</Link>
                </Navbar.Link>
                
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to='/about' className='nav-link'>About</Link>
                </Navbar.Link>
                
                <Navbar.Link active = {path==='/projects'} as={'div'}>
                    <Link to='/Projects' className='nav-link'>Projects</Link>
                </Navbar.Link>
                
            </Navbar.Collapse>
            
                    
        </Navbar>
    )
}

export default Header

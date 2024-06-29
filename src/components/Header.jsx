import { Button, MegaMenu, Navbar, Tabs, TextInput } from "flowbite-react";
import { MdExplore } from "react-icons/md";
import { TbHexagonLetterXFilled } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { BsBookmarkFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import SignIn from "../pages/SignIn";
import JoinIn from "../pages/JoinIn";
import logo from "../assets/logo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

function Header() {
  return (
    <MegaMenu className='mt-2'>
      <Navbar.Brand href='/'>
        <img alt='logo' src={logo} width={160} height={60} className='mr-3' />
      </Navbar.Brand>
      <div className=' hidden md:block'>
        <form className='flex items-center -mt-2 mb-[2px]'>
          <TextInput
            id='search'
            type='search'
            placeholder='Search here...'
            required
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
            className='text-[14px] font-[400] leading-[18px] tracking-[0.02em] capitalize text-[#08090A] border-[#8064A2] w-72'
          />
          <Button
            type='submit'
            className='bg-[#8064A2] rounded-tl-none rounded-bl-none'
          >
            <IoIosSearch className='w-5 h-5' />
          </Button>
        </form>
      </div>
      <div className='flex items-center justify-between gap-5 md:hidden'>
        <IoIosSearch className='w-6 h-6 text-[#8064A2]' />
        <AiFillBell className='text-[#8064A2] h-6 w-6' />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <MegaMenu.Dropdown
            toggle={
              <div className='flex items-center justify-start gap-2 '>
                <MdExplore className='text-[#8064A2] h-5 w-5' />
                <span className='text-[14px] font-[500] leading-[22px] text-[#8064A2]'>
                  Explore
                </span>
              </div>
            }
          >
            <ul className='grid grid-cols-3'>
              <div className='space-y-4 p-4'>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Pro Version
                  </a>
                </li>
              </div>
              <div className='space-y-4 p-4'>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Blog
                  </a>
                </li>
              </div>
              <div className='space-y-4 p-4'>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Playground
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    License
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
        </Navbar.Link>
        <Navbar.Link>
          <MegaMenu.Dropdown
            toggle={
              <div className='flex items-center justify-start gap-2 '>
                <TbHexagonLetterXFilled className='text-[#8064A2] h-5 w-5' />
                <span className='text-[14px] font-[500] leading-[22px] text-[#8064A2]'>
                  Hobbies
                </span>
              </div>
            }
          >
            <ul className='grid grid-cols-3'>
              <div className='space-y-4 p-4'>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-primary-600 dark:hover:text-primary-500'
                  >
                    Pro Version
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
        </Navbar.Link>
        <Navbar.Link href='/'>
          <BsBookmarkFill className='text-[#8064A2] h-5 w-5' />
        </Navbar.Link>
        <Navbar.Link href='/'>
          <AiFillBell className='text-[#8064A2] h-6 w-6' />
        </Navbar.Link>
        <Navbar.Link href='/'>
          <FaCartShopping className='text-[#8064A2] h-5 w-5' />
        </Navbar.Link>
        <MegaMenu.DropdownToggle>
          <Button
            type='button'
            outline
            color='purple'
            className='-mt-2 mb-[1px]'
          >
            Sign In
          </Button>
        </MegaMenu.DropdownToggle>
      </Navbar.Collapse>
      <MegaMenu.Dropdown>
        <div className='pt-16 mt-2 border-y border-gray-200 bg-[#F7F5F9] shadow-sm dark:border-gray-600 dark:bg-gray-800'>
          <div className='mx-auto grid max-w-screen-xl px-4 text-sm text-gray-500 dark:text-gray-400 grid-cols-2 md:grid-cols-5 gap-14 md:px-6'>
            <div className='flex flex-col justify-center items-start gap-3 col-span-2 md:col-span-3'>
              <h1 className='text-[36px] font-semibold italic leading-[54px] tracking-[0.02em]'>
                Explore your <span className='text-[#0096C8]'>hobby</span> or{" "}
                <span className='text-[#8064A2]'>passion</span>
              </h1>
              <p className='text-[14px] font-[300] leading-[30px] tracking-[0.02em]'>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p className='text-[14px] font-[300] leading-[30px] tracking-[0.02em]'>
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
              <div className='flex gap-1 mt-20'>
                <img alt='left' src={left} width={330} height={40} />
                <img alt='right' src={right} width={330} height={40} />
              </div>
            </div>
            <div className='col-span-2'>
              <Tabs
                aria-label='Tabs with underline'
                variant='underline'
                className='w-full'
              >
                <Tabs.Item active title='Sign In'>
                  <SignIn />
                </Tabs.Item>
                <Tabs.Item title='Join In'>
                  <JoinIn />
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
}

export default Header;

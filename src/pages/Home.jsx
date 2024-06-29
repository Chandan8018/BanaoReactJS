import { Button } from "flowbite-react";
import { HiUserGroup } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { BsHandbagFill, BsCalendarCheckFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaPlay, FaMicrophone } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import hobby1 from "../assets/hobby1.png";
import hobby2 from "../assets/hobby2.png";
import dance from "../assets/dance.png";
import longline from "../assets/long-line.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl p-10'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {/* People Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#b494db] hover:text-white'>
            <div className='text-base font-semibold leading-7 text-gray-900 flex justify-start items-center gap-3'>
              <HiUserGroup className='text-[#8064A2] h-7 w-7 hover:text-black' />
              <h3 className='text-[24px] font-[600] leading-[36px]'>People</h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px]'>
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <Button type='button' outline className='bg-[#8064A2] '>
              <span className='text-[14px] font-[600] leading-[16px] text-[#8064A2]'>
                Connect
              </span>
            </Button>
          </div>
          {/* Place Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#9ab167] hover:text-white'>
            <div className='text-base font-semibold leading-7 text-gray-900 flex justify-start items-center gap-3'>
              <MdLocationOn className='text-[#77933C] h-7 w-7 hover:text-black' />
              <h3 className='text-[24px] font-[600] leading-[36px]'>Place</h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px]'>
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <Button type='button' outline className='bg-[#8064A2] '>
              <span className='text-[14px] font-[600] leading-[16px] text-[#8064A2]'>
                Meet up
              </span>
            </Button>
          </div>
          {/* Product Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#d4807d] hover:text-white'>
            <div className='text-base font-semibold leading-7 text-gray-900 flex justify-start items-center gap-3'>
              <BsHandbagFill className='text-[#C0504D] h-7 w-7 hover:text-black' />
              <h3 className='text-[24px] font-[600] leading-[36px]'>Product</h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px]'>
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <Button type='button' outline className='bg-[#8064A2] '>
              <span className='text-[14px] font-[600] leading-[16px] text-[#8064A2]'>
                Get it
              </span>
            </Button>
          </div>
          {/* Program Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#82c3d9] hover:text-white'>
            <div className='text-base font-semibold leading-7 text-gray-900 flex justify-start items-center gap-3'>
              <BsCalendarCheckFill className='text-[#0096C8] h-7 w-7 hover:text-black' />
              <h3 className='text-[24px] font-[600] leading-[36px]'>Program</h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px]'>
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <Button type='button' outline className='bg-[#8064A2] '>
              <span className='text-[14px] font-[600] leading-[16px] text-[#8064A2]'>
                Attend
              </span>
            </Button>
          </div>
          {/* Add Your Own Section */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 md:col-span-2 my-10'>
            <div className='text-base font-semibold leading-7 text-gray-900 flex justify-start items-center gap-3'>
              <IoIosAddCircle className='text-[#0096C8] h-7 w-7 hover:text-black' />
              <h3 className='text-[24px] font-[600] leading-[36px]'>
                Add your own
              </h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px]'>
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <Button
              type='button'
              outline
              className='bg-[#8064A2] '
              onClick={() => navigate("/add-own")}
            >
              <span className='text-[14px] font-[600] leading-[16px] text-[#8064A2]'>
                Add new
              </span>
            </Button>
          </div>
        </dl>
        {/* Testimonial Section */}
        <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 md:col-span-2 my-20'>
          <div className='text-base font-semibold leading-7 text-gray-900 flex justify-start items-center gap-3'>
            <span className='rounded-full h-7 w-7 bg-[#8064A2] flex justify-center items-center'>
              <BiSolidQuoteAltLeft className='text-white h-5 w-5 hover:text-black' />
            </span>
            <h3 className='text-[24px] font-[600] leading-[36px]'>
              Testimonials
            </h3>
          </div>
          <p className='text-[18px] font-[300] leading-[30px] tracking-[0.02em] text-[#6D747A]'>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className='flex flex-wrap gap-16'>
            <div className='w-full md:w-[430px] h-[60px] rounded-[8px] bg-[#CCC1DA] flex justify-center items-center gap-5 p-2'>
              <span className='w-6 h-6 rounded-full bg-white flex justify-center items-center'>
                <FaPlay className='h-[10px] w-[10px] text-[#8064A2] ml-1' />
              </span>
              <div className='flex justify-center items-center'>
                <GoDotFill className='-mr-3 z-10 text-[#8064A2] h-5 w-5' />
                <img
                  alt='long play line'
                  src={longline}
                  className='w-[150px] md:w-[240px] h-[4px]'
                />
                <span className='text-[12px] font-[400] leading-[16px] pl-2'>
                  0:00
                </span>
              </div>
              <div className='flex justify-center items-center'>
                <FaMicrophone className='-mr-4 mt-4 z-10 text-white' />
                <img
                  alt='Classical Dancer'
                  src={dance}
                  className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full'
                />
              </div>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-3'>
              <img
                alt='Classical Dancer'
                src={dance}
                className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full'
              />
              <span className='flex flex-col text-center md:text-left'>
                <h3 className='text-[16px] md:text-[18px] font-[600] leading-[24px] md:leading-[27px] tracking-[0.02em] text-[#8064A2]'>
                  Shubha Nagarajan
                </h3>
                <h4 className='text-[12px] md:text-[14px] font-[400] leading-[18px] md:leading-[21px] tracking-[0.02em] text-[#0096C8]'>
                  Classical Dancer
                </h4>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action and Additional Images */}
      <div className='bg-[#F7FDFF] p-10 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-[36px] font-[500] leading-[54px] italic text-black'>
            Your <span className='text-[#8064A2]'>Hobby</span>, Your
            <span className='text-[#0096C8]'>Community...</span>
          </h3>
          <Button className='bg-[#8064A2] text-[#FFFFFF] w-32'>
            Get started
          </Button>
        </div>
        <div className='flex justify-center items-center'>
          <img
            alt='Hobby'
            src={hobby1}
            width={550}
            height={50}
            className='mt-10'
          />
          <img
            alt='Hobby2'
            src={hobby2}
            width={550}
            height={50}
            className='mt-10'
          />
        </div>
      </div>
    </>
  );
}

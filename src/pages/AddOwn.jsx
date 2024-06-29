import { HiUserGroup } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { BsHandbagFill, BsCalendarCheckFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";

function AddOwn() {
  return (
    <div className='w-full min-h-screen bg-[#f8f9fa] '>
      <div className='mx-auto max-w-2xl lg:max-w-4xl pt-10 pb-24'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-8 p-8 bg-white'>
          <div className='text-base font-semibold leading-7 text-gray-900 flex justify-center items-center gap-3 col-span-full'>
            <IoIosAddCircle className='text-[#0096C8] h-7 w-7 hover:text-black' />
            <h3 className='text-[24px] font-[600] leading-[36px]'>
              Add your own
            </h3>
          </div>
          {/* People Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#8064A2]  text-[#8064A2] hover:text-white'>
            <div className='text-base font-semibold leading-7  flex justify-start items-center gap-3'>
              <HiUserGroup className=' h-7 w-7 ' />
              <h3 className='text-[24px] font-[600] leading-[36px] text-gray-900'>
                People
              </h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px] text-gray-900'>
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
          </div>
          {/* Place Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#77933C] hover:text-white text-[#77933C]'>
            <div className='text-base font-semibold leading-7  flex justify-start items-center gap-3'>
              <MdLocationOn className=' h-7 w-7 ' />
              <h3 className='text-[24px] font-[600] leading-[36px] text-gray-900'>
                Place
              </h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px] text-gray-900'>
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
          </div>
          {/* Product Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#C0504D] hover:text-white text-[#C0504D]'>
            <div className='text-base font-semibold leading-7 flex justify-start items-center gap-3'>
              <BsHandbagFill className=' h-7 w-7 ' />
              <h3 className='text-[24px] font-[600] leading-[36px] text-gray-900 '>
                Product
              </h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px] text-gray-900 '>
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
          </div>
          {/* Program Card */}
          <div className='border-[#CED4DA] border-[1px] border-solid rounded-[8px] p-8 flex flex-col justify-center items-start gap-5 hover:bg-[#0096C8] hover:text-white text-[#0096C8]'>
            <div className='text-base font-semibold leading-7  flex justify-start items-center gap-3'>
              <BsCalendarCheckFill className=' h-7 w-7 ' />
              <h3 className='text-[24px] font-[600] leading-[36px] text-gray-900'>
                Program
              </h3>
            </div>
            <p className='text-[18px] font-[300] leading-[27px] text-gray-900'>
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default AddOwn;

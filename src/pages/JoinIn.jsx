import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { IoMdEyeOff, IoMdLock } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import google from "../assets/google.png";
import strightline from "../assets/stright-line.png";
import smallline from "../assets/small-line.png";

function JoinIn() {
  return (
    <form className='flex max-w-md flex-col gap-4 mt-4'>
      <Button type='button' color='purple' outline>
        <div className='flex items-center justify-start gap-7 md:gap-[4.3vw] md:-ml-[4.3vw]'>
          <img src={google} alt='google icon' width={22} height={22} />
          <span className='text-[14px] font-[600] leading-[16px] text-[#08090A]'>
            Continue with Google
          </span>
        </div>
      </Button>
      <Button type='button' color='purple' outline>
        <div className='flex items-center justify-start gap-7 md:gap-[4vw] md:-ml-[4vw]'>
          <FaFacebook className='text-blue-500 h-5 w-5' />
          <span className='text-[14px] font-[600] leading-[16px] text-[#08090A]'>
            Continue with Facebook
          </span>
        </div>
      </Button>
      <div className='flex items-center justify-between my-3'>
        <img alt='line' src={strightline} width={160} height={10} />
        <span className='text-[12px] font-[400] leading-[16px]'>
          Or connect with
        </span>
        <img alt='line' src={strightline} width={160} height={10} />
      </div>
      <TextInput id='email1' type='email' placeholder='Email' required />
      <TextInput
        id='password1'
        type='password'
        placeholder='Password'
        required
        rightIcon={IoMdEyeOff}
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-start gap-1'>
          <img alt='line' src={smallline} width={60} height={10} />
          <img alt='line' src={smallline} width={60} height={10} />
          <img alt='line' src={smallline} width={60} height={10} />
        </div>
        <h4 className='text-[10px] font-[600] leading-[16px] text-[#939CA3]'>
          Password strength
        </h4>
      </div>
      <h4 className='text-[12px] font-[400] leading-[18px] text-[#6D747A]'>
        By continuing, you agree to our{" "}
        <span className='text-[#08090A]'>Terms of Service</span> and{" "}
        <span className='text-[#08090A]'>Privacy Policy</span>.
      </h4>
      <Button type='submit' className='bg-[#8064A2]'>
        <span className='text-[14px] font-[600] leading-[16px] text-[#FFFFFF]'>
          Agree and Continue
        </span>
      </Button>
    </form>
  );
}
export default JoinIn;

import {
  Button,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  TextInput,
} from "flowbite-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoLogoGoogleplus, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <Footer container>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-0 sm:mt-4 md:grid-cols-4 gap-6 px-10 '>
            <div className=''>
              <FooterTitle
                title='Hobbycue'
                className='text-[14px] font-[700] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
              />
              <FooterLinkGroup
                col
                className='text-[14px] font-[400] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
              >
                <FooterLink>
                  <Link href='/'>About Us </Link>
                </FooterLink>
                <FooterLink>
                  {" "}
                  <Link to='#'>Our Services</Link>
                </FooterLink>
                <FooterLink>
                  <Link to='#'>Work with Us</Link>
                </FooterLink>
                <FooterLink>
                  <Link to='#'>FAQ</Link>
                </FooterLink>
                <FooterLink>
                  <Link to='#'>Contact Us</Link>
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title='How Do I'
                className='text-[14px] font-[700] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
              />
              <FooterLinkGroup
                col
                className='text-[14px] font-[400] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
              >
                <FooterLink href='#'>Sign Up</FooterLink>
                <FooterLink href='#'>Add a Listing</FooterLink>
                <FooterLink href='#'>Claim Listing</FooterLink>
                <FooterLink href='#'>Post a Query</FooterLink>
                <FooterLink href='#'>Add a Blog Post</FooterLink>
                <FooterLink href='#'>Other Queries</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title='Quick Links'
                className='text-[14px] font-[700] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
              />
              <FooterLinkGroup
                col
                className='text-[14px] font-[400] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
              >
                <FooterLink href='#'>Listings</FooterLink>
                <FooterLink href='#'>Blog Posts</FooterLink>
                <FooterLink href='#'>Shop / Store</FooterLink>
                <FooterLink href='#'>Community</FooterLink>
              </FooterLinkGroup>
            </div>

            <div className='flex flex-col justify-start items-start gap-8'>
              <div>
                <FooterTitle
                  title='Social Media'
                  className='text-[14px] font-[700] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
                />
                <div className='flex gap-2 justify-start items-center'>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <FaFacebookF className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <FaTwitter className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <FaInstagram className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <FaPinterest className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <IoLogoGoogleplus className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <FaYoutube className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <FaTelegramPlane className='h-5 w-5 text-[#6D747A]' />
                  </span>
                  <span className='rounded-full bg-[#EBEDF0] h-8 w-8 flex justify-center items-center'>
                    <IoMdMail className='h-5 w-5 text-[#6D747A]' />
                  </span>
                </div>
              </div>
              <div>
                <FooterTitle
                  title='Invite Friends'
                  className='text-[14px] font-[700] leading-[18px] tracking-[0.02em] capitalize text-[#08090A]'
                />
                <form className='flex items-center'>
                  <TextInput
                    id='email'
                    type='email'
                    placeholder='Your Email'
                    required
                    style={{
                      borderBottomRightRadius: 0,
                      borderTopRightRadius: 0,
                    }}
                    className='text-[14px] font-[400] leading-[18px] tracking-[0.02em] capitalize text-[#08090A] border-[#8064A2]'
                  />
                  <Button
                    type='submit'
                    className='bg-[#8064A2] rounded-tl-none rounded-bl-none'
                  >
                    Invite
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#F7F5F9] px-4 py-6 flex items-center justify-center'>
          <FooterCopyright
            href='#'
            by='Purple Cues Private Limited'
            className='text-[14px] font-[500] leading-[18px] tracking-[0.02em]'
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp;

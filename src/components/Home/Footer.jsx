import logo from "../images/Logo-1.jpeg"

const Footer = () => {
  return (
      <div className='bg-[#F5F5F5] py-5 px-10 md:flex md:justify-between md:h-[200px] items-center'>
          <div className='flex items-center mb-4 md:mb-0'>
              <img src={logo} alt="Logo" className="mr-4" />
              <div className='capitalize'>
                  <h3 className='text-[20px] text-[#000000] mb-2'>about</h3>
                  <h3 className='text-[20px] text-[#000000] mb-2'>contact</h3>
                  <h3 className='text-[20px] text-[#000000] mb-2'>terms & conditions</h3>
              </div>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center md:flex-row'>
              <span><i className="text-[20px] text-[#ED165F] cursor-pointer pr-2 fab fa-facebook-f"></i>facebook</span>
              <span><i className="text-[20px] text-[#ED165F] cursor-pointer pr-2 fab fa-twitter"></i>twitter</span>
              <span><i className="text-[20px] text-[#ED165F] cursor-pointer pr-2 fab fa-instagram"></i>instagram</span>
          </div>
          <div className="flex flex-col justify-center items-center md:w-[250px]">
              <h3 className='text-[#000] text-[20px] mb-3 capitalize'>subscribe to our newsletter</h3>
              <div className="flex">
                  <input type="text" placeholder='email address' className='w-full md:w-[209px] h-[40px] outline-none capitalize pl-2 border-2 border-[#ED165F] rounded-md mb-2 md:mb-0 mr-2' />
                  <button className='w-[61px] h-[40px] bg-[#ED165F] rounded-md cursor-pointer hover:bg-inherit hover:border-2 hover:border-[#ED165F]'>ok</button>
              </div>
          </div>
          <div className='flex flex-col items-center md:items-start'>
              <h4 className='text-[18px] mb-2 capitalize'>497 everdren Rd rosevilla ca 95673</h4>
              <h4 className='text-[18px] mb-2 capitalize'>+44 345 678 903</h4>
              <h4 className='text-[18px] mb-2 capitalize'>abodexd@mail.com</h4>
          </div>
      </div>

  )
}

export default Footer
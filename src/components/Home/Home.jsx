import Navbar from './Navbar'
import bottom from "../images/bottom.png"
import image from "../images/header-bg.png"
import About from './About'
import Footer from './Footer'


const Home = () => {

  return (
    <div>
      <div className='mb-[200px]'>
        <header className='  bg-[#ED165F] pb-3'>
          <Navbar />
          <div className='flex justify-center h-[80%]'>
            <img src={image} alt="" className='mt-5  ' />
          </div>

          <div className='w-full flex flex-col items-center mt-3'>
            <h1 className='capitalize text-[20px] text-white font-normal'>Explore our collection</h1>
            <img src={bottom} alt="" />
          </div>
        </header>
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default Home

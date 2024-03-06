import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar'
import { useSearchContext } from '../Home/useSearch';

const Shoes = () => {
  const navigate = useNavigate()
  const { inputVal } = useSearchContext();
  const [disNext, setDisNext] = useState(false)
  const [disPrev, setDisPrev] = useState(false)
  const [limit, setLimit] = useState(10)
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        setUsers(res?.data)
      })
    if (limit === 10) {
      setDisPrev(true)
      setDisNext(false)
    } else {
      setDisPrev(false)
      setDisNext(true)
    }
  }, [limit])

  let result = localStorage.getItem("changInput")
  console.log(result);

  const handleClick = (item) => {
    const result = localStorage.getItem("changInput");
      if (result) {
          const storedData = JSON.parse(localStorage.getItem("cartData")) || [];
          const isItemInCart = storedData.some(cartItem => cartItem.id === item.id);
          if (!isItemInCart) {
              localStorage.setItem("cartData", JSON.stringify([...storedData, item]));
          }
          navigate("/shopping");
      } else {
          navigate("/account");
      }
  };

  // filter qilish
  const filtered = users.filter(user =>
    user.category.toLowerCase().includes(inputVal.toLowerCase())
  );
  const img = users?.slice((users.length - 10), users.length)
  const next = () => {
    setLimit((page) => page * 2)
    if (limit === 20) {
      setDisNext(true)
    } else {
      setDisNext(false)
      setDisPrev(false)
    }
  }
  const prev = () => {
    setLimit((page) => page / 2)
    if (img.length < 4) {
      setDisPrev(true)
    } else {
      setDisNext(false)
      setDisPrev(false)
    }
  };

  return (
    <div className='relative h-[100%]'>
      <div>
        <div className='w-full relative'>
          <Navbar />
          <div className='flex justify-center items-center w-full mb-16'>
            <div className='flex justify-between w-[95%] items-center'>
              <div className=' flex flex-col pt-[200px] w-[25%]'>
                <h1 className='capitalize mb-2 text-[25px] font-normal'>shoes</h1>
                <hr className='w-[400px] h-5' />
                <div className=''>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>all</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>dress</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>denim</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>jeans</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>jumpsuits</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>tops</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>jacets and coats</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>pants</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>shorts</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>skirts</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>loungeria & undervar</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>leather</h1>
                  <h1 className='capitalize text-[#777] text-[22px] mb-2'>sweaters & knits</h1>
                </div>
                <div className='mt-3'>
                  <h1 className='mb-3 capitalize text-[30px]'>size-EU/US</h1>
                  <div className='h-[2px] mb-3 bg-[#999] w-[80%]'></div>
                  <div className='w-[250px] grid grid-cols-3 gap-8'>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>35,5/5</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>36/5,5</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>37.5/6</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>38/7</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>39/7</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>41,3/5</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>40/7.5</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>41/7,5</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>41,5/10</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>42/10,5</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>41/11</button>
                    <button className='w-[75px] h-[32px] border-2 rounded border-[#555] uppercase '>43/12</button>
                  </div>
                </div>
                <div className='mt-[100px]'>
                  <h1 className='capitalize mb-2  text-[30px] font-normal'>colors</h1>
                  <div className='h-[2px] mb-5 bg-[#999] w-[80%]'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8  bg-[#F3ECDB]'></div>beidge</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8  bg-[#465BA3] rounded'></div>blue</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#000]'></div>black</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#F07B4E]'></div>orange</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#41854D]'></div>green</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#665147]'></div>brown</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#893D88]'></div>purple</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#F3B121]'></div>gold</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#CAC1B8]'></div>taup</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-white'></div>white</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#F2A1B1]'></div>pink</span>
                    <span className='flex items-center gap-2 capitalize text-[20px]'><div className='w-10 h-8 rounded cursor-pointer  bg-[#D23C47]'></div>red</span>
                  </div>
                </div>
                <div className='mt-10'>
                  <h1 className='mb-3 capitalize text-[30px]'>price</h1>
                  <div className='h-[2px] mb-3 bg-[#999] w-[80%]'></div>
                  <div className='flex flex-col'>
                    <div className='flex gap-3 capitalize text-[22px] mb-4'><input type="checkbox" className='w-[40px]' />$0 - 10 000</div>
                    <div className='flex gap-3 capitalize text-[22px] mb-4'><input type="checkbox" className='w-[40px]' />$10, 000 - 20 000</div>
                    <div className='flex gap-3 capitalize text-[22px] mb-4'><input type="checkbox" className='w-[40px]' />$20, 000 - 50 000</div>
                    <div className='flex gap-3 capitalize text-[22px] mb-4'><input type="checkbox" className='w-[40px]' />$50, 000 - 100 000</div>
                    <div className='flex gap-3 capitalize text-[22px] mb-4'><input type="checkbox" className='w-[40px]' />$100 - 200, 000</div>
                    <div className='flex gap-3 capitalize text-[22px] mb-4'><input type="checkbox" className='w-[40px]' />$0 - 10 000</div>
                  </div>
                  <div className='flex gap-4'>
                    <input type="text" className='w-16 rounded border-2 border-[#000]' /> to
                    <input type="text" className='w-16 rounded border-2 border-[#000]' />
                    <button className='w-[80px]  bg-[#ED165F] capitalize text-teal-100 text-[15px]'>apply</button>
                  </div>
                </div>
              </div>
              <div className='w-[70%]'>
                <div>
                  <select className='outline-none w-[200px] h-10 border-2 border-[#000] text-center absolute right-10 top-[200px]'>
                    <option value="sort by: most popular">sort by: most popular</option>
                    <option value="sort by: most popular"> most popular</option>
                    <option value="best silling">best silling</option>
                    <option value="price: high to low">price: high to low</option>
                    <option value="price: high to high">price: high to high</option>
                  </select>
                </div>
                <div className='text-center mx-auto flex flex-col items-center pt-[300px]'>
                  <div className='w-full grid grid-cols-3  items-center justify-center'>
                    {filtered?.map((item, index) => {
                      return (
                        <div key={index} onClick={()=> handleClick(item)}  className='flex flex-col items-center relative  w-[300px] h-[420px] pt-5 rounded-lg mx-auto cursor-pointer hover:shadow-slate-500 hover:shadow-2xl'>
                          <div className='flex flex-col absolute z-[-1] top-[35%]'>
                            <i className=" cursor-pointer fa-regular fa-heart mb-3 text-[35px] text-[#ED165F]"></i>
                            <span className='capitalize font-bold inline-block w-[150px] h-10 bg-[#ffffff] pt-2 rounded text-[20px]'>add to cart <i className="cursor-pointer fa-solid fa-cart-shopping text-[22px] text-[#ED165F]"></i></span>
                          </div>
                          <img className='w-64 h-64 mb-6 hover:opacity-30 hover:transition-opacity' src={item.image} alt="" />
                          <h2 className='capitalize text-[#000000] text-[24px] font-normal'>{item.category}</h2>
                          <p className='text-[#000000] text-[20px]'>${item.price}</p>
                        </div>)
                    })}
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                    <button className='w-12 h-8 cursor-pointer border-b-2 border-red-200 my-2 mx-2' disabled={disPrev} onClick={prev} >1</button>
                    <button className='w-12 h-8 cursor-pointer border-b-2 border-red-200 my-2 mx-2' disabled={disNext} onClick={next}>2</button>
                    <i className="fa-solid fa-chevron-right text-[20px] cursor-pointer text-red-200"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-grow'>
        <Footer />
      </div>
    </div>
  )
}

export default Shoes
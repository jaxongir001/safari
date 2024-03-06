
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from './useSearch';

const About = () => {
    const { inputVal } = useSearchContext();
    const [disNext, setDisNext] = useState(false);
    const [disPrev, setDisPrev] = useState(false);
    const [limit, setLimit] = useState(10);
    // const [myData, setMyData] = useState([])
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    let result = localStorage.getItem("changeInput")
    console.log(result);

    const handleClick = (item) => {
        const result = localStorage.getItem("changeInput");
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

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
            .then((res) => {
                setUsers(res?.data);
            });
        if (limit === 10) {
            setDisPrev(true);
            setDisNext(false);
        } else {
            setDisPrev(false);
            setDisNext(true);
        }
    }, [limit]);

    //  filter bo'layotgan user 

    const filetered = users.filter(user =>
        user.category.toLowerCase().includes(inputVal.toLowerCase())
    );

    const img = users?.slice((users.length - 10), users.length);
    const next = () => {
        setLimit((page) => page * 2);
        if (limit === 20) {
            setDisNext(true);
        } else {
            setDisNext(false);
            setDisPrev(false);
        }
    };
    const prev = () => {
        setLimit((page) => page / 2);
        if (img.length < 4) {
            setDisPrev(true);
        } else {
            setDisNext(false);
            setDisPrev(false);
        }
    };

    return (
        <div className='pt-6 text-center mx-auto'>
            <div className='flex justify-center  mb-10 mt-5'>
                <p className='w-[90%] text-center text-[24px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing  viverra br at tortor, egestas odio parturient. Morbi ut lorem in erat. <br /> Et et molestie diam diam ultricies br
                    Scelerisque duis diam ac cra dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.</p>
            </div>
            <div className='w-full grid grid-cols-3 gap-8 items-center justify-center'>
                {filetered?.map((item, index) => {
                    return (
                        <div key={index} onClick={() => handleClick(item)} className='flex flex-col items-center relative  w-[340px] h-[420px] pt-5 rounded-lg mx-auto cursor-pointer hover:shadow-slate-500 hover:shadow-2xl'>
                            <div key={index} className='flex flex-col absolute z-[-1] top-[35%]'>
                                <i className=" cursor-pointer fa-regular fa-heart mb-3 text-[35px] text-[#ED165F]"></i>
                                <span className='capitalize font-bold inline-block w-[150px] h-10 bg-[#ffffff] pt-2 rounded text-[20px]'>add to cart <i className="cursor-pointer fa-solid fa-cart-shopping text-[22px] text-[#ED165F]"></i></span>
                            </div>
                            <img className='w-64 h-64 mb-6 hover:opacity-30 hover:transition-opacity' src={item.image} alt="" />
                            <h2 className='capitalize text-[#000000] text-[24px] font-normal'>{item.category}</h2>
                            <p className='text-[#000000] text-[20px]'>${item.price}</p>
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-5 justify-center  items-center  ">
                <button className='w-12 h-8 cursor-pointer border-b-2 border-pink-700 my-2 mx-2' disabled={disPrev} onClick={prev} >1</button>
                <button className='w-12 h-8 cursor-pointer  border-b-2 border-pink-700 my-2 mx-2' disabled={disNext} onClick={next}>2</button>
                <i className="fa-solid fa-chevron-right text-[20px] cursor-pointer text-red-300"></i>
            </div>
        </div>
    );
};

export default About;

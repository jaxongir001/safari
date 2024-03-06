import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const Account = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        lastName: "",
        createAccount: "",
        confirmAccount: "",
    });

    const myFuncBtn = () => {
        if (
            formData.first_name !== "" &&
            formData.lastName !== "" &&
            formData.createAccount !== "" &&
            formData.confirmAccount !== ""
        ) {
     localStorage.setItem("changeInput", "keldi")
            navigate("/");
        } else {
            alert("xatolik");
        }
    };

    return (
        <div className='w-full h-[100vh] flex'>
            <Navbar />
            <div className='flex justify-around pt-[100px] w-full h-[100vh] items-center'>
                <div className='flex flex-col gap-5 pt-[200px]'>
                    <h1 className='capitalize text-[30px] font-extrabold'>create account</h1>
                    <div>
                        <p className='capitalize mb-2'>first name</p>
                        <input
                            type="text"
                            className='w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize'
                            placeholder='first name'
                            name='firstname'
                            value={formData.first_name}
                            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <p className='capitalize mb-2'>last name</p>
                        <input
                            type="text"
                            className='w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize'
                            placeholder='last name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <p className='capitalize mb-2'>email</p>
                        <input
                            type="text"
                            className='w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize'
                            placeholder='enter your email'
                            name='login'
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <p className='capitalize mb-2'>create password</p>
                        <input
                            type="password"
                            className='w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize'
                            placeholder='create password'
                            name='createAccount'
                            value={formData.createAccount}
                            onChange={(e) => setFormData({ ...formData, createAccount: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <p className='capitalize mb-2'>confirm password</p>
                        <input
                            type="password"
                            className='w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize'
                            placeholder='confirm password'
                            value={formData.confirmAccount}
                            onChange={(e) => setFormData({ ...formData, confirmAccount: e.target.value })}
                            required
                        />
                    </div>
                    <span className='flex gap-3'>
                        <input type="checkbox" className='w-[30px] cursor-pointer' />I want to receive Safari newsletters with the best deals and offers
                    </span>
                    <br />
                    <button
                        className='w-[400px] h-[40px] bg-[#ED165F] border-none rounded-md capitalize text-[white] text-[22px] cursor-pointer'
                        onClick={myFuncBtn}
                    >
                        create account
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Account;

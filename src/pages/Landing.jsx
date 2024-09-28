import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate= useNavigate();
    return (
        <div className="h-screen bg-[url('/farmerrs.jpeg')] items-center bg-cover bg-center">
          <nav className="flex justify-end items-center p-4 mr-10 pt-5">
            <ul className="flex space-x-4">
            <li>
                <div className='bg-white  rounded-lg  p-1 mb-4' onClick={()=>{
                    navigate('/login')

                }}>
                    <img loading='lazy' src='./google.png' className='w-24 h-12 -mb-3 -mt-3'/>
                </div>
              </li>
              <li>
                <Link to="/register" className="text-white text-xl hover:text-gray-300 font-bold">Register</Link>
              </li>
              <li>
                <Link to="/login" className="text-white text-xl hover:text-gray-300 font-bold">Login</Link>
              </li>
            </ul>
          </nav>
    
          <div className="flex justify-center items-center h-2/3">
            <div className=" p-10 ">
              <h1 className="text-4xl font-extrabold mb-4 text-center text-white">INDIAN FARMERS</h1>
              <div className='md:flex justify-between '>
                    <button className='bg-white text-green-900 text-2xl text-center font-bold w-[200px] h-[50px] rounded-3xl mr-5 hover:bg-gray-200'
                        onClick={()=>{
                            navigate('/register')
                        }}>Register</button>
                    <button className='bg-white text-green-900 text-2xl text-center font-bold w-[200px] h-[50px] rounded-3xl hover:bg-gray-200'
                        onClick={()=>{
                            navigate('/login')
                        }}>Login</button>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default Landing;

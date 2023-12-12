import React, { useEffect, useRef, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import asu from '../../assets/asu.png'
import { AiFillInstagram } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialLinkedin  } from "react-icons/ti";
import { TbDeviceImacBolt } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaYoutube,FaLinkedin, FaRegEye } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoRefresh } from "react-icons/io5";


// Import Swiper styles

import 'swiper/css';
import 'swiper/swiper-bundle.css';


const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openHover, setOpenHover] = useState(false)
    const handleOpenHover = () => {
        setOpenHover(!openHover)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openWeb, setOpenWeb] = useState(false)
    const handleOpenWeb = () => {
        setOpenWeb(!openWeb)
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iframeRef = useRef(null);

    const handleRefreshClick = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.location.reload();
      }
    };

    const url = "http://localhost:5173/"
    
  return (
    <div className='w-full h-auto bg-[#191D28]'>
        {openWeb && (
        <div className='bg-black text-white w-full h-full rounded-lg overflow-hidden fixed z-[60] bg-opacity-50 flex items-center justify-center p-[50px]'>
            <div className=' h-full w-full bg-[#191D28] flex flex-col'>
                <div className='w-full bg-[#191D28] gap-[20px] flex items-center p-[20px] justify-between' >
                    <div className='flex gap-[15px] text-[20px]'>
                        <div className='flex gap-[10px]'>
                        <button>
                            <GoArrowLeft/>
                        </button>
                        <button>
                            <GoArrowRight/>
                        </button>
                        </div>
                            <button onClick={handleRefreshClick}>
                                <IoRefresh/>
                            </button>
                    </div>
                    <div className='w-full bg-[#040717] py-[10px] px-[30px] rounded-full'>
                        {url}
                    </div>
                    <button onClick={handleOpenWeb}>close</button>
                </div>
                <div>

                </div>
                <iframe
                src={url}
                id="my-iframe"
                title="Iframe Example"
                width="100%"
                height="100%"
                frameBorder="0"
                ></iframe>
            <div>asu</div>
            </div>
        </div>
        )}
        {/* navbar */}
        <div className='w-full z-50 border-b border-white sticky top-[0px] bg-[#191D28] flex items-center justify-between py-[20px] px-[50px]'>
            <div className='text-white text-[20px] font-bold uppercase'>
                pkk
            </div>
            <div className='w-full bg-transparent flex items-center justify-center max-lg:hidden text-white'>
                <ul className='flex gap-[30px] font-semibold text-[16px]'>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Portofolio</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='capitalize text-[16px] hover:bg-white hover:text-black font-semibold gap-[8px] flex text-white border border-white py-[10px] max-lg:px-[40px] lg:px-[50px] rounded-full items-center'>
                    <BsDownload className='text-[18px]' />
                     <div className='flex items-center gap-[5px]'>
                     <p>download</p> <span className='uppercase'>cv</span>
                    </div>
                </button>
            </div>
        </div>
        {/* page */}
        <div className='w-full grid lg:grid-cols-2 max-lg:px-[20px] lg:px-[50px] gap-[40px] lg:py-[100px] max-lg:pt-[20px] max-lg:pb-[50px] max-lg:grid-cols-1'>
        <div className='bg-white w-full max-lg:h-[400px] lg:h-full rounded-lg flex items-end justify-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.aoGl2DjVsA0S_uY49GMn5QHaEC&pid=Api&P=0&h=180)' }}/>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex flex-col max-xl:gap-[0px] xl:gap-[10px]'>
                <h1 className='text-[#85888E] text-[24px] uppercase font-bold max-xl:text-[18px] '>hello i{'`'}m</h1>
                <div className='flex flex-col'>
                <h1 className='capitalize text-white xl:text-[50px] font-bold max-xl:text-[40px]'>rio alamsyah</h1>
                <h1 className='text-[18px] capitalize text-[#6A6E74] font-bold'>frontend developer</h1>
                </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[#5838A5] text-[22px] font-bold underline underline-offset-[7px]'>babakan176@gmail.com</h1>
                        <p className='text-[#6A6E74] capitalize text-[16px] font-bold'>cikaret gg kasadaran, pasirkuda bogor selatan rt 1 rw 2</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <button className='border border-[#323846] text-white p-[10px] rounded-full text-[20px]'>
                            <AiFillInstagram />
                        </button>
                        <button className='border border-[#323846] bg-blue-500 text-white p-[10px] rounded-full text-[20px]'>
                            <RiFacebookFill />
                        </button>
                        <button className='border border-[#323846] text-white p-[10px] rounded-full text-[20px]'>
                            <TiSocialLinkedin  />
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
        
        <div className='w-full bg-[#040717] h-auto flex flex-col py-[100px] gap-[30px]'>
            <div className='w-full items-center justify-center flex flex-col gap-[0px] '>
                <div className='flex flex-col gap-[5px] items-center justify-center'>
                <div className='w-[20px] h-[20px] rounded-full bg-blue-500 flex items-center justify-center before:w-[12px] before:h-[12px] before:bg-[#040717] before:rounded-full'/>
                <p className='text-gray-500 font-bold  uppercase text-[12px]'>who i am</p>
                </div>
                <h1 className='text-white capitalize font-bold text-[40px]'>resume</h1>
            </div>
            <div className='w-full bg-transparent grid max-lg:grid-cols-1 lg:grid-cols-2 gap-[50px]'>
                <div className='w-full h-full bg-transparent py-[20px] px-[40px] lg:pl-[50px]'>
                    <div className='w-full h-full flex flex-col gap-[10px] bg-transparent'>
                        <div className='w-full bg-[#121622] text-white p-[20px] flex rounded-lg h-auto items-center'>
                            <div className='flex text-[16px] capitalize w-[200px]'>
                                age
                            </div>
                            <div className='w-full'>
                                18
                            </div>
                        </div>
                        <div className='w-full bg-transparent text-white p-[20px] flex rounded-lg h-auto items-center'>
                            <div className='flex text-[16px] capitalize w-[200px]'>
                                country
                            </div>
                            <div className='w-full'>
                                Indonesia
                            </div>
                        </div>
                        <div className='w-full bg-[#121622] text-white p-[20px] flex rounded-lg h-auto items-center'>
                            <div className='flex text-[16px] capitalize w-[200px]'>
                                email
                            </div>
                            <div className='w-full'>
                                Babakan176@gmail.com
                            </div>
                        </div>
                        <div className='w-full bg-transparent text-white p-[20px] flex rounded-lg h-auto items-center'>
                            <div className='flex text-[16px] capitalize w-[200px]'>
                                phone
                            </div>
                            <div className='w-full'>
                                085607436610
                            </div>
                        </div>
                        <div className='w-full bg-[#121622] text-white p-[20px] flex rounded-lg h-auto items-center'>
                            <div className='flex text-[16px] capitalize w-[200px]'>
                                freelance
                            </div>
                            <div className='w-full'>
                                Available
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-transparent w-full h-full pr-[50px]'>
                    <div className='w-full h-full bg-white rounded-lg'>
                    </div>
                </div>
            </div>
        </div>
            <div className='w-full h-auto py-[50px] px-[50px] flex flex-col gap-[20px]'>
                <div className='w-full h-auto flex items-center justify-center flex-col'>
                <div className='flex flex-col gap-[5px] items-center justify-center'>
                <div className='w-[20px] h-[20px] rounded-full bg-blue-500 flex items-center justify-center before:w-[12px] before:h-[12px] before:bg-[#040717] before:rounded-full'/>
                <p className='text-gray-500 font-bold  uppercase text-[12px]'>who i am</p>
                </div>
                <h1 className='text-white capitalize font-bold text-[40px]'>work</h1>
                </div>
                <div className='flex w-full h-full max-h-[530px]'>
                <div className='w-full h-auto text-white bg-transparent border-r border-[#85888E] flex flex-col gap-[30px] hidden-scroll overflow-y-scroll p-[30px]'>
                    <Swiper
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={3}
            direction="vertical" 
            className='w-full'
            >
                <SwiperSlide>
                <div className='w-full h-[150px] hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex-row-reverse flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-end flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-end text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-[150px] hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex-row-reverse flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-end flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-end text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-[150px] hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex-row-reverse flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-end flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-end text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
          
                </div>
                <div className='w-full h-auto text-white border-l border-[#85888E] bg-transparent flex hidden-scroll flex-col gap-[30px] overflow-y-scroll p-[30px]'>
               <Swiper
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={3}
            direction="vertical" 
            className='w-full'
            >
                <SwiperSlide>
                <div className='w-full h-full hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-start flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-start text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-full hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-start flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-start text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-full hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-start flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-start text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-full hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-start flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-start text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-full hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-start flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-start text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-full hover:bg-[#040717] p-[20px] rounded-lg  bg-transparent flex items-center justify-start gap-[20px] '>
                        <span className='text-white bg-red-500 p-[10px] rounded-md'>
                        <TbDeviceImacBolt className='text-[30px]'/>
                        </span>
                        <div className='w-full h-auto items-start flex-col bg-transparent text-white gap-[5px] justify-center flex'>
                            <h1 className='uppercase text-[16px] font-bold'>present jan 2006 - feb 2007</h1>
                            <div className='w-full h-auto text-start text-gray-400'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi, impedit tenetur omnis ducimus aperiam?</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
          
                </div>
                </div>
                <div className='w-full bg-[#040717] p-[20px] grid grid-cols-4 gap-[10px] rounded-lg'>
                    <div className='w-full bg-transparent flex items-center justify-center  flex-col p-[10px]'>
                        <h1 className='text-[50px] text-white'>9.000</h1>
                        <p className='text-[16px] text-gray-500 font-bold'>Client Happy</p>
                    </div>
                    <div className='w-full bg-transparent flex items-center justify-center  flex-col p-[10px]'>
                        <h1 className='text-[50px] text-white'>80</h1>
                        <p className='text-[16px] text-gray-500 font-bold'>Client Happy</p>
                    </div>
                    <div className='w-full bg-transparent flex items-center justify-center  flex-col p-[10px]'>
                        <h1 className='text-[50px] text-white'>10</h1>
                        <p className='text-[16px] text-gray-500 font-bold'>Client Happy</p>
                    </div>
                    <div className='w-full bg-transparent flex items-center justify-center  flex-col p-[10px]'>
                        <h1 className='text-[50px] text-white'>1k</h1>
                        <p className='text-[16px] text-gray-500 font-bold'>Client Happy</p>
                    </div> 
                  
                </div>
            </div>
            <div className='w-full bg-[#040717] h-auto py-[50px] px-[50px] flex flex-col gap-[20px]'>
        <div className='w-full h-auto flex items-center justify-center flex-col'>
            <div className='flex flex-col gap-[5px] items-center justify-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-blue-500 flex items-center justify-center before:w-[12px] before:h-[12px] before:bg-[#040717] before:rounded-full' />
            <p className='text-gray-500 font-bold uppercase text-[12px]'>who i am</p>
            </div>
            <h1 className='text-white capitalize font-bold text-[40px]'>project</h1>
        </div>
        <div className='flex flex-col gap-[10px] text-white'>
        <div className='w-full h-auto'>
            <Swiper
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={3}
            className='bg-transparent max-h-[200px] h-[200px]'
            autoplay={{ delay: 1 }} 
            loop={true}
            >
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
               <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            </Swiper>
        </div>
        <div className='w-full h-auto'>
            <Swiper
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={2}
            className='bg-transparent max-h-[200px] h-[200px]'
            >
            <SwiperSlide onMouseEnter={handleOpenHover} onMouseLeave={handleOpenHover} className='bg-[#191D28] overflow-hidden items-start justify-end rounded-[20px] bg-cover bg-no-repeat flex flex-col ' style={{ backgroundImage: 'url(https://tse3.mm.bing.net/th?id=OIP.djRU24KcQz8-9yh2a8e37wHaE8&pid=Api&P=0&h=180)' }}>
                {openHover && (
               <div className='w-full h-full flex items-center justify-center bg-black bg-opacity-25 '>
                <button onClick={handleOpenWeb} className='bg-red-500 p-[10px] rounded-full text-white text-[20px]'>
                    <FaRegEye/>
                </button>
               </div>
                )}
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            </Swiper>
        </div>
        <div className='w-full h-auto'>
            <Swiper
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={3}
            className='bg-transparent max-h-[200px] h-[200px]'
            >
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
               <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#191D28] rounded-[20px]'>
            <p>asu 1</p>
            </SwiperSlide>
            </Swiper>
        </div>

        </div>
        </div>
        <div className='w-full text-white bg-transparent h-auto p-[50px] grid grid-cols-2'>
            <div className='w-full h-full justify-center flex-col flex bg-transparent gap-[10px] '>
                <div>
                <h1 className='text-[30px] uppercase font-bold text-red-500'>@rioalamsyah.com</h1>
                <h1 className='capitalize font-semibold text-gray-500 text-[16px]'>about your next project</h1>
                </div>
                <button className='max-w-[200px] uppercase font-bold text-[14px] rounded-md w-full bg-red-500 text-white p-[10px]'>
                    contact here
                </button>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-col'>
                <h1 className='text-white text-[18px] font-bold capitalize'>kritik dan saran</h1>
                <p className='text-[16px] text-gray-500 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsam soluta sed dolore, corporis iure dolorem repellendus sint expedita ullam?</p>
                </div>
                <textarea type="text" className='w-full p-[10px] outline-none border border-white border-opacity-40 rounded-md bg-[#040717]' />
            </div>
        </div>
        <div className='w-full bg-[#040717] grid grid-cols-2'>
            <div className='w-full h-full text-white capitalize font-bold  flex items-center justify-center gap-[20px]'>
                <FaYoutube className='text-[80px] text-red-500'/>
                <div className='flex flex-col'>
                <p className='text-[30px] '>
                rioalamsyah.id
                </p>
                <div className='text-[14px] text-gray-500 flex items-center gap-[10px] '>
                    <div className='w-[50px] h-[2px] bg-white'/>
                    more coding more happy
                </div>
                </div>
            </div>
            <div className='bg-[#3E0100] w-full h-full p-[50px] gap-[10px] flex flex-col'>
                <h1 className='text-[20px] text-white font-bold capitalize'>follow your creativity thingking here</h1>
                <div className='w-full max-h-[50px] h-[50px] flex rounded-lg overflow-hidden'>
                    <input type="text" className='w-full h-full px-[20px] placeholder:font-semibold placeholder:capitalize outline-none' placeholder='input here!!' />
                    <button className='px-[20px] text-white h-full capitalize bg-red-500 font-semibold'>subscribe</button>
                </div>
                <div className='flex items-center justify-between mt-[10px]'>
                    <h1 className='text-[16px] text-white capitalize font-semibold'>find us here</h1>
                    <div className='flex gap-[10px]'>
                        <button className='w-[40px] h-[40px] text-[18px] flex items-center justify-center rounded-md bg-red-500 text-white'>
                            <FaFacebookF/>
                        </button>
                        <button className='w-[40px] h-[40px] text-[18px] flex items-center justify-center rounded-md bg-red-500 text-white'>
                            <FaYoutube/>
                        </button>
                        <button className='w-[40px] h-[40px] text-[18px] flex items-center justify-center rounded-md bg-red-500 text-white'>
                            <FaLinkedin/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-auto border-white border-t flex items-center justify-between p-[20px] text-white'>
            <p className='flex capitalize font-semibold'>@<span className='font-bold text-red-500 text-[16px] capitalize mr-[5px]'>rioalamsyah</span>production</p>
            <p className='text-red-500 capitalize font-bold'>@copyrigth alami asu</p>
        </div>
    </div>
  )
}

export default page
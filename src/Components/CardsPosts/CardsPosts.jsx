import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import cardsData  from './CardData';
import { useNavigate } from 'react-router-dom';

const CardsPosts = () => {
   const navigate = useNavigate();

  return (
    <div className='container m-auto'>
     <div className='text-[#fff] flex gap-[10px] mb-[50px] mt-[20px] lg:mx-[50px] mx-[20px] items-center'>
      <button className='bg-[#36454F] border-[1px] border-[#36454F] rounded-full px-3 py-2 text-[#ea8207] hover:text-[#2e7d32] hover:bg-transparent ease-in-out duration-300 hover:border-[1px] hover:border-[#ea8207]' onClick={()=> navigate(-1)}><LeftOutlined className='text-[20px]'/></button>
      <h2 className='font-nunito text-[#ea8207] text-[20px]'>Tangerine Premium Feature</h2>
     </div>
     <div className="flex w-[100%] gap-[20px] flex-wrap justify-center lg:flex-row mb-[90px]">
      {cardsData.map((items, index)=>(
        <div className="bg-[#ea8207] px-10 py-6 lg:w-[30%] border-[1px] border-[#fff] w-[90%] m-auto hover:scale-[1.02] ease-in-out duration-300 cursor-pointer" key={index} style={{borderTopLeftRadius : "100px", borderBottomRightRadius: "100px" , boxShadow: "1px 0px 11px 2px rgba(255, 255, 255)"}} onClick={()=>navigate('/edit')}>
         <h2 className='text-[#fff] font-nunito lg:text-[25px] text-[20px] font-[500] text-center'>{items.heading}</h2>
         <p className='text-[#000] text-center font-[500] font-nunito my-[15px]'>{items.price}</p>
         <p className='text-[#fff] text-center font-[500] font-nunito'>{items.desc}</p>
         <div className="flex justify-center mt-[20px]">
         <button className='text-[#fff] text-center bg-[#2e7d32] font-nunito px-4 py-1 rounded-full border-[1px] border-[#2e7d32] hover:bg-transparent ease-in-out duration-300' onClick={()=>navigate('/edit')}>Buy Now</button>
         </div>
        </div>
      ))}
     </div>
    </div>
  )
}

export default CardsPosts

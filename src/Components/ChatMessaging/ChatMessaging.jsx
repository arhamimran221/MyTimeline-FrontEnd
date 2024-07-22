import React from 'react'
import ChatsData from './ChatsData'
import { SendOutlined } from '@ant-design/icons'
import { FormControl, InputLabel, TextField } from '@mui/material';

const ChatMessaging = () => {
  return (
    <div className='w-[100%] flex gap-[20px] mx-auto px-2'>
      <div className="lg:w-[30%] w-[95%] lg:mx-0 mx-auto">
        <h2 className='text-[#fff] font-nunito text-[25px] text-center mt-[20px] mb-[10px]'>Inbox</h2>
        <div className='lg:h-[580px] h-[600px] overflow-y-scroll lg:pl-[10px]'>
        {ChatsData.map((items, index)=>(
            <div className='bg-[#f5f5f5] p-2 flex w-[100%] rounded-[10px] mb-[10px] gap-[10px] items-center cursor-pointer hover:scale-[1.02] ease-in-out duration-300' key={index}>
               <div className="w-[20%]">
                <img src={items.personImage} alt="" srcset="" />
               </div>
               <div className="w-[80%]">
                <strong className="font-nunito font-[800] text-[18px] leading-[10px]">{items.name}</strong>
                <p className='font-nunito text-[#bababa] font-[500]'>{items.message}</p>
               </div>
            </div>
        ))}
        </div>
      </div>
      <div className='w-[68%] border-[1px] border-[#f5f5f5] rounded-md mt-[10px] relative lg:block hidden'>
        <p className='text-[#fff] text-center font-nunito my-[250px] text-[30px] font-[700]'>Start Conversation with us!</p>
        <div className="absolute bottom-[10px] left-[10px] right-[10px] w-[100%] flex gap-[10px]">
            <input type="text" className='bg-[#0000] border-[1px] border-[#ffff] rounded-md py-4 w-[86.5%] font-nunito placeholder:text-[#fff] px-4 text-[#fff] focus:outline-none' placeholder='Send Messages......'/>
            <button className='w-[10%] bg-[#e27e03] text-[#ffff] p-4 rounded-lg hover:bg-transparent ease-in-out duration-300 border-[1px] border-[#e27e03]'><SendOutlined className='text-[25px]'/></button>
        </div>
      </div>
    </div>
  )
}

export default ChatMessaging

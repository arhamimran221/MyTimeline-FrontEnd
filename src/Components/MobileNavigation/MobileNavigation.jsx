import React from 'react'
import Homeicon from "../../assets/homeIcon.svg"
import HomeiconActive from "../../assets/homeIconActive.svg"
import MessageIcon from "../../assets/messageIcon.svg"
import MessageIconActive from "../../assets/messageIconActive.svg"
import UserIcon from "../../assets/user.svg"
import UserIconActive from "../../assets/useActive.svg"
import { useLocation, useNavigate } from 'react-router-dom'
import {HeartOutlined} from "@ant-design/icons"

const MobileNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation();

  return (
    <div className='fixed bottom-0 w-[100%]'>
      <div className="flex justify-between bg-[#000] py-4 px-6 w-[100%]" style={{borderTopRightRadius:"10px",borderTopLeftRadius : "10px"}}>
        <img src={location.pathname=== "/"? HomeiconActive: Homeicon} alt="" srcset="" onClick={()=> navigate('/')}/>
         <HeartOutlined className={`text-[28px] ${location.pathname=== "/favorite"? "text-[#ef8503]": "text-[#fafafa]" }`}/>
        <img src={location.pathname=== "/message"? MessageIconActive: MessageIcon} alt="" onClick={()=> navigate('/message')}/>
        <img src={location.pathname=== "/uploadEmoji"? UserIconActive: UserIcon} alt="" onClick={()=> navigate('/uploadEmoji')}/>
      </div>
    </div>
  )
}

export default MobileNavigation

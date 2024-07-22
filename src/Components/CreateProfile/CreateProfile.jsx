import {
  CameraFilled,
  FileImageOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import userPlaceholder from "../../assets/userPlaceholder.jpeg";
import { Gallery } from "react-grid-gallery";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const divRef = useRef();
  const imgRef = useRef();

  const handleUploadCover = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (divRef.current) {
        divRef.current.style.backgroundImage = `url(${reader.result})`;
        divRef.current.style.backgroundRepeat = `url(${reader.result})`;
      } else if (imgRef.current) {
        imgRef.current.src = reader.result;
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleUploadProfile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (imgRef.current) {
        imgRef.current.src = reader.result;
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 220,
      height: 74,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 112,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 74,
    },
  ];
 const navigate = useNavigate();
  return (
    <div className="container m-auto">
      <div
        ref={divRef}
        className="bg-[#36454F] rounded-b-[10px] lg:mx-[30px] mx-[10px] lg:h-[330px] h-[150px] relative bg-no-repeat	bg-cover"
      >
        <div className="absolute lg:right-[50px] right-[10px] bottom-[20px] z-[99]">
          <div className="flex gap-[20px] hover:scale-[1.1] ease-in-out duration-300">
            <label className="flex gap-[20px] text-[#fff] items-center bg-[#000000] px-4 py-2 rounded-lg cursor-pointer">
              <CameraFilled />
              <span className="lg:block hidden ">Add cover photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadCover}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="text-[#fff] flex gap-[10px] items-center justify-between lg:mx-[50px] mx-[10px] lg:flex-row flex-col">
        <div className="flex lg:gap-[40px] gap-[10px] lg:flex-row flex-col justify-center">
          <div className="bg-[#28282B] w-fit h-fit relative  border-[5px] border-[#FF5733] rounded-full lg:mt-[-80px] mt-[-50px] mx-auto">
            <div className="rounded-full overflow-hidden">
              <img
                ref={imgRef}
                src={userPlaceholder}
                alt=""
                className="rounded-full lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]"
              />
            </div>
            <label className="absolute z-[99] lg:bottom-[5px] bottom-[-15px] right-[-5px] bg-[#36454F] px-2 py-1 rounded-full text-[#FF5733] text-[20px] cursor-pointer hover:scale-[1.1] ease-in-out duration-300">
              <CameraFilled />
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadProfile}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <h2 className="lg:text-[40px] text-[30px] font-nunito mt-[20px] font-[600] tracking-[1.6]">
            Arham Imran
          </h2>
        </div>
        <div className="flex lg:gap-[50px] gap-[10px]">
          <button className="flex border-[1px] border-[#202f4d] bg-[#121b37] hover:border-[#FF5733] ease-in-out duration-300 items-center font-nunito lg:px-6 px-4 py-2 gap-[10px] rounded-lg text-[#65718b] lg:text-[20px] text-[14px]" onClick={()=> navigate('/cards')}>
            <FileImageOutlined className="text-[#fff] text-[20px]" />
            2.4k Posts
          </button>
          <button className="flex border-[1px] border-[#202f4d] hover:border-[#FF5733] ease-in-out duration-300 bg-[#121b37] items-center font-nunito lg:px-6 px-4 py-2 gap-[10px] rounded-lg text-[#65718b] lg:text-[20px] text-[14px]" onClick={()=> navigate('/uploadEmoji')}>
            <UserAddOutlined className="text-[#fff] text-[20px]" />
            2.4k Friends
          </button>
        </div>
      </div>
      <div className="lg:mx-[50px] mx-[10px] lg:my-[50px] my-[25px]">
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default CreateProfile;

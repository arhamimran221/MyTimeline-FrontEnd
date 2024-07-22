import React, { useState, useEffect } from 'react';
import bitImage from "../../assets/bitEmoji.png";
import { Select } from 'antd';

const UploadEmoji = () => {
  const [selectedFile, setSelectedFile] = useState(bitImage);
  const [mediaType, setMediaType] = useState('image');

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setMediaType(value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    document.getElementById('fileInput').accept = mediaType + "/*";
  }, [mediaType]);

  return (
    <div className='container mx-auto'>
      <div className="flex items-center w-[90%] justify-center mx-auto lg:my-[100px] my-[50px] lg:flex-row flex-col gap-[40px]">
        <div className="lg:w-[60%] w-[100%]">
          {mediaType === 'image' && <img src={selectedFile} alt="" className='w-[200px] h-[250px] mx-[50px]'/>}
          {mediaType === 'video' && <video src={selectedFile} className='w-[200px] h-[250px] mx-[50px]' controls />}
          {mediaType === 'gif' && <img src={selectedFile} alt="" className='w-[200px] h-[250px] mx-[50px]'/>}
          <input type="file" id="fileInput" onChange={handleFileChange} style={{display: 'none'}} />
          <div className="text-[#fff] flex gap-[10px]">
            <button onClick={() => document.getElementById('fileInput').click()} className="flex border-[1px] border-[#202f4d] bg-[#121b37] items-center font-nunito lg:px-6 px-4 py-2 gap-[10px] rounded-lg text-[#65718b] lg:text-[20px] text-[14px]">{mediaType}</button>
          </div>
        </div>
        <div className="text-[#fff] lg:w-[40%] w-[100%]">
          <Select
            defaultValue="image"
            className='w-[100%]'
            onChange={handleChange}
            dropdownStyle={{ backgroundColor: '#28282B' }}
            optionActiveBg= 'green'
            style={{color: "white"}}
            options={[
              {
                value: 'image',
                label: 'Image',
              },
              {
                value: 'gif',
                label: 'Gif',
              },
              {
                value: 'video',
                label: 'Video',
              },
            ]}
          />
    <h2 className='text-[20px] my-[10px] font-nunito font-[500]'>Basic Details</h2>
    <div className="flex justify-between text-white font-nunito">
        <p>Name</p>
        <p>Tony</p>
    </div>
    <div className="flex justify-between text-white font-nunito my-[10px]">
        <p>Name</p>
        <p>Tony</p>
    </div>
    <div className="flex justify-between text-white font-nunito">
        <p>Name</p>
        <p>Tony</p>
    </div>
        </div>
      </div>
    </div>
  )
}

export default UploadEmoji

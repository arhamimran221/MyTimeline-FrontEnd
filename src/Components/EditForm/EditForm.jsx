import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
  InputLabel,
  FormControl,
} from "@mui/material";
import "tailwindcss/tailwind.css"; // Ensure this path is correct based on your project setup
import { LeftOutlined } from "@ant-design/icons";
import {useNavigate} from 'react-router-dom'
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e67f04', // Change focus outline color
              },
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: '#e67f04', // Change label color when focused
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          outlined: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#e67f04', // Change select focus outline color
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ea8207', // replace with your color
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ea8207', // replace with your color
            },
          },
        },
      },
    },
  });
  

export default function EditForm() {
  const [age, setAge] = useState(null)
  const [gender, setGender] = useState(null)
  const [height, setHeight] = useState(null)
  const [weight, setWeigth] = useState(null)
  const [marital, setMarital] = useState(null)
  const navigate = useNavigate();

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleChangeWeight = (event) => {
    setWeigth(event.target.value);
  };
  const handleChangeMarital = (event) => {
    setMarital(event.target.value);
  };

  const handleSubmit= ()=>{
    navigate('/message')
  }

  return (
    <ThemeProvider theme={darkTheme}>
        <div className="lg:w-[50%] w-[95%] mx-auto lg:mt-auto mt-[40px]">
    <div className="text-[#fff] flex gap-[20px] mb-50 items-center mt-[35px] ml-[10px]">
          <button
            className="bg-[#f5f5f5] border-1 border-[#36454F] rounded-full px-3 py-2 text-[#ea8207] hover:text-[#2e7d32] hover:bg-transparent ease-in-out duration-300 hover:border-1 hover:border-[#ea8207]"
            onClick={() => navigate(-1)}
          >
            <LeftOutlined className="text-20 text-[#ee870d]" />
          </button>
          <h2 className="font-nunito text-[#ea8207] text-[20px]">
            Edit Details
          </h2>
        </div>
      <form className="space-y-4 text-white bg-black p-4 " onSubmit={handleSubmit}>
        <TextField key="1" label="Name" variant="outlined" fullWidth />
        <TextField key="2" label="Bio" variant="outlined" fullWidth />
        <div className="flex gap-[20px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChangeAge}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={gender}
              label="Age"
              onChange={handleChangeGender}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-[20px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Height</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={height}
              label="Age"
              onChange={handleChangeHeight}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>3 feet, 1 inches</MenuItem>
              <MenuItem value={20}>5 feet, 8 inches</MenuItem>
              <MenuItem value={30}>6 feet, 2 inches</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Weight</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={weight}
              label="Age"
              onChange={handleChangeWeight}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>40Kg</MenuItem>
              <MenuItem value={20}>60kg</MenuItem>
              <MenuItem value={30}>80kg</MenuItem>
              <MenuItem value={40}>90kg</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-[20px]">
        <TextField key="2" label="Date of Birth" variant="outlined" fullWidth />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Marital Status</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={marital}
              label="Age"
              onChange={handleChangeMarital}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Single</MenuItem>
              <MenuItem value={20}>Married</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-[20px]">
        <TextField key="2" label="Education" variant="outlined" fullWidth />

          <TextField key="2" label="Religion" variant="outlined" fullWidth />
        </div>
        <TextField key="3" label="Languages" variant="outlined" fullWidth/>
        <button type="submit" className="w-[100%] bg-[#e67f04] py-2 rounded-lg border-[1px] border-[#e67f04] hover:bg-transparent hover:text-[#e67f04] ease-in-out duration-300" >
          Update
        </button>
      </form>
      </div>
    </ThemeProvider>
  );
}

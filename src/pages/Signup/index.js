import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import {signup} from '../../services/operations/AuthAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignupImage from '../../assets/signup.jpg';

const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitSignUpForm = async (data) => {
    if(data.password !== data.confirmPassword){
      toast.error("Both passwords are not matching!");
      return;
    }
    console.log(data);
    dispatch(signup(data,navigate));
  };

  const [showPassword1,setShowPassword1] = useState(false);
  const [showPassword2,setShowPassword2] = useState(false);

  return (
    <Box sx={{ width: '100vw',height:"100vh",overflowX:"hidden",overflowY:"auto", paddingTop:{xs:"6rem", md:"0"},display:"flex", flexDirection:{md:"row",xs:"column-reverse"} ,gap:"2rem" ,justifyContent:"center",alignItems:"center",backgroundColor:"black" }}>
      <Box sx={{width:{md:"30%", xs:"80%"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:{xs:"0.5rem",md:"3rem"}}}>
        <Typography sx={{color:"white",fontWeight:"800",fontFamily:"cursive",fontSize:"2rem"}}>Sign Up Here</Typography>
        <Typography sx={{color:"white",opacity:"0.8",fontFamily:"monospace",fontSize:"1rem",fontWeight:"700"}}>Create a New account, if not yet created...</Typography>
        <FormControl sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Box sx={{ width: '100%', position: 'relative'}}>
            <TextField
              label={
                  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <Box sx={{ color: 'white', fontSize: '14px', flexShrink: 0 }}>User Name</Box>
                      <Box sx={{ color: 'red', fontSize: '15px', flexShrink: 0 }}>*</Box>
                  </Box>
              }
              variant="outlined"
              sx={{
                  width: '100%',
                  backdropFilter:"blur(10px)",
                  color: 'white',
                  border:"4px",
                  borderColor:"white",
                  '& input': {
                      color:"white",
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255,0.7)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 1)'
                  },
              }}
              {...register('username', { required: true })}
          />
            {errors.userName && (
              <span sx={{ mt: 1, fontSize: '12px', color: 'red' }}>Please Enter Your User Name</span>
            )}
          </Box>
          <Box sx={{ width: '100%', position: 'relative'}}>
            <TextField
              label={
                  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <Box sx={{ color: 'white', fontSize: '14px', flexShrink: 0 }}>Email ID</Box>
                      <Box sx={{ color: 'red', fontSize: '15px', flexShrink: 0 }}>*</Box>
                  </Box>
              }
              variant="outlined"
              sx={{
                  width: '100%',
                  backdropFilter:"blur(10px)",
                  color: 'white',
                  border:"4px",
                  borderColor:"white",
                  '& input': {
                      color:"white",
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255,0.7)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 1)'
                  },
              }}
              {...register('email', { required: true })}
          />
            {errors.userName && (
              <span sx={{ mt: 1, fontSize: '12px', color: 'red' }}>Please Enter Your Email ID</span>
            )}
          </Box>
          <TextField
            label={
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Box sx={{ color: 'white', fontSize: '14px', flexShrink: 0 }}>Create Password</Box>
                <Box sx={{ color: 'red', fontSize: '15px', flexShrink: 0 }}>*</Box>
              </Box>
            }
            variant="outlined"
            fullWidth
            type={showPassword1 ? 'text' : 'password'}
            name="createPassword"
            placeholder="Enter Password"
            {...register('password', { required: true })}
            sx={{
                    width: '100%',
                    backdropFilter:"blur(10px)",
                    color: 'white',
                    border:"4px",
                    borderColor:"white",
                    '& input': {
                        color:"white",
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255,0.7)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 1)'
                    },
                }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '8px' }}>
                  <div onClick={() => setShowPassword1((prev) => !prev)} style={{ cursor: 'pointer', color: 'white' }}>
                    {showPassword1 ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ color: 'white', fontSize: '14px', flexShrink: 0 }}>Confirm Password</span>
                <span style={{ color: 'red', fontSize: '15px', flexShrink: 0 }}>*</span>
              </div>
            }
            variant="outlined"
            fullWidth
            type={showPassword2 ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            sx={{
                  width: '100%',
                  backdropFilter:"blur(10px)",
                  color: 'white',
                  border:"4px",
                  borderColor:"white",
                  '& input': {
                      color:"white",
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255,0.7)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 1)'
                  },
              }}
            {...register('confirmPassword', { required: true })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '8px' }}>
                  <div onClick={() => setShowPassword2((prev) => !prev)} style={{ cursor: 'pointer', color: 'white' }}>
                    {showPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
          <Box onClick={handleSubmit(submitSignUpForm)} sx={{padding:"0.5rem", display:"flex", justifyContent:"center",alignItems:"center", background: "rgba( 221, 207, 207, 0.2 )",boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter: "blur( 0.75rem )",border: "2px solid rgba( 255, 255, 255, 0.18 )", borderRadius:"0.5rem", color:"white",fontSize:"0.9rem", fontWeight:"800", ":hover":{cursor:"pointer", transform:"scale(1.05)"}, transition:"all 0.2s"}}>
            Create Account
          </Box>
        </FormControl>
      </Box>
      <Box sx={{display:"flex",width:{xs:"70%", md:"30%"},justifyContent:"center",alignItems:"center"}}>
          <img src={SignupImage} style={{width:"100%", minWidth:"280px"}} />
      </Box>
    </Box>
  );
};

export default Signup;

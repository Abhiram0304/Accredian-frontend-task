import React, {  useState } from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {login} from '../../services/operations/AuthAPI';
import { useNavigate } from 'react-router-dom';
import LoginImage from '../../assets/login.jpg';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitLoginForm = async (data) => {
    console.log(data);
    dispatch(login(data,navigate));
  };

  const [showPassword,setShowPassword] = useState(false);

  return (
    <Box sx={{ width: '100vw',height:"100vh",overflowX:"hidden",overflowY:"hidden",display:"flex", flexDirection:{md:"row",xs:"column-reverse"} ,gap:"2rem" ,justifyContent:"center",alignItems:"center",backgroundColor:"black" }}>
      <Box sx={{width:{md:"30%", xs:"80%"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"0.5rem"}}>
        <Typography sx={{color:"white",fontWeight:"800",fontFamily:"cursive",fontSize:"2rem"}}>Login Here</Typography>
        <Typography sx={{color:"white",opacity:"0.8",fontFamily:"monospace",fontSize:"1rem",fontWeight:"700"}}>Get direct access</Typography>
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
          <Box style={{ width: '100%', position: 'relative' }}>
              <TextField
                  label={
                      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <Box sx={{ color: 'white', fontSize: '14px', flexShrink: 0 }}>Password</Box>
                          <Box sx={{ color: 'red', fontSize: '15px', flexShrink: 0 }}>*</Box>
                      </Box>
                  }
                  variant="outlined"
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  name="password"
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
                          <div onClick={() => setShowPassword((prev) => !prev)} style={{ cursor: 'pointer', color: 'white' }}>
                          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                          </div>
                      </InputAdornment>
                      ),
                  }}
              />
          </Box>
          <Box onClick={handleSubmit(submitLoginForm)} sx={{padding:"0.5rem", display:"flex", justifyContent:"center",alignItems:"center", background: "rgba( 221, 207, 207, 0.2 )",boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter: "blur( 0.75rem )",border: "2px solid rgba( 255, 255, 255, 0.18 )", borderRadius:"0.5rem", color:"white",fontSize:"0.9rem", fontWeight:"800", ":hover":{cursor:"pointer", transform:"scale(1.05)"}, transition:"all 0.2s"}}>
            Login Into Account
          </Box>
        </FormControl>
      </Box>
      <Box sx={{display:"flex",width:{xs:"70%", md:"30%"},justifyContent:"center",alignItems:"center"}}>
          <img src={LoginImage} style={{width:"100%", minWidth:"250px"}} />
      </Box>
    </Box>
  );
};

export default Login;

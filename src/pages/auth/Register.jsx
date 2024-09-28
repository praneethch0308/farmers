import { KeySharp, Visibility, VisibilityOff, Person } from '@mui/icons-material';
import { Box, Button, FormLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate= useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
});

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { username, password } = formValues;
    // login(username, password);
    navigate('/dashboard');
};
  return (
    <div className="h-screen flex bg-[url('/farmerrs.jpeg')] justify-center items-center bg-cover bg-center sm:px-10 px-4">
    <div className="bg-white bg-opacity-90 p-2 md:p-10 rounded-3xl shadow-md w-full max-w-md md:max-w-lg">

      <Typography
        variant="h4"
        className="text-center mb-6"
        sx={{ fontWeight:'bold', fontFamily:"sans-serif" }}
      >
        REGISTER
      </Typography>
      <Box component="form"
                      onSubmit={handleSubmit} className="mb-4 mt-4">
         <div className="mb-4">
        <div className="flex items-center mb-2">
          <Person className="mr-2 text-[#0FA958]" />
          <FormLabel className="font-extrabold text-black" sx={{ fontWeight: 'bold', color: 'black' }}>
            Username / Mobile No <span className="text-red-600">*</span>
          </FormLabel>
        </div>
        <TextField
          fullWidth
          variant="standard"
          label="Enter mobile no"
          required
          sx={{ marginLeft: 0 }} 
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <KeySharp className="mr-2 text-[#0FA958]" />
          <FormLabel className="font-extrabold text-black" sx={{ fontWeight: 'bold', color: 'black' }}>
            Password <span className="text-red-600">*</span>
          </FormLabel>
        </div>
        <TextField
          fullWidth
          variant="standard"
          label="Enter your password"
          required
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff className="text-[#0FA958]" /> : <Visibility className="text-[#0FA958]" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </div>
        <div className="flex items-center mb-2">
          <KeySharp className="mr-2 text-[#0FA958]" />
          <FormLabel className="font-extrabold text-black" sx={{ fontWeight: 'bold', color: 'black' }}>
            Confirm Password <span className="text-red-600">*</span>
          </FormLabel>
        </div>
        <TextField
          fullWidth
          variant="standard"
          label="Re-Enter password"
          required
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff className="text-[#0FA958]" /> : <Visibility className="text-[#0FA958]" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className='flex justify-end'>
          <p className='text-red-800 mr-1'>Already have an account?</p>
          <Link to='/login' className='text-green-700 underline'>Click here</Link>
        </div>
         <Box
                          sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              mt: 3,
                              mb: 2,
                          }}
                      >
                          <Button
                              type="submit"
                              variant="contained"
                              color='success'
                              sx={{ borderRadius: '20px' }}
                          >
                              Register
                          </Button>
                      </Box>
      </Box>
    </div>
  </div>
  )
}

export default Register

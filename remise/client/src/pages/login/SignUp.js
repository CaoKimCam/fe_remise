import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from '../../api/userapi';
import RegisterForm from '../../components/User/SignUpForm';
import { Link } from '@mui/material';

const defaultTheme = createTheme();
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Remise
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const handleSignupSubmit = async (values) => {
    try {
      const response = await register(values);
      console.log('Registration successful: ', response);
      // Đăng ký thành công, thực hiện các hành động sau khi đăng ký
    } catch (error) {
      console.error('Error during registration: ', error);
      // Đăng ký thất bại
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography>
            <h1>REMISE</h1>
          </Typography>
          <RegisterForm onSubmit={handleSignupSubmit} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

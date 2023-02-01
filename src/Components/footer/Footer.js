import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


function Copyright() {
    
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Market Place
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 3,
          backgroundColor:colors.primary[400] 
        }}
      >
        <Container maxWidth="xs">
          <Typography variant="body1">
          Digital Market
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
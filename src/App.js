import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';
export default function App(){
return(
<ThemeProvider theme={theme}>
<BrowserRouter>
<Layout><AppRoutes /></Layout>
</BrowserRouter>
</ThemeProvider>
);
}
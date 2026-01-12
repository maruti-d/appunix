import { Box, Typography } from '@mui/material';
export default function Footer(){
return(
<Box sx={{textAlign:'center',py:2, background: '#000', opacity:'0.9', color: '#fff', borderTop: '1px solid rgba(0,229,168,0.25)'}}>
<Typography variant="caption">© {new Date().getFullYear()} Appunix</Typography>
</Box>
);
}
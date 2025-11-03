import { Box, Typography } from '@mui/material';
export default function Footer(){
return(
<Box sx={{textAlign:'center',py:2}}>
<Typography variant="caption">© {new Date().getFullYear()} Appunix</Typography>
</Box>
);
}
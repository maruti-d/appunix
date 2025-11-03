import { Container, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
export default function Contact(){
const [form,setForm]=useState({name:'',email:'',message:''});
return(
<Container sx={{py:6}}>
<form>
<TextField fullWidth label="Name" sx={{mb:2}} onChange={e=>setForm({...form,name:e.target.value})}/>
<TextField fullWidth label="Email" sx={{mb:2}} onChange={e=>setForm({...form,email:e.target.value})}/>
<TextField fullWidth multiline rows={4} label="Message" sx={{mb:2}} onChange={e=>setForm({...form,message:e.target.value})}/>
<Button variant="contained">Send</Button>
</form>
</Container>
);
}
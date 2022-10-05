import React from 'react'
import './style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



function Footer() {
  return (
    <div className='socialmedia'>
    <div className='socialmedia-icon' ><a href='https://www.linkedin.com/in/aseelkp/' target="_blank" rel='noreferrer' ><LinkedInIcon sx={{ color: '#000' }} fontSize='large' /></a></div>
    <div className='socialmedia-icon' ><a href='https://github.com/aseelkp' target="_blank" rel='noreferrer' ><GitHubIcon sx={{ color: '#000' }} fontSize='large' /></a></div>
    <div className='socialmedia-icon' ><a href='https://www.facebook.com/aseelkp/' target="_blank" rel='noreferrer' ><FacebookIcon sx={{ color: '#000' }} fontSize='large' /></a></div>
    <div className='socialmedia-icon' ><a href='https://www.instagram.com/aseelkp/' target="_blank" rel='noreferrer' ><InstagramIcon sx={{ color: '#000' }} fontSize='large' /></a></div>
</div>
  )
}

export default Footer
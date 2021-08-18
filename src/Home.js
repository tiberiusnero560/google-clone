import React from 'react';
import './Home.css'
import  { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from '@material-ui/core/Avatar';
import Search from './Search'

// The Homepage component

function Home() {
    return (
        <div className='home'>

            {/* The header with About, Store, gmail, images and profile    */}
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className='home__headerRight'>
                    <Link to='./gmail'>Gmail</Link>
                    <Link to='./images'>Images</Link>  
                    <AppsIcon />                 
                    <Avatar />

                </div>
            </div>


            {/*  The body of items below the header */}
            <div className='home__body'>

                <img 
                    src="http:///www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""
                />
                    
                <div className='home__inputContainer' >
                    <Search />
                </div>

            </div>
        </div>
    )
}

export default Home

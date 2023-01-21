import React from 'react'
import { Link } from 'react-router-dom';

import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
            <SubHeading title='Berbagi Momen Sepesial Dengan Mudah'/>
            <h1 className='app__header-h1'>Undangan Pernikahan Digital</h1>

            <p className='p__opensans' style={{margin: '2rem 0'}}>
                Buat dan bagikan undangan pernikahan yang dikemas dalam bentuk website yang menarik kapanpun dan dimanapun.
            </p>
            <Link className='custom__button' to="/login">Pesan Sekarang</Link>
        </div>

        <div className='app__wrapper_img'>
            <img src={images.landing1} alt='landing image' />
        </div>
    </div>
  )
}

export default Header;
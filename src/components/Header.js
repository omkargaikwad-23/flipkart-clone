import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__first'>
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
                <div className='header__first1'>
                    <span style={{
                        fontSize: '11px',
                        color: 'white',
                        fontStyle: 'italic'
                    }}>Explore</span>
                    <span style={{
                        color: '#f9e107',
                        fontSize: '11px',
                        fontStyle: 'italic'
                    }}>Plus</span>
                    <span><img
                        width="10"
                        src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="plus"></img></span>
                </div>
            </div>

            <div className='header__second'>
                <input placeholder="Search for products, brands and more" type="text"></input>
                <SearchIcon />
            </div>

            <div className='header__third'>
                <Tippy content="logintooltip">
                    <button>Login</button>
                </Tippy>
            </div>

            <div className='header__forth'>
                <span>More</span>
                <ExpandMoreIcon />
            </div>

            <div className='header__fifth'>
                <ShoppingCartIcon />
                <p>Cart</p>
            </div>

        </div>
    )
}

export default Header

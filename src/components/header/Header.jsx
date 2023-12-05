import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {

  const [ShowMenu, setShowMenu] = useState(true) //Đổi true thành false nếu muốn trạng thái ban đầu của menu là thường đóng thay vì thường mở
  const toggleMenu = () => {
    setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>amazon</span>
        </div>

        <div className={css.right}>

            <div className={css.bars} onClick={toggleMenu}>
              <GoThreeBars/>
            </div>
                <ul className={css.menu} style={{display: ShowMenu? 'inherit': 'none'}}>
                  <li>Collections</li>
                  <li>Brands</li>
                  <li>New</li>
                  <li>Sales</li>
                  <li>ENG</li>
                  <input type="text" className={css.search} placeholder='Search' />
                  <CgShoppingBag className={css.cart}/>
                </ul>
                
                      
        </div>
    </div>
  )
}

export default Header
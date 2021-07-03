import React from 'react'
import VkIcon from '../../assets/icons/Icon_kv Copy 3.svg'
import FbIcon from '../../assets/icons/Icon_fb Copy 6.svg'
import TvitterIcon from '../../assets/icons/Icon_fb Copy 7.svg'
import OkIcon from '../../assets/icons/icon_ok copy 3.svg'
import GooglePay from '../../assets/Group 13.png'
import AppStore from '../../assets/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.png'

function Footer (props) {
  return (
    <div className={'footer'}>
      <div className="footer-top">
        <div className="rectangle"/>
        <div className="rectangle"/>
        <div className="rectangle"/>
      </div>
      <div className="footer-main">
        <div className="list-menu">
          <h3>
            Раздел 1
          </h3>
          <ul>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>
        </div>
        <div className="list-menu">
          <h3>
            Раздел 1
          </h3>
          <ul>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>
        </div>
        <div className="circle-wrap">
          <div className="circle"/>
        </div>
        <div className="list-menu">
          <h3>
            Раздел 1
          </h3>
          <ul>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>
        </div>
        <div className="list-menu">
          <h3>
            Раздел 1
          </h3>
          <ul>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>
        </div>
      </div>
      <div className={'socials-group'}>
        <div className="socials">
          <div className="socials-item">
            <img src={VkIcon} alt=""/>
          </div>
          <div className="socials-item">
            <img src={FbIcon} alt=""/>
          </div>
          <div className="socials-item">
            <img src={TvitterIcon} alt=""/>
          </div>
          <div className="socials-item">
            <img src={OkIcon} alt=""/>
          </div>
        </div>
        <div className="stores">
          <div className="stores-item">
            <img src={GooglePay} alt=""/>
          </div>
          <div className="stores-item">
            <img src={AppStore} alt=""/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;
import React from 'react';
import './Header.scss';
import ShopifyLogo from '../../assets/logo/shopify_glyph.png'

function Header({ maxNominations, nominations, nominationsVisibility, setNominationsVisibility }) {

  const handleNominationsToggle = () => {
    setNominationsVisibility(!nominationsVisibility);
  }

  return (
    <nav className="header">
      <div className="header__block container">
        <a className="header__block-link" href="/">
          <img className="header__block-link-logo" src={ShopifyLogo} alt="Shopify Logo"/>
          <h1 className="header__block-link-text">Shoppies</h1>
        </a>
        <div className="header__block-counter">
          <button className="header__block-counter-button" onClick={handleNominationsToggle}>
            <span className="header__block-counter-button-count">{nominations.length} / {maxNominations}</span>
            <span className="header__block-counter-button-text">Nominations</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header

import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block container">
        <div className="footer__block-credits">
          <h4 className="footer__block-credits-heading">Website by:</h4>
          <a className="footer__block-credits-link" href="https://jaspreetlall.com">Jaspreet Lall</a>
        </div>
        <div className="footer__block-credits">
          <h4 className="footer__block-credits-heading">OMDb API by:</h4>
          <a className="footer__block-credits-link" href="https://www.omdbapi.com/">Brian Fritz</a>
        </div>
        <div className="footer__block-credits">
          <h4 className="footer__block-credits-heading">Cover photo by:</h4>
          <a className="footer__block-credits-link" href="https://unsplash.com/@mbuff">Sung Jin Cho</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

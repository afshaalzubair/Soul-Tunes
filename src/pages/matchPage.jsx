import "./style.css";
import backButton from '../assets/backButton.jpg'
import { Link } from "react-router-dom";

export function MatchPage() {
  return(
      <>
      
        <div className="desktop">
        <div className="div">

        <div className="overlap-group">
          <div>
        <Link to="/">
                <img src={backButton} width="5%" height="5%" alt="back button"/>
          </Link>
          </div>
          <div className="overlap">
          <div>
        </div>
            <div className="rectangle" />
           
            <p className="element-percent">
              <span className="text-wrapper">78%</span>

              <span className="span"> percent Compatibility</span>
            </p>
          </div>

          <div className="overlap-2">
            <img
              className="download"
              alt="Download"
              src="https://c.animaapp.com/RKQSI5hk/img/download-1@2x.png"
            />

            <img
              className="img"
              alt="Rectangle"
              src="https://c.animaapp.com/RKQSI5hk/img/rectangle-11.svg"
            />
          </div>

          <div className="overlap-3">
            <img
              className="download"
              alt="Download"
              src="https://c.animaapp.com/RKQSI5hk/img/download-1@2x.png"
            />

            <img
              className="rectangle-2"
              alt="Rectangle"
              src="https://c.animaapp.com/RKQSI5hk/img/rectangle-11.svg"
            />
          </div>
        </div>

        <div className="rectangle-3" />

        <div className="rectangle-4" />

        <div className="rectangle-5" />

        <div className="rectangle-6" />
      </div>
    </div>
      </>
  )
}
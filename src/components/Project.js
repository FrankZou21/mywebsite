import React, { useState } from "react";
import "./styles/Project.css"
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Popup from "reactjs-popup";

export default function Project({ name, background, description, image, link }) {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="projectBox" style={{backgroundImage: `url('${background}')`}}>
      <div className="projectTitle">
      {name}
      <div>
      <Popup trigger={<div className="popupBtn" onClick = {() => {setIndex(0)}}><span>Check It Out!</span></div>} modal>
        {close => (
          <div className="modal">
            {/* <a className="close" onClick={close}>
              &times;
        </a> */}
            <div className="header"> {name} </div>
            <Gallery
              index={index}
              onRequestChange={i => {
                setIndex(i);
              }}
            >
              {image.map(eachImage => (
                <GalleryImage objectFit="contain" style={{ height: "25%" }} key={eachImage} src={eachImage} />
              ))}
            </Gallery>
            <div className="content">
              {description}
            </div>
            <div className="actions">
              <div className="popupBtn2" onClick={() => { window.open(link, '_blank') }}>Check Out The Code!</div>
            </div>
          </div>
        )}
      </Popup>
      </div>
      </div>
    </div>
  );
}


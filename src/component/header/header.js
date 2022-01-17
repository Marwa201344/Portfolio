
import React from "react";
import './header.css'
// import imageHeader from '../../images/header.jpg'


class Header extends React.Component {

    constructor(){
        super();
    }

    render(){

        return(
            <>
            {/* <img src={imageHeader} /> */}
            <div className="cont">
                <div className="head">
                    <h1>Katie Reed</h1>
                    <p>Web Developer &amp; Designer</p>
                    <button className="contactUs">Contact Us</button>
                </div>

            </div>
            
            </>
        ) 
    }

}

export default Header;
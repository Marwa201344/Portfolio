import React from "react";
import './about.css'


class About extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <>
            <div className="aboutCont">
                <div className="aboutHead">
                    <h3>About me</h3>
                </div>
                <div className="para">
                    <p className="p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit unde velit.</p>
                    <p className="p2">Explicabo illo porro quam debitis maxime harum rem nemo officia vero </p>
                    <p className="p3">suscipit esse doloremque, beatae error quidem numquam amet omnis vbn!</p>

                    <button className="download">Download Picture</button>
                </div>
                
            </div>
            </>
        );
    }
}

export default About;
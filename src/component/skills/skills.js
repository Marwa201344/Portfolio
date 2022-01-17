import React from "react";
import Progress from './progress/progress';
import './skills.css';
import './progress/progress.css'

class Skills extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
                <div className="skillCont">
                    <div className="skillHead">
                        <h4 className="skillH4">Skills</h4>
                        <p className="p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit unde velit vero Lorem, ipsum dolor sit amet consectetur amet.</p>
                        <p className="p2">Explicabo illo porro quam debitis maxime harum rem nemo officia debitis maxime consectetur ame consectetur</p>
                        <p className="p3">suscipit esse doloremque, beatae error quidem numquam amet numquam amet numquam amet numquam!</p>
                    </div>

                    <div className="skillBody">
                        <div className="mySkill">
                            <h4>My Projects</h4>
                            <hr />
                            <p className="pa1">UI/UX Design</p>
                            <p className="pa2">Responsive Design</p>
                            <p className="pa3">Web Design</p>
                            <p className="pa4">Mobile App Design</p>

                        </div>

                        <div className="progressAbc">
                            <Progress now="90" label="HTML"/>
                            <Progress now="70" label="CSS"/>
                            <Progress now="80" label="Bootstrap"/>
                            <Progress now="75" label="Java Script"/>
                            <Progress now="90" label="React.js"/>
                            <Progress now="70" label="Soft Skills"/>
                            <Progress now="80" label="Angular"/>
                            <Progress now="75" label="English"/>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Skills;
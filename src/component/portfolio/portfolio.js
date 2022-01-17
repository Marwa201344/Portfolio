import React from "react";
import { Container, Row} from 'react-bootstrap';
import './divs/divs';
import Portfcards from './divs/divs';
import './divs/divs.css'
import  './portfolio.css'



class Portfolio extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(

            <>

            <div className="portfCont">
                <h2 className="PortHead">Portfolio</h2>
                <Container className="cardsCont">
                    <Row>
                        {/* <Portfcards className="ABC_Br" title="Web Design"/>
                        <Portfcards className="ABC_Bl" title="Mobile Development"/>
                        <Portfcards className="ABC_Br" title="UI/UX Design"/> */}
                        <Portfcards className="bg_Brown" title="Web Design"/>
                        <Portfcards className="bg_Black" title="Mobile Development"/>
                        <Portfcards className="bg_Brown" title="UI/UX Design"/>
                    </Row>
                    <Row>
                        <Portfcards className="bg_Black" title="Web Application Development"/>
                        <Portfcards className="bg_Brown" title="Mobile Application Development"/>
                        <Portfcards className="bg_Black" title="PWA Development"/>
                    </Row>
                </Container>
            </div>
            </>
        );
    }


}

export default Portfolio;
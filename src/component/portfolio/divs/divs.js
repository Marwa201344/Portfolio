import { Col } from 'react-bootstrap';
import './divs.css';

const Portfcards = (props) =>{
    return(
        <>
            <Col className={props.className}> {props.title}</Col>
        
        </>
    );
}

export default Portfcards;
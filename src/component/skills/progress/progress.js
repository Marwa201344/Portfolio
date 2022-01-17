import { ProgressBar } from 'react-bootstrap';
import './progress.css';

const Progress = (props) =>{
    return(
        <>
        <ProgressBar now={props.now} label={props.label} />
        </>
    );
}

export default Progress;
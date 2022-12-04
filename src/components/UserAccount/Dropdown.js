import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import './MyAccount.css';

function Dropdown(props) {
    const {title,Icon,children,dataHandler} = props;
    const [show,setShow] = useState(false);
    const showHandler = () => {
        if(dataHandler !== null){
            dataHandler();
        }
        setShow(!show);
    }; 

    const childStyle={
        margin:'10px',
    }

    return (
        <div className='single-dropbox'>
            <div className='child-single-dropbox' onClick={showHandler}><div>{Icon} {title}</div> <div>{show ? <FontAwesomeIcon icon={faCaretUp} /> :  <FontAwesomeIcon icon={faCaretDown} />}</div></div>
            <div style={childStyle}>{show && children}</div>
        </div>
    )
}

export default Dropdown

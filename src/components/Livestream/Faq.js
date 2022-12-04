import React,{ useState } from 'react';
import Classes from  './sellerapply.module.css';

function Faq(props) {
    const {question,children} = props;
    const [show,setShow] = useState(false);
    const showHandler = () => setShow(!show);
    return (
        <div className={Classes.questions}>
            <div className={Classes.questionsTitle} onClick={showHandler}>
                <p className={Classes.click}><span>{question}</span><span>+</span></p>
            </div>
            <p className={Classes.answer}>
                {show && children}
            </p>
        </div>
    )
}

export default Faq

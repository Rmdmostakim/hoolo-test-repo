import React,{ useState } from "react";
import SupportWindow from "./support-window";


const SupportEngine = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <SupportWindow
            visible={visible}
            />
        
        </div>
    )
}

export default SupportEngine;

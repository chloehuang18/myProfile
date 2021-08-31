import "./contact.scss"
import { useState } from "react";

export default function Contact(){
    const [message, setMssage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMssage(true);
    }

    return(
        <div className= "contact" id ="contact">
            <div className="left">
                <img src="asset/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type>Send</button>
                    {message && <span>Thank you! I will reply ASAP.  </span>}
                </form>
            </div>
        </div>
    )

}
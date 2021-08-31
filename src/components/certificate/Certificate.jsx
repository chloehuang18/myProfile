import { useState } from "react";
import "./certificate.scss"

export default function Certificate() {
        const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1,
            title: "R Learning",
            description: "LinkedIn",
            img: "asset/certificate1.png"
    
        },
        {
            id: 2,
            title: "Node.js",
            description: "LinkedIn",
            img: "asset/certificate2.png"
    
        },
        {
            id: 1,
            title: "Google Data Analytics",
            description: "Google",
            img: "asset/certificate3.png"
    
        }

    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0);
    };

    return (
        <div className="certificate" id="certificate">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src="asset/award.png" alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <span>Project</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                        
                    </div> ))
                }
            </div> 
                <img src="asset/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
                <img src="asset/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
        </div>
    );
}
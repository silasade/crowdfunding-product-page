import { useState } from "react";

function Overlay(props){
    const [color, setColor]=useState(true)
    function green(){
        setColor(!color)
    }
    console.log(color)
    var style= color==true?{borderColor:"none"}:{
        outline: "2px",
        outlineStyle:" solid",
        outlineColor: "hsl(176, 72%, 47%)"}
    var style1 =color==true? {display:"none"}:{display:"flex"}
    return(
        <div className="edition modalq" onClick={green} style={style}>
        <div className="title">
        <div>
            <h3 className="titl">
                {props.title}
            </h3>
        </div>
        <div>
            <h3 className="pledge">{props.pledge}</h3>
        </div>
        <div>
            <h3>{props.left} <span> left</span></h3>
        </div>
        </div>
        <div>
            <h3 className="bout">{props.body}</h3>
        </div>
        <hr></hr>
        <div className="input" style={style1}>
            
            <div >
                <h5 className="bout">Enter Your Pledge</h5>
            </div>
            <div className="innerINn">
                <div className="innerIN">
                    $<input className="num" type="number"/>
                </div>
                <div>
                    <button className="numm">Continue</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Overlay;
import logo from "../images/logo-mastercraft.svg"
import bookmark from "../images/icon-bookmark.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import check from "../images/icon-check.svg"
import { useState } from "react";
function First(){
    const [trut, setTrut]=useState(false)
    function handle(){
        setTrut(!trut)
    }
    const style= trut==true?{color:"hsl(176, 72%, 48%)"}:{color:"black"}
    return(
        <div className="first">
            <img className="log" src={logo} alt=""/>
            <div>
                <h2 className="master">Mastercraft Bamboo Monitor Riser</h2>
                
            </div>
            <div>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
            </div>
            <div className="button">
                <button  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="butt">Back this project</button>
                <div className="bookmark" onClick={handle} style={style}>
                    <img src={bookmark} alt=""/>
                    <p className="book">Bookmark</p>
                </div>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <img className="check" src={check} alt=''/>
                        <h3>Thanks for your support!</h3>
                        <p className="pled fir">Your pledge brings us one step closer to sharing Mastercraft
                            Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. 
                        </p>
                        <div class="modal-footer">
                        <button type="button" data-bs-dismiss="modal">Got it</button>
                        
                    </div>
                    </div>
                    
                    </div>
                </div>
        </div>
                </div>
            
        
    )
}
export default First
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import data from "./data1.json"
import Overlay from './Overlay';
function Edition(props) {
 
    const id = props.ids;

    function handleClick() {
        return id;
    }
    
    const dat= data.map(item=>{
        return <Overlay key={item.id} body={item.body} title={item.title} pledge={item.pledge} left={item.left}/>
    })
        
    
    return (
        <div className="edition">
            <div className="title">
                <div>
                    <h3 className="titl">{props.name}</h3>
                </div>
                <div>
                    <h4 className="pledge">{props.pledge}</h4>
                </div>
            </div>
            <div>
                <h5 className="bout">{props.body}</h5>
            </div>
            <div className="money">
                <div>
                    <h2>{props.left}<sup>left</sup></h2>
                </div>
                <div>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"  onClick={() => handleClick(id)}>{props.reward}</button>
                </div>
                <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title back" id="staticBackdropLabel">Back this project</h5>
                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p className='bout back'>Want to support us in bringing  Mastercraft Bamboo Monitor Riser out in the world?</p>
                        <div class="modal-body">
                            <div className='big'>
                       {dat}
                       </div>
                        </div>
        
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
    );
}

export default Edition;

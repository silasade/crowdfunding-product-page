import data from "./data.json"
import Edition from "./Edition"
function About(){
    const datas=data.map(items=>{
        return <Edition ids={items.id} body={items.body} key={items.id} name={items.name} pledge={items.Pledge} left={items.left} reward={items.reward}/>
    })
    return(
        <div className="About">
            <div>
                <h3>
                    About this project
                </h3>
            </div>
            <div>
                <h4 className="bout">
                    The master Bamboo Monitor Riser is a sturdy and stylish platform that
                    elevates your screen to a more comfortable viewing height. Placing your monitor at 
                    eye level has the potential to improve your posture and make you more 
                    comfortable while at work, helping you stay focused on the task at hand.
                </h4>
                
            </div>
            <div>
                <h4 className="bout">
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow
                    notepads, pens, and USB sticks to be stored under the stand.
                </h4>
            </div>
            <br/>
            <br/>
            <div className="big">
                            {datas}
            </div>

        </div>
    )
}
export default About
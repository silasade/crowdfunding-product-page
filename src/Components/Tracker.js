function Tracker(){
    return(
        <div className="tracker">
            <div className="track">
                <div>
                    <h1>$89,914</h1>
                    <h5>of $100,000 backed</h5>
                </div>
                <div>
                    <h1>50007</h1>
                    <h5>total backers</h5>
                </div>
                <div>
                    <h1>56</h1>
                    <h5>days left</h5>
                </div>
            </div>
            
            <div>
                <input className="tra" type="range"/>
            </div>
        </div>
    )
}
export default Tracker
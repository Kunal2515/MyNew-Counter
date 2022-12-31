import react, {useState} from 'react';
import './Counter.css'

function Counter (){

const [count, setCount] = useState(0)

const ClickHandleIn = () => {
    setCount(count + 1)
}

const ClickHandleDec = () => {
    setCount(count - 1)
}

return(
<div className="Counter-Section">
    <div className="container">
        <h1 className="Counter">Counter</h1>
        <div className="View-Count">
            <h1 className="Counter-View">{count}</h1>
        </div>
        <div className="Button-View">
            <button className="Increment-View" type="button" onClick={ClickHandleIn}>Increment</button>
            <button className="Decrement-View" type="button" onClick={ClickHandleDec}>Decrement</button>
        </div>
    </div>
</div>


)}

export default Counter;
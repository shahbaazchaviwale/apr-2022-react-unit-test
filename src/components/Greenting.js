import { useState } from "react";

const Greenting = () => {

    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText((prevState) => !prevState);
    }
    return(<div>
        <h2>Hello World</h2>
        {!changeText && <p>Good to see you all</p>}
        {changeText && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Click to Change text!</button>
    </div>)
}

export default Greenting;
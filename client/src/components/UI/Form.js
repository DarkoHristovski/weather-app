import React, {useRef} from "react";

const Form = () =>{
const cityInputRef = useRef();
const addCityHandler = (event) => {
event.preventDefault();
console.log(cityInputRef.current.value)

    }
    return (
        <form onSubmit={addCityHandler}>
          <input
            type="text"
            id="city"
            placeholder="Enter a city"
            ref ={cityInputRef} />
            <button type="submit">Send</button>
          </form>
    )
}

export default Form;
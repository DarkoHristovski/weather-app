

const Form = (props) =>{
    return (
        <form onSubmit={props.addCityHandler}>
          <input
            type="text"
            id="city"
            placeholder="Enter a city"
            onChange={props.cityChangeHandler} 
            value={props.city} />
            <button type="submit">Send</button>
          </form>
    )
}

export default Form;
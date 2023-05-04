const Form = (props) =>{

    return (
        <form onSubmit={props.addCityHandler}>
          <input
            type="text"
            id="city"
            placeholder="Enter a city"
            onChange={(event)=> props.setCity(event.target.value)} 
            value={props.city} />
            <button type="submit">Send</button>
          </form>
    )
}

export default Form;
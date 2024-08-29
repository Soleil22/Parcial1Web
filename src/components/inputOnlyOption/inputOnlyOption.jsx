import './inputOnlyOption.css'

function InputOnlyOption(props) {
    return (
      <>
      <h1>{props.tituloCate}</h1>
        <div>
            <h3>{props.text}</h3>
            <p>{props.price}</p>
            <img src={props.img} alt="" srcset="" />
        </div>
        <label htmlFor="">
            <input type="radio" />
        </label>

      </>
    )
  }
  
  export default InputOnlyOption;
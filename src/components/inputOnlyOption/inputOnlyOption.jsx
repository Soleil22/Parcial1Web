import './inputOnlyOption.css'

function InputOnlyOption(props) {
    return (
      <>
    <div class="container">
      <h1>{props.tituloCate}</h1>
            <h3>{props.text}</h3>
            <p>{props.price}</p>
            <img class="imagen" src={props.img} alt="" srcset="" />
        <label htmlFor="">
            <input type="radio" />
        </label>
        </div>
      </>
    )
  }
  
  export default InputOnlyOption;
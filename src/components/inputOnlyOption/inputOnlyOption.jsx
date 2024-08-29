import './inputOnlyOption.css'

function InputOnlyOption(props) {
    return (
      <>
      <h1>{props.tituloCate}</h1>
        <div>
            <h3>{props.text}</h3>
            <p>{props.price}</p>
        </div>
      </>
    )
  }
  
  export default InputOnlyOption;
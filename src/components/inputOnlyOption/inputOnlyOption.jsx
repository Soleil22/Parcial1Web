import './inputOnlyOption.css'

function InputOnlyOption({titulo, img, precio, tittleC}) {
    return (
      <>
    <div class="container">
            <h3>{titulo}</h3>
            <p>{precio}</p>
            <img class="imagen" src={img} alt="" srcset="" />
        </div>
      </>
    )
  }
  
  export default InputOnlyOption;
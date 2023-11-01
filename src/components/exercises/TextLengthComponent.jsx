import { getLength } from "../../assets/js/"
import { useForm } from "../../hooks"


export const TextLengthComponent = () => {
  
  const [ values, handleInputChange ] = useForm({
    text: '',
  });

  return (
    <div className="container-form">
        <h1>Text Length</h1>
        <hr />
        <form>
            <label htmlFor="text" className="form-label">Text:</label><br />
            <input type="text" className="form-control" name="text" id="text" onChange={ handleInputChange } autoComplete="off"></input><br /><br />
        </form>
        <div className="result">
            <h3>Result</h3>
            <p>{ getLength( values.text ) }</p>
        </div>
    </div>
  )
}

import { useState } from "react";
import { cutOff } from "../../assets/js";
import { useForm } from "../../hooks"


export const CutOffComponent = () => {
  const [ result, setResult ] = useState(0);
  const [ values, handleInputChange ] = useForm({
    text: '', // This is my brand new text, and I will cut it in the position number 25
    cutoffPoint: 0,
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { text, cutoffPoint } = values;
    setResult( cutOff(text, Number.parseInt(cutoffPoint)) );
  };

  return (
    <div className="container-form">
        <form>
            <h2>Cut Off</h2>
            <hr />
            <label htmlFor="text" >Original string: </label><br/>
            <input type="text" name="text" className="form-control" onChange={ handleInputChange } autoComplete="off" />
            <label htmlFor="cutoffPoint" >Length of new string: </label><br/>
            <input type="text" name="cutoffPoint" className="form-control" onChange={ handleInputChange } autoComplete="off" />
            <button className="btn btn-secondary form-control" onClick={ handleSubmit }>Cut String</button>
        </form>
        <div className="result">
            <h3>Result</h3>
            <p>{ result }</p>
        </div>
    </div>
  )
}

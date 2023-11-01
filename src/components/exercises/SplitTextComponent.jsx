import { useState } from "react";
import { splitText } from "../../assets/js";
import { useForm } from "../../hooks"


export const SplitTextComponent = () => {
  const [ result, setResult ] = useState(null);
  const [ values, handleInputChange ] = useForm({
    text: '',
    splitBy: '',
  });

  const handleSplit = e => {
    e.preventDefault();
    const splittedText = splitText( values.text, values.splitBy ).join(' ');
    setResult( splittedText );
  };

  return (
    <div className="container-form">
        <form>
            <h1>Split Text</h1>
            <hr />
            <input type="text" name="text" className="form-control" autoComplete="off" onChange={ handleInputChange } />
            <input type="text" name="splitBy" className="form-control" autoComplete="off" onChange={ handleInputChange } />
            <button className="btn btn-success form-control" onClick={ handleSplit }>Split</button>
        </form>
        <div className="result">
            <h3>Result</h3>
            <p>{ result }</p>
        </div>
    </div>
  )
}

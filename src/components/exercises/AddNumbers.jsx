import { useRef, useState } from "react";
import { addNumbers } from "../../assets/js";


export const AddNumbers = () => {
  const [ list, setList ] = useState([]);
  const [ result, setResult ] = useState(null);
  const [ addingNumber, setAddingNumber ] = useState('');
  const inputRef = useRef(null);

  const handleAddToList = e => {
    e.preventDefault();
    setList([ ...list, isNaN( Number.parseInt(addingNumber)) ? 0 : Number.parseInt(addingNumber) ]);
    setAddingNumber('');
    inputRef.current.focus()
  };

  const handleChange = e => {
    setAddingNumber(e.target.value);
  };

  const handleAddNumbers = e => {
    e.preventDefault();
    setResult( addNumbers(list) );
  };

  return (
    <div className="container-form">
        <div>
            <label htmlFor="num" >Add a number to the list (TAB):</label><br/>
            <input value={ addingNumber } id="num" onChange={ handleChange } ref={ inputRef } onBlur={ handleAddToList } type="text" className="form-control" autoComplete="off"/><br />
            <hr />
            <p>These are the numbers in your list:  { list.join(' ') }</p>
            <hr />
            <button className="btn btn-primary form-control" onClick={ handleAddNumbers }>Add Numbers</button>
        </div>
        <div className="result">
            <h3>Result</h3>
            <p>{ result }</p>
        </div>
    </div>
  )
}

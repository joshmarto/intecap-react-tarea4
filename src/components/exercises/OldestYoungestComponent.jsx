import { useRef, useState } from "react";
import { oldestAndYoungest } from "../../assets/js";


export const OldestYoungestComponent = () => {
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
      setResult( oldestAndYoungest(list) );
    };
  
    return (
      <div className="container-form">
          <div>
              <label htmlFor="num" >Add an age to the list</label><br/>
              <input value={ addingNumber } id="num" onChange={ handleChange } ref={ inputRef } type="text" className="form-control" autoComplete="off"/><br />
              <button className="btn btn-info" onClick={ handleAddToList }>Add Age to list</button>
              <hr />
              <p>These are the ages in your list:  { list.join(' ') }</p>
              <hr />
              <button className="btn btn-primary form-control" onClick={ handleAddNumbers }>Oldest and Youngest</button>
          </div>
          <div className="result">
              <h3>Result</h3>
              <p>{ result }</p>
          </div>
      </div>
  )
}

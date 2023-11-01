import { useState } from "react";
import { useForm } from "../../hooks";
import { getAge } from "../../assets/js";


export const GetAgeComponent = () => {
  const [ result, setResult ] = useState(null);
  const [ values, handleInputChange ] = useForm({
    age: null,
  });

  const handleCalculate = e => {
    e.preventDefault();
    const bDate = new Date( values.age );
    setResult( getAge( bDate ) );
  };

  return (
    <div className="container-form">
        <form>
            <h1>Get Age</h1>
            <hr />
            <label htmlFor="age" className="form-label">Enter your birth date: </label><br/><br/>
            <input type="date" name="age" className="form-control" onChange={ handleInputChange }/><br/><br/>
            <button className="btn btn-info form-control" onClick={ handleCalculate }>Calculate my age</button>
        </form>
        <div className="result">
            <h3>Result</h3>
            <p>{ result }</p>
        </div>
    </div>
  )
}

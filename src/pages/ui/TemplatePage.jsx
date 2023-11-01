import { useEffect, useState } from "react";
import { useForm } from "../../hooks";
import { useLocation } from "react-router-dom";


export const TemplatePage = ({ title, fields, func }) => {
  const [ result, setResult ] = useState(null);
  const [ values, handleInputChange, reset ] = useForm({});
  const location = useLocation();

  const clearFields = () => {
    fields.map( ({name}, i) => {
      const input = document.getElementById(`${name}-${i}`);
      input.value = '';
      input.innerText = '';
    });
  };

  useEffect(() => {
    reset();
    clearFields();
    setResult(null);
  }, [location.pathname])

  const handleClick = e => {
    e.preventDefault();
    const arrKeys = Object.keys(values);
    const keys = arrKeys.length === 3 ? arrKeys : arrKeys.length === 2 ? [ ...arrKeys, null ] : [ ...arrKeys, null, null ];
    const params = keys.map( key => key ? values[key] : null);
    console.log( typeof func(params[0], params[1], params[2]) );
    setResult( func(params[0], params[1], params[2]) );
  };

  return (
    <div className="container-form">
        <form>
            <h1>{ title }</h1>
            <hr />
            {
                fields.map( ({name, isNumber}, i) => {
                    return(
                        <div key={`${name}-${i + 1}`}>
                            <label htmlFor={name} className="form-label">{ name }</label><br /><br />
                            <input type='text' name={name} className="form-control" id={ `${name}-${i}`} onChange={ (e) => handleInputChange(e, isNumber) } autoComplete="off" />
                        </div>
                    )
                })
            }
            <br />
            <button className="btn btn-success form-info" onClick={ handleClick }>Submit</button>
        </form>
        <div className="result" id="result">
            <h3>Result</h3>
            <p>{ typeof result === 'boolean' ? result ? 'Verdadero' : 'Falso' : result }</p>
        </div>
    </div>
  )
}

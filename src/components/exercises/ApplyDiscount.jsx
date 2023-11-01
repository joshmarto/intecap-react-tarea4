import { useState } from "react";
import { applyDiscount } from '../../assets/js'
import { useForm } from "../../hooks";


export const ApplyDiscount = () => {
  const [ result, setResult ] = useState(null);
  const [ values, handleInputChange ] = useForm({
    originalPrice: 0,
    discount: 0,
  });

  const handleCalculate = e => {
    e.preventDefault();
    setResult( applyDiscount( values.originalPrice, values.discount ) );
  };

  return (
    <div className="container-form">
        <form>
            <h1>Apply Discount</h1>
            <hr />
            <label htmlFor="originalPrice">Original price: </label><br/><br/>
            <input type="text" name="originalPrice" className="form-control" onChange={ handleInputChange } />
            <label htmlFor="discount">Discount %: </label><br/><br/>
            <input type="text" name="discount" className="form-control" onChange={ handleInputChange } />
            <button className="btn btn-light form-control" onClick={ handleCalculate }>Calculate</button>
        </form>
        <div className="result">
            <h3>Result</h3>
            <p>{ result }</p>
        </div>
    </div>
  )
}

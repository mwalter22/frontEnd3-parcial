// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Card from './Card';
import './Form.css';

const Form = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState('');

  const handleValor1Change = (event) => {
    setValor1(event.target.value);
  };

  const handleValor2Change = (event) => {
    setValor2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (valor1.trim().length < 3 || /^\s/.test(valor1)) {
      setError('Por favor chequea que la información sea correcta, el primer campo debe tener al menos 3 caracteres sin espacios al inicio.');
    } else if (valor2.length < 6) {
      setError('Por favor chequea que la información sea correcta, el segundo campo debe tener al menos 6 caracteres.');
    } else {
      setError('');
      setMostrarCard(true);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Primer campo:</label>
          <input
            type="text"
            value={valor1}
            onChange={handleValor1Change}
          />
        </div>
        <div>
          <label>Segundo campo:</label>
          <input
            type="text"
            value={valor2}
            onChange={handleValor2Change}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p className='error'>{error}</p>}

      {mostrarCard && <Card valor1={valor1} valor2={valor2} />}
        <div className="card">
          <h3>Card</h3>
          <p>Primer campo: {valor1}</p>
          <p>Segundo campo: {valor2}</p>
        </div>
    </div>
  );
};

export default Form;
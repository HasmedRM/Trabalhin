import React from 'react';
import './css/recuperar.css'

const RecoverPassword = () => {
  return (
    <div className="content-recover">
      <h2 className="text-center">Recuperação de Senha</h2>
      <p className="text-center">Insira o código de 6 dígitos que enviamos para o seu e-mail.</p>
      <form action="/recover-password" method="POST" className="recover-form mx-auto">
        <div className="mb-3">
          <label htmlFor="email-code" className="form-label">Código de Recuperação</label>
          <input 
            type="text" 
            id="email-code" 
            name="email-code" 
            className="form-control" 
            maxLength="6" 
            placeholder="Digite o código" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-recover-primary w-100">Enviar</button>
      </form>
    </div>
  );
};

export default RecoverPassword;
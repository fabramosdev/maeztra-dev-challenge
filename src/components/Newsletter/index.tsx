import React, { useState } from "react";

import "./styles.css";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateEmail(email)) {
      setMessage("Email cadastrado com sucesso!");
    } else {
      setMessage("Por favor, insira um email válido.");
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <>
      <div className="newsletter">
        <div className="title-newsletter">
          <h3>Receba Nossa Newsletter</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
          <button type="submit">Enviar</button>
        </form>
        <p className="newslettter-message">{message}</p>
      </div>
    </>
  );
};

export { Newsletter };

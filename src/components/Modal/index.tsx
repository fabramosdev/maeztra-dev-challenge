import { useState, useEffect, useCallback } from "react";
import MailIcon from "../../assets/newsletter-mail-icon.svg";
import ModalIcon from "../../assets/modal-icon.svg";
import BgNewsletter from "../../assets/bg-newsletter.jpg";
import "./styles.css";

const Modal = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState("");

  const checkNewVisitor = useCallback(() => {
    const newVisitor = localStorage.getItem("@newVisitor");

    if (!newVisitor) {
      setModalStatus(true);
      localStorage.setItem("@newVisitor", "true");
    }
  }, []);

  const handleEmail = useCallback(() => {
    const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (mail && !regexMail.test(mail)) {
      setMailError("Endereço de email inválido!");
    } else {
      setMailError("");
    }
  }, [mail]);

  const handleEmailSubmission = useCallback((mail: string) => {
    console.log(`E-mail cadastrado: ${mail}`);
    alert(`o e-mail ${mail} foi cadastrado com sucesso!`);
    setModalStatus(false);
  }, []);

  useEffect(() => {
    checkNewVisitor();
    handleEmail();
  }, [checkNewVisitor, handleEmail]);

  return modalStatus ? (
    <div>
      <div className="modal-overlay">
        <button className="close-modal" onClick={() => setModalStatus(false)}>
          Fechar
        </button>
        <div className="modal">
          <div className="img-modal">
            <img src={BgNewsletter} alt="" />
          </div>
          <img src={MailIcon} alt="Ícone para assinatura da newsletter" />
          <h1>Bem Vindo à MAEZTRA</h1>
          <span>
            Receba em Primeira mão <br />
            <strong>desconto e ofertas exclusivas</strong>
          </span>
          <div>
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
            {mailError && <p>{mailError}</p>}
          </div>
          <button
            type="button"
            disabled={!!mailError || !mail}
            onClick={() => handleEmailSubmission(mail)}
          >
            ENVIAR <img src={ModalIcon} alt="modal-icon"></img>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export { Modal };

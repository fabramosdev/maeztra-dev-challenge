import TipBar01 from "../../assets/tipbar-01.png";
import TipBar02 from "../../assets/tipbar-02.png";
import TipBar03 from "../../assets/tipbar-03.png";
import TipBar04 from "../../assets/tipbar-04.png";
import TipBar05 from "../../assets/tipbar-05.png";

import "./styles.css";

const TipBar = () => {
  return (
    <>
      <div className="tipbar">
        <h3>Por que comprar na Maeztra?</h3>
        <div className="tipbar-content">
          <div className="tipbar-item">
            <div className="tipbar-item-img">
              <img src={TipBar01} alt="" />
            </div>
            <div className="tipbar-item-text-box">
              <div className="tipbar-item-title">Produtos importados</div>
              <div className="tipbar-item-text">Produto de Alta Qualidade</div>
            </div>
          </div>
          <div className="tipbar-item">
            <div className="tipbar-item-img">
              <img src={TipBar02} alt="" />
            </div>
            <div className="tipbar-item-text-box">
              <div className="tipbar-item-title">Estoque no Brasil</div>
              <div className="tipbar-item-text">
                Produtos mais perto de você!
              </div>
            </div>
          </div>
          <div className="tipbar-item">
            <div className="tipbar-item-img">
              <img src={TipBar03} alt="" />
            </div>
            <div className="tipbar-item-text-box">
              <div className="tipbar-item-title">Trocas Garantidas</div>
              <div className="tipbar-item-text">
                Trocas em até 48 horas, veja as regras
              </div>
            </div>
          </div>
          <div className="tipbar-item">
            <div className="tipbar-item-img">
              <img src={TipBar04} alt="" />
            </div>
            <div className="tipbar-item-text-box">
              <div className="tipbar-item-title">Ganhe 5% off</div>
              <div className="tipbar-item-text">Pagando à vista no cartão</div>
            </div>
          </div>
          <div className="tipbar-item">
            <div className="tipbar-item-img">
              <img src={TipBar05} alt="" />
            </div>
            <div className="tipbar-item-text-box">
              <div className="tipbar-item-title">Frete Grátis</div>
              <div className="tipbar-item-text">
                Em compras acima de R$ 499,00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { TipBar };

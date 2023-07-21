import Marca01 from "../../assets/marcas-01.png";
import Marca02 from "../../assets/marcas-02.png";
import Marca03 from "../../assets/marcas-03.png";
import Marca04 from "../../assets/marcas-04.png";
import Marca05 from "../../assets/marcas-05.png";

import "./styles.css";

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="title-marcas">
          <h2>Marcas Parceiras</h2>
        </div>
        <div className="partners-content">
          <div className="partners-item">
            <img src={Marca01} alt="" />
          </div>
          <div className="partners-item">
            <img src={Marca02} alt="" />
          </div>
          <div className="partners-item">
            <img src={Marca03} alt="" />
          </div>
          <div className="partners-item">
            <img src={Marca04} alt="" />
          </div>
          <div className="partners-item">
            <img src={Marca05} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Partners };

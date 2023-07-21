import { useEffect, useState } from "react";

import "./styles.css";

import IconMenu from "../../assets/icon-menu.svg";
import Logo from "../../assets/logo-maeztra-novo.png";
import IconShoppingBag from "../../assets/icon-shoppingbag.svg";
import IconBusca from "../../assets/icon-busca.svg";
import Login from "../../assets/icon-user.svg";
import Wishlist from "../../assets/icon-heart.svg";

function Header() {
  const screenWidth = window.innerWidth;
  const [mob, setMob] = useState(() => screenWidth);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const handleResizeTrigger = () => {
      setMob(screenWidth);
    };

    window.addEventListener("resize", handleResizeTrigger);

    return () => window.removeEventListener("resize", handleResizeTrigger);
  }, []);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <div className="header">
        <div className="header-top">
          <span>
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </span>
        </div>
        {mob <= 1100 ? (
          <>
            <div className="full-header">
              <div className="menu">
                <img src={IconMenu} alt="Menu" />
              </div>
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="search" onClick={handleSearch}>
                <img src={IconBusca} alt="Search" />
              </div>
              <div className="shopping-cart">
                <img src={IconShoppingBag} alt="Shopping Cart" />
              </div>
            </div>
            {search && (
              <div className={`search-mobile ${search ? "active" : ""}`}>
                <input placeholder="O Que Você Busca?" />
              </div>
            )}
          </>
        ) : (
          <>
            <div className="header-desk">
              <div className="header-meio">
                <div className="logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="search">
                  <input placeholder="O Que Você Busca?" />
                  <button>Buscar</button>
                </div>
                <div className="header-institucional">
                  <div className="login">
                    <img src={Login} alt="Login" />
                    <span>Minha Conta</span>
                  </div>
                  <div className="wishlist">
                    <img src={Wishlist} alt="Lista de Desejos" />
                    <span>Lista de Desejos</span>
                  </div>
                  <div className="shopping-cart">
                    <p>Meu Carrinho</p>
                    <img src={IconShoppingBag} alt="Shopping Cart" />
                  </div>
                </div>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <span>Novidades</span>
                  </li>
                  <li>
                    <span>Roupas</span>
                  </li>
                  <li>
                    <span>Sapatos</span>
                  </li>
                  <li>
                    <span>Lingerie</span>
                  </li>
                  <li>
                    <span>Acessórios</span>
                  </li>
                  <li>
                    <span>OUTLET</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export { Header };

import { MagnifyingGlass, Receipt, SignOut } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-food-explorer.png";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Logo Food Explorer" />
        </Link>

        <div>
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
          <MagnifyingGlass size={32} color={"#c4c4cc"} />
        </div>
      </div>

      <button>
        <Receipt size={32} color={"#ffffff"} />
        Pedidos(0)
      </button>

      <SignOut size={32} color={"#ffffff"} />
    </header>
  );
};

import Logo from "../../assets/logo-food-explorer-gray.png";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={Logo} alt="" />

        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

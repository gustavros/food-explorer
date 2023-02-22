import { Link } from "react-router-dom";
import Logo from "../../assets/logo-food-explorer.png";
import { Header } from "../../components/Header/Header";

import styles from "./styles.module.scss";

export const SignIn = () => {
  return (
    <div className={styles.signin__container}>
      <img src={Logo} alt="Logo Food Explorer" />

      <form>
        <h2>Faça Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            placeholder="No mímimo 6 caracteres"
          />
        </div>

        <button>Entrar</button>

        <Link to="/signup">Crie uma conta</Link>
      </form>
    </div>
  );
};

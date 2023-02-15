import { Link } from "react-router-dom";
import Logo from "../../assets/logo-food-explorer.png";

import styles from "./styles.module.scss";

export const SignUp = () => {
  return (
    <div className={styles.signup__container}>
      <img src={Logo} alt="Logo Food Explorer" />

      <form>
        <h2>Crie sua conta</h2>

        <div>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" placeholder="Exemplo: Maria da Silva" />
        </div>

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

        <button>Criar conta</button>

        <Link to="/signin">Já tenho uma conta</Link>
      </form>
    </div>
  );
};

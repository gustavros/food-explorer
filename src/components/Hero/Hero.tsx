import Cookies from "../../assets/cookies.png";
import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={Cookies} alt="Cookies" />

      <div>
        <h3>Sabores inigualáveis</h3>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </div>
  );
};

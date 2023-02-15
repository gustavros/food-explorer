import { IPratos } from "../../interfaces/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Minus, Plus } from "phosphor-react";
import styles from "./styles.module.scss";
import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";

interface Props {
  title: string;
  category: IPratos[];
}

export const Slider = ({ title, category }: Props) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>

      <Swiper
        slidesPerView={4}
        spaceBetween={27}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {category.map((prato) => (
          <SwiperSlide className={styles.card} key={prato.nome}>
            <img src={prato.imagem} alt="" />

            <h2>{prato.nome}</h2>
            <p className={styles.description}>{prato.descricao}</p>

            <p className={styles.price}>
              {prato.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <div>
              <span>
                <Minus />
                01
                <Plus />
              </span>

              <button>Incluir</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

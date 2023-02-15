import { IPratos } from "../../interfaces/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Minus, Plus } from "phosphor-react";
import styles from "./styles.module.scss";
import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";

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
        {category.map((dish) => (
          <Link to={`/dishs/${dish.name}`} key={dish.name}>
            <SwiperSlide className={styles.card}>
              <img src={dish.image} alt="" />

              <h2>{dish.name}</h2>
              <p className={styles.description}>{dish.description}</p>

              <p className={styles.price}>
                {dish.price.toLocaleString("pt-br", {
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
          </Link>
        ))}
      </Swiper>
    </div>
  );
};

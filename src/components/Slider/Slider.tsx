import { IPratos } from "../../interfaces/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Minus, Plus } from "phosphor-react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
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
        rewind={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {category.map((dish) => (
          <SwiperSlide key={dish.id}>
            <Link
              to={`/dishes/${dish.category}/${dish.id}`}
              className={styles.card}
            >
              <img src={dish.image} alt={dish.description} />

              <h2>{dish.name}</h2>
              <p className={styles.description}>{dish.description}</p>

              <p className={styles.price}>
                {dish.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

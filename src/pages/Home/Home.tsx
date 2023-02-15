import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Slider } from "../../components/Slider/Slider";

import { bebidas, pratos, sobremesas } from "../../utils/db";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Slider title="Refeição" category={pratos} />
      <Slider title="Sobremesas" category={sobremesas} />
      <Slider title="Bebidas" category={bebidas} />
    </>
  );
};

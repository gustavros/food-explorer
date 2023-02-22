import { useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Slider } from "../../components/Slider/Slider";

import { db } from "../../utils/db";

export const Home = () => {
  return (
    <>
      <Hero />
      <Slider title="Refeição" category={db.meals} />
      <Slider title="Bebidas" category={db.drinks} />
      <Slider title="Sobremesa" category={db.desserts} />
    </>
  );
};

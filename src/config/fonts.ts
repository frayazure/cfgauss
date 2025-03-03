import { Nunito, Handlee } from "next/font/google";

export const nunito = Nunito({
    variable: "--font-nunito", // Define una variable CSS para Nunito
    subsets: ["latin"], // Especifica los subconjuntos de caracteres
    weight: ["400", "700"], // Especifica los pesos de la fuente que necesitas
  });
  

  export const handlee = Handlee({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-handlee",
  });

import dynamic from "next/dynamic";

import ServicePage from "../../../components/servicePage";


export default function SemPage({ page }) {
  const {
    title,
    image,
    subtitle,
    subtitle2,
    subtitle3,
    mainText,
    subText,
    subText2,
    subText3,
    whyText,
  } = page;
  return (
    <ServicePage
      title={title}
      image={image}
      subtitle={subtitle}
      subtitle2={subtitle2}
      subtitle3={subtitle3}
      mainText={mainText}
      subText={subText}
      subText2={subText2}
      subText3={subText3}
      whyText={whyText}
    />
  );
}

export async function getStaticProps() {
  const page = {
    title: "Campañas SEM",
    image: "semIcon",
    subtitle: "Ventajas",
    subtitle2: "Cómo lo hacemos",
    subtitle3: "Nuestro objetivo",
    mainText:
      "Mejora el posicionamiento de tu web instantáneamente a través de una campaña de publicidad en los motores de búsqueda.",
    subText:
      "Existe una manera de mejorar tu posicionamiento instantáneamente y es haciendo publicidad en los motores de búsqueda para que tu web aparezca en las primeras posiciones.",
    subText2:
      "Analizamos con especial cuidado las palabras clave a potenciar mediante la campaña SEM gracias a nuestro experimentado equipo.",
    subText3:
      "Potenciar tu negocio y complementar el posicionamiento SEO, disparando tu página web a las primeras posiciones de Google o Bing.",
    whyText: "¿Por qué invertir en campañas SEM?",
  };

  return {
    props: {
      page,
    },
    
  };
}

import dynamic from "next/dynamic";

const ServicePage = dynamic(() => import("../../../components/servicePage"), {
  ssr: false,
});

export default function WebPage({ page }) {
  const {
    title,
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
    title: "Desarrollo Web",
    subtitle: "Qué ofrecemos",
    subtitle2: "Cómo lo hacemos",
    subtitle3: "Siempre a la última",
    mainText:
      "Desarrollamos páginas web desde cero para adaptarnos lo máximo al cliente y a los motores de búsqueda.",
    subText:
      "Cuidamos hasta el último detalle para diseñar webs eficientes y rápidas, siempre con el objetivo de que sean óptimas para un buen posicionamiento SEO.",
    subText2:
      "Hechas a medida, brindamos soluciones 360º a nuestros clientes para lograr cumplir y llevar a la realidad la web ideal que tiene en mente para su negocio.",
    subText3:
      "Utilizamos la última tecnología para conseguir una web responsiva y moderna (Wordpress, NextJs, etc)",
    whyText: "¿Por qué invertir en tu página web?",
  };

  return {
    props: {
      page,
    },
    
  };
}

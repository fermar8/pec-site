import dynamic from "next/dynamic";

const ServicePage = dynamic(() => import("../../../components/servicePage"), {
  ssr: false,
});

export default function UxUiPage({ page }) {
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
    title: "Consultoría UX/UI",
    subtitle: "Qué ofrecemos",
    subtitle2: "Por qué",
    subtitle3: "La importancia del UX/UI",
    mainText:
      "Analizamos tu página web desde la mirada de tus usuarios para implementar soluciones eficientes que resulten en mayores ventas.",
    subText:
      "Disponemos de expertos UX/UI que analizarán tu página web en busca de encontrar soluciones que aporten una mayor conversión.",
    subText2:
      "Con tener una página bonita no basta, debe ser fácil de navegar y que lleve a tus clientes a donde tú quieres para así aprovechar cada visita a tu página web.",
    subText3:
      "Una página web mal optimizada en cuanto a UX/UI resulta en un mayor porcentaje de rebote lo que se traduce en ventas no realizadas. Déjanos guiar a tus clientes.",
    whyText: "¿Por qué invertir en diseño UX/UI?"
  };

  return {
    props: {
      page,
    },
  };
}
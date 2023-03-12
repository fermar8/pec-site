import ServicePage from "../../../components/servicePage";

export default function DesignPage({ page }) {
  const { title, mainText, offerText, howText, whatText } = page;
  return (
    <ServicePage
      title={title}
      mainText={mainText}
      offerText={offerText}
      howText={howText}
      whatText={whatText}
    />
  );
}

export async function getStaticProps() {
  const page = {
    title: "Diseño Web",
    mainText:
      "Cuidamos al detalle el diseño para brindar al usuario final una experiencia óptima y mejorar la conversión de tu página web.",
    offerText:
      "Nuestra visión es siempre la de conseguir que el usuario final (tus clientes) tengan una experiencia agradable y fácil en tu página web.",
    howText:
      "Lo logramos gracias a la atención y delicadeza de nuestros diseñadores.",
    whatText:
      "Buscamos alcanzar la mejor conversión posible, es por eso que diseñamos las páginas web siempre desde el punto de vista del usuario buscando el equilibrio entre un posicionamiento SEO idóneo y un UX/UI óptimo para el usuario.",
  };

  return {
    props: {
      page,
    },
  };
}

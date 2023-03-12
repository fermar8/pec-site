import ServicePage from "../../../components/servicePage";

export default function SemPage({ page }) {
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
    title: "Campañas SEM",
    mainText:
      "Aceleramos el posicionamiento con campañas SEM cuidadas y eficaces para obtener un máximo rendimiento.",
    offerText:
      "Las campañas SEM son una muy buena opción para potenciar tu negocio y complementar el posicionamiento SEO, disparando tu página web a las primeras posiciones de Google o Bing.",
    howText:
      " Existe una manera de mejorar tu posicionamiento instantáneamente y es haciendo publicidad en los motores de búsqueda para que tu web aparezca en las primeras posiciones.",
    whatText:
      "Requiere un especial cuidado a la hora de seleccionar las palabras clave por las cuáles queremos aparecer y es por eso que disponemos de expertos en SEM que se aseguraran que el dinero invertido no sea en vano.",
  };

  return {
    props: {
      page,
    },
  };
}
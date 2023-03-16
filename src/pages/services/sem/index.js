import ServicePage from "../../../components/servicePage";

export default function SemPage({ page }) {
  const {
    title,
    subtitle,
    subtitle2,
    subtitle3,
    mainText,
    subText,
    subText2,
    subText3,
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
    />
  );
}

export async function getStaticProps() {
  const page = {
    title: "Campañas SEM",
    subtitle: "Ventajas",
    subtitle2: "Cómo lo hacemos",
    subtitle3: "Nuestro objetivo",
    mainText:
      "Aceleramos el posicionamiento con campañas SEM cuidadas y eficaces para obtener un máximo rendimiento.",
    subText:
      "Existe una manera de mejorar tu posicionamiento instantáneamente y es haciendo publicidad en los motores de búsqueda para que tu web aparezca en las primeras posiciones.",
    subText2:
      "Requiere un especial cuidado a la hora de seleccionar las palabras clave por las cuáles queremos aparecer y es por eso que disponemos de expertos en SEM que se aseguraran que el dinero invertido no sea en vano.",
    subText3:
      "Las campañas SEM son una muy buena opción para potenciar tu negocio y complementar el posicionamiento SEO, disparando tu página web a las primeras posiciones de Google o Bing.",
  };

  return {
    props: {
      page,
    },
  };
}
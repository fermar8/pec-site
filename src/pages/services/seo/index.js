import ServicePage from "../../../components/servicePage";

export default function SeoPage({ page }) {
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
    title: "Posicionamiento SEO",
    mainText:
      "Nos enfocamos en que tu negocio sea encontrado con la máxima facilidad por tus clientes potenciales",
    offerText:
      "El posicionamiento SEO es clave para cualquier negocio hoy en día. Sin él, tu presencia online disminuye drásticamente. Es vital que tu negocio se encuentre entre los primeros resultados cuando tus posibles clientes busquen tus servicios.",
    howText:
      "En ON LINE realizamos un análisis intensivo de tu negocio para afinar tu página web a las palabras clave que buscan tus clientes potenciales.",
    whatText:
      "Verás cómo aumentar tus visitas y generar tráfico orgánico no es tan difícil como parece y puedes encontrar nuevos clientes (o más bien que ellos te encuentren a ti) sin hacer nada!",
  };

  return {
    props: {
      page,
    },
  };
}
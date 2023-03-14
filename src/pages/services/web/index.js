import ServicePage from "../../../components/servicePage";

export default function WebPage({ page }) {
  const { title, mainText, offerText, howText, whatText } = page;
  return (
    <ServicePage
      title={title}
      mainText={mainText}
      offerText={offerText}
      howText={howText}
      whatText={whatText}
      image="web"
    />
  );
}

export async function getStaticProps() {
  const page = {
    title: "Desarrollo Web",
    mainText:
      "Desarrollamos páginas web desde cero para adaptarnos lo máximo al cliente y a los motores de búsqueda.",
    offerText:
      "Cuidamos hasta el último detalle para diseñar webs eficientes y rápidas, siempre con el objetivo de que sean óptimas para un buen posicionamiento SEO.",
    howText:
      "Hechas a medida, brindamos soluciones 360º a nuestros clientes para lograr cumplir y llevar a la realidad la web ideal que tiene en mente para su negocio.",
    whatText:
      "Utilizamos la última tecnología para conseguir una web responsiva y moderna (Wordpress, NextJs, etc)",
  };

  return {
    props: {
      page,
    },
  };
}

import ServicePage from "../../../components/servicePage";

export default function SocialMediaPage({ page }) {
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
    title: "Social Media",
    mainText:
      "Reforzamos tu marca y su influencia gracias a una medida gestión de las redes sociales de tu empresa.",
    offerText:
      "En este mundo digital sin freno es necesario para las marcas tener presencia en las redes sociales y esto requiere una buena gestión de las mismas.",
    howText:
      "Deja en manos de nuestro equipo la ardua tarea de gestionar tu Instagram, Facebook, etc. y céntrate en tu día a día, que nosotros nos encargamos de que tu marca mejore en imagen y aumente en seguidores.",
    whatText:
      "En ON LINE te brindamos estrategias a tu medida, consensuando y adaptándonos a tus objetivos e ideas.",
  };

  return {
    props: {
      page,
    },
  };
}
import ServicePage from "../../../components/servicePage";

export default function SocialMediaPage({ page }) {
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
    title: "Social Media",
    subtitle: "Por qué",
    subtitle2: "Cómo lo hacemos",
    subtitle3: "Relájate y ve crecer tu negocio",
    mainText:
      "Reforzamos tu marca y su influencia gracias a una medida gestión de las redes sociales de tu empresa.",
    subText:
      "En este mundo digital sin freno es necesario para las marcas tener presencia en las redes sociales y esto requiere una buena gestión de las mismas.",
    subText2:
      "En ON LINE te brindamos estrategias a tu medida, consensuando y adaptándonos a tus objetivos e ideas. ",
    subText3:
      "Deja en manos de nuestro equipo la ardua tarea de gestionar tu Instagram, Facebook, etc. y céntrate en tu día a día, que nosotros nos encargamos de que tu marca mejore en imagen y aumente en seguidores.",
  };

  return {
    props: {
      page,
    },
  };
}
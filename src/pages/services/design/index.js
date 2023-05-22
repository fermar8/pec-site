import ServicePage from "../../../components/servicePage";
import { DesignIcon } from "../../../components/icons/services/designIcon";
import { DesignIconBig } from "../../../components//icons/services/designIconBig";

export default function DesignPage({ page }) {
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
    title: "Diseño Web",
    subtitle: "Qué ofrecemos",
    subtitle2: "Cómo lo hacemos",
    subtitle3: "Nuestro objetivo",
    mainText:
      "Cuidamos al detalle el diseño para brindar al usuario final una experiencia óptima y mejorar la conversión de tu página web.",
    subText:
      "Nuestra visión es siempre la de conseguir que el usuario final (tus clientes) tengan una experiencia agradable y fácil en tu página web.",
    subText2:
      "Lo logramos gracias a la atención y delicadeza de nuestros diseñadores.",
    subText3:
      "Buscamos alcanzar la mejor conversión posible, es por eso que diseñamos las páginas web siempre desde el punto de vista del usuario buscando el equilibrio entre un posicionamiento SEO idóneo y un UX/UI óptimo para el usuario.",
    whyText: "¿Por qué invertir en diseño?"
  };

  return {
    props: {
      page,
    },
  };
}

import dynamic from "next/dynamic";

const ServicePage = dynamic(() => import("../../../components/servicePage"), {
  ssr: false,
});

export default function SeoPage({ page }) {
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
    title: "Posicionamiento SEO",
    subtitle: "Por qué",
    subtitle2: "Cómo lo hacemos",
    subtitle3: "Nuestro objetivo",
    mainText:
      "Nos enfocamos en que tu negocio sea encontrado con la máxima facilidad por tus clientes potenciales",
    subText:
      "Es clave para cualquier negocio hoy en día. Sin él, tu presencia online disminuye drásticamente. Es vital que tu negocio se encuentre entre los primeros resultados.",
    subText2:
      "En ON LINE realizamos un análisis intensivo de tu negocio para afinar tu página web a las palabras clave que buscan tus clientes potenciales.",
    subText3:
      "Verás cómo aumentar tus visitas no es tan difícil como parece y puedes encontrar nuevos clientes (o más bien que ellos te encuentren a ti) ¡sin hacer nada!",
    whyText: "¿Por qué invertir en posicionamiento SEO?",
    
  };

  return {
    props: {
      page,
    },
    fallback: true
  };
}
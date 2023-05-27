import Head from "next/head";
import Layout from "../components/layout";

import Intro from "../components/home/intro";
import Services from "../components/home/services";
import About from "../components/home/about";
import Blog from "../components/home/blog";


export default function Home({ page }) {
  const {
    title,
    description,

    buttonText,

    introTitle,
    introSubtitle,
    introText,
    introCta,

    servicesTitle,
    servicesSubtitle,
    servicesMainText,
    servicesWebTitle,
    servicesWebText,
    servicesDesignTitle,
    servicesDesignText,
    servicesUxTitle,
    servicesUxText,
    servicesSeoTitle,
    servicesSeoText,
    servicesSemTitle,
    servicesSemText,
    servicesSocialTitle,
    servicesSocialText,

    aboutKnowUs,
    aboutTitle,
    aboutText,
    aboutText2,
    aboutTag,
    aboutTag2,
    aboutTag3,
    aboutKnowUs2,

    blogTitle
  } = page;
  return (
    <Layout isHome={true}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro
        title={introTitle}
        subtitle={introSubtitle}
        text={introText}
        cta={introCta}
        buttonText={buttonText}
      />
      <Services
        title={servicesTitle} 
        subtitle={servicesSubtitle}
        mainText={servicesMainText}
        buttonText={buttonText}
        webTitle={servicesWebTitle}
        webText={servicesWebText}
        designTitle={servicesDesignTitle}
        designText={servicesDesignText}
        uxTitle={servicesUxTitle}
        uxText={servicesUxText}
        seoTitle={servicesSeoTitle}
        seoText={servicesSeoText}
        semTitle={servicesSemTitle}
        semText={servicesSemText}
        socialTitle={servicesSocialTitle}
        socialText={servicesSocialText}
      />
      <About 
        knowUs={aboutKnowUs}
        title={aboutTitle}
        text={aboutText}
        text2={aboutText2}
        tag={aboutTag}
        tag2={aboutTag2}
        tag3={aboutTag3}
        knowUs2={aboutKnowUs2}
      />
      <Blog 
        title={blogTitle}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const page = {
    title: "ON LINE | Agencia de Marketing Digital Barcelona",
    description:
      "ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web",
    
    buttonText: "Contacta con nosotros",

    introSubtitle: "Agencia Marketing Digital y Diseño Web Barcelona",
    introTitle: "ON LINE",
    introText:
      "Disponemos de un equipo de especialistas enfocado al diseño web de páginas eficientes, rápidas y con buen posicionamiento SEO para mejorar la presencia online de tu negocio.",
    introCta: "Contáctanos para dar el siguiente paso con tu negocio",

    servicesTitle: "Servicios",
    servicesSubtitle: "Web y Marketing Digital",
    servicesMainText:
      "Somos un equipo de especialistas enfocado al diseño web de páginas eficientes, rápidas y con buen posicionamiento SEO para mejorar la presencia online de tu negocio. También ofrecemos servicios de Marketing Digital como gestión del Social Media o campañas SEM.",
    servicesWebTitle: "Desarrollo Web",
    servicesWebText:
      "Desarrollamos páginas web rápidas adaptándonos a todas tus necesidades",
    servicesDesignTitle: "Diseño Web",
    servicesDesignText:
      "Cuidamos al detalle el diseño para conseguir una alta conversión y aumentar las ventas",
    servicesUxTitle: "Consultoría UX/UI",
    servicesUxText:
      "Analizamos tu web para implementar soluciones enfocadas una mejor conversión",
    servicesSeoTitle: "Posicionamiento SEO",
    servicesSeoText:
      "Hacemos que tu web aparezca entre los primeros resultados de Google y otros buscadores",
    servicesSemTitle: "Campañas SEM",
    servicesSemText:
      "Aceleramos el posicionamiento con campañas SEM para obtener un máximo rendimiento",
    servicesSocialTitle: "Social Media",
    servicesSocialText:
      "Reforzamos tu marca y su presencia online gestionando  las redes sociales de tu empresa",
    
    aboutKnowUs: "Conócenos",
    aboutTitle: "Nuestro equipo",
    aboutText: "Somos una Agencia de Marketing Digital y Diseño Web completa basada en Barcelona formada por consultores SEO, SEM, UX/UI, diseñadores gráficos, Programadores Web y Community Managers.",
    aboutText2: "Somos una Agencia Digital completa formada por consultores SEO, SEM, UX/UI, diseñadores gráficos, Programadores Web y Community Managers.",
    aboutTag: "Multidisciplinar",
    aboutTag2: "Ámbito Digital",
    aboutTag3: "Emprendenduría",
    aboutKnowUs2: "Conoce al equipo",

    blogTitle: "Blog"
  };

  return {
    props: {
      page,
    },
  };
}

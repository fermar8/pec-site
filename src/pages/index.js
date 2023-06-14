import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/layout";
import Intro from "../components/home/intro";
const Services = dynamic(() => import("../components/home/services"), {
  ssr: false,
});
const About = dynamic(() => import("../components/home/about"), {
  ssr: false,
});
const Blog = dynamic(() => import("../components/home/blog"), {
  ssr: false,
});

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

    blogTitle,
    blogInfo
  } = page;

  return (
    <Layout isHome={true}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
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
      <Blog title={blogTitle} blogInfo={blogInfo} />
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

    servicesTitle: "Servicios",
    servicesSubtitle: "Web y Marketing Digital",
    servicesMainText:
      "Somos una agencia de Marketing Digital y Diseño Web formada por un equipo de especialistas enfocado al diseño web de páginas eficientes, rápidas y con buen posicionamiento SEO para mejorar la presencia online de tu negocio. También ofrecemos servicios de Marketing Digital como gestión del Social Media o campañas SEM.",
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
    aboutText:
      "ON LINE es una agencia de Marketing Digital y Diseño Web basada en Barcelona. Formado por expertos en distintos ámbitos, nuestro equipo dispone de un gran talento multidisciplinar con años de experiencia delante de las pantallas.",
    aboutText2:
      "Somos una Agencia de Marketing Digital y Diseño Web completa basada en Barcelona formada por consultores SEO, SEM, UX/UI, diseñadores gráficos, Programadores Web y Community Managers.",
    aboutTag: "Multidisciplinar",
    aboutTag2: "Ámbito Digital",
    aboutTag3: "Emprendimiento",
    aboutKnowUs2: "Conoce al equipo",

    blogTitle: "Blog",
    blogInfo: [
      {
        mainImageSrc: `${process.env.basePath}/img/blog/3-La-importancia-de-las-redes-sociales.jpg`,
        title: "La importancia de las redes sociales",
        summary: "En el panorama digital actual, una buena gestión del Social Media se ha vuelto crucial para el éxito de las empresas.",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "4 de junio de 2023",
        timestamp: 1685875800000,
        url: "blog/la-importancia-de-las-redes-sociales",
        tags: ["Social Media"]
      },
      {
        mainImageSrc: `${process.env.basePath}/img/blog/4-Campañas-SEM-Potenciando-tu-presencia-en-línea.jpg`,
        title: "Campañas SEM. Potencia tu presencia en línea",
        summary: "Las campañas SEM se han convertido en una herramienta fundamental en el mundo del marketing digital.",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "27 de mayo de 2023",
        timestamp: 1685184600000,
        url: "blog/potenciando-tu-presencia-en-linea",
        tags: ["SEM", "Social Media"]
      },
      {
        mainImageSrc: `${process.env.basePath}/img/blog/2-Como-realizar-una-auditoría-SEO.jpg`,
        title: "Cómo realizar una auditoría SEO",
        summary: "Realizar una auditoría SEO es un paso crucial para asegurarte de que tu sitio web esté optimizado para los motores de búsqueda",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "19 de mayo 2023",
        timestamp: 1684493400000,
        url: "blog/como-realizar-una-auditoria-seo",
        tags: ["SEO"]
      },
      {
        mainImageSrc: `${process.env.basePath}/img/blog/1-Que-es-el-Posicionamiento-SEO.jpg`,
        title: "¿Qué es el posicionamiento SEO?",
        summary:
          "El Posicionamiento SEO es un conjunto de técnicas y estrategias enfocadas en mejorar la visibilidad de un sitio web",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "13 de mayo de 2023",
        timestamp: 1684002003000,
        url: "blog/que-es-el-posicionamiento-seo",
        tags: ["SEO"]
      },
    ]
  };

  return {
    props: {
      page,
    },
  };
}

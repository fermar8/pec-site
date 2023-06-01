import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/layout";
const Intro = dynamic(() => import("../components/home/intro"), {
  loading: () => <div style={{ height: "100vh"}}>Loading...</div>,
  ssr: false,
});
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
      <Blog title={blogTitle} />
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
    aboutTag3: "Emprendenduría",
    aboutKnowUs2: "Conoce al equipo",

    blogTitle: "Blog",
  };

  return {
    props: {
      page,
    },
  };
}

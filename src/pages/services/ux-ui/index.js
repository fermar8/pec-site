import ServicePage from "../../../components/servicePage";

export default function UxUiPage({ page }) {
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
    title: "Consultoría UX/UI",
    mainText:
      "Analizamos tu página web desde la mirada de tus usuarios para implementar soluciones eficientes que resulten en mayores ventas.",
    offerText:
      "Disponemos de expertos UX/UI que analizarán tu página web en busca de encontrar soluciones que aporten una mayor conversión.",
    howText:
      "Con tener una página bonita no basta, debe ser fácil de navegar y que lleve a tus clientes a donde tú quieres para así aprovechar cada visita a tu página web.",
    whatText:
      "Una página web mal optimizada en cuanto a UX/UI resulta en un mayor porcentaje de rebote lo que se traduce en ventas no realizadas o perdidas. Déjanos guiar a tus clientes para minimizar el porcentaje de rebote y maximizar el de conversión.",
  };

  return {
    props: {
      page,
    },
  };
}
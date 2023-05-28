import Layout from "../../components/layout";

import { Text, Box, Flex, Heading, VStack } from "@chakra-ui/react";

import Head from "next/head";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>ON LINE | Política de privacidad</title>
        <meta
          name="description"
          content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web"
        />
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
      <>
        <Flex
          justify="center"
          bg="brand.whiteBackground"
          alignItems="center"
          flexDirection="column"
          pt="60px"
          pb="60px"
          textAlign="justify"
        >
          <VStack w={[320, null, 720, null, 1128, null]} align="stretch">
            <Box mb="40px">
              <Heading
                as="h1"
                fontSize={["24px", null, null, null, null, null]}
                fontWeight="bold"
                color="brand.main"
                lineHeight="1"
              >
                Política de privacidad
              </Heading>
              <Heading
                as="h5"
                fontSize={["36px", null, null, null, null, null]}
                fontWeight="bold"
                color="brand.text"
                lineHeight="1"
              >
                Online.es
              </Heading>
            </Box>
            <Text fontWeight="bold">Titular de la web</Text> <br />
            <Text>
              Entidad: <br />
              CIF de la entidad: <br />
              Direccion de la entidad: <br />
              Email de la entidad: <br />
              Responsable del tratamiento: <br />
              Teléfono del Responsable del tratamiento: <br />
              Dirección email del Responsable del tratamiento: <br /> <br />
            </Text>
            <Text fontWeight="bold">
              Protección de datos de carácter personal según la LOPD
            </Text>
            <br />
            <Text>
              _____________________________, en aplicación de la normativa
              vigente en materia de protección de datos de carácter personal,
              informa que los datos personales que se recogen a través de los
              formularios del Sitio web: ________________________________, se
              incluyen en los ficheros automatizados específicos de usuarios de
              los servicios de _______________________________. <br /> <br />
              La recogida y tratamiento automatizado de los datos de carácter
              personal tiene como finalidad el mantenimiento de la relación
              comercial y el desempeño de tareas de información, formación,
              asesoramiento y otras actividades propias de
              ______________________________________. <br /> <br />
              Estos datos únicamente serán cedidos a aquellas entidades que sean
              necesarias con el único objetivo de dar cumplimiento a la
              finalidad anteriormente expuesta. <br /> <br />
              _______________________________________ adopta las medidas
              necesarias para garantizar la seguridad, integridad y
              confidencialidad de los datos conforme a lo dispuesto en el
              Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de
              27 de abril de 2016, relativo a la protección de las personas
              físicas en lo que respecta al tratamiento de datos personales y a
              la libre circulación de los mismos. <br /> <br />
              El usuario podrá en cualquier momento ejercitar los derechos de
              acceso, oposición, rectificación y cancelación reconocidos en el
              citado Reglamento (UE). El ejercicio de estos derechos puede
              realizarlo el propio usuario a través de email a:
              _________________________________ o en la dirección:
              ________________________________________ <br /> <br />
              El usuario manifiesta que todos los datos facilitados por él son
              ciertos y correctos, y se compromete a mantenerlos actualizados,
              comunicando los cambios a
              _________________________________________ <br />
            </Text>{" "}
            <br />
            <Text fontWeight="bold">
              ¿Con qué finalidad trataremos tus datos personales?
            </Text>{" "}
            <br />
            <Text>
              En __________________________________, trataremos tus datos
              personales recabados a través del Sitio Web:
              ______________________________, con las siguientes finalidades:{" "}
              <br />
              1. En caso de contratación de los bienes y servicios ofertados a
              través de ____________________________, para mantener la relación
              contractual, así como la gestión, administración, información,
              prestación y mejora del servicio. <br />
              2. Envío de información solicitada a través de los formularios
              dispuestos en ____________________________ <br />
              3. Remitir boletines (newsletters), así como comunicaciones
              comerciales de promociones y/o publicidad de
              ______________________________ y del sector. <br /> <br />
              Te recordamos que puedes oponerte al envío de comunicaciones
              comerciales por cualquier vía y en cualquier momento, remitiendo
              un correo electrónico a la dirección indicada anteriormente.{" "}
              <br />
              Los campos de dichos registros son de cumplimentación obligatoria,
              siendo imposible realizar las finalidades expresadas si no se
              aportan esos datos.
            </Text>
            <br />
            <Text fontWeight="bold">
              ¿Por cuánto tiempo se conservan los datos personales recabados?
            </Text>{" "}
            <br />
            <Text>
              Los datos personales proporcionados se conservarán mientras se
              mantenga la relación comercial o no solicites su supresión y
              durante el plazo por el cuál pudieran derivarse responsabilidades
              legales por los servicios prestados.
            </Text>
            <br />
            <Text fontWeight="bold">Legitimación:</Text> <br />
            <Text>
              El tratamiento de tus datos se realiza con las siguientes bases
              jurídicas que legitiman el mismo: <br />
              1. La solicitud de información y/o la contratación de los
              servicios de ___________________________, cuyos términos y
              condiciones se pondrán a tu disposición en todo caso, de forma
              previa a una eventual contratación. <br />
              2. El consentimiento libre, específico, informado e inequívoco, en
              tanto que te informamos poniendo a tu disposición la presente
              política de privacidad, que tras la lectura de la misma, en caso
              de estar conforme, puedes aceptar mediante una declaración o una
              clara acción afirmativa, como el marcado de una casilla dispuesta
              al efecto. En caso de que no nos facilites tus datos o lo hagas de
              forma errónea o incompleta, no podremos atender tu solicitud,
              resultando del todo imposible proporcionarte la información
              solicitada o llevar a cabo la contratación de los servicios.
            </Text>
            <br />
            <Text fontWeight="bold">¿Destinatarios:</Text> <br />
            <Text>
              Los datos no se comunicarán a ningún tercero ajeno a
              ____________________, salvo obligación legal.
            </Text>
            <br />
            <Text fontWeight="bold">
              Datos recopilados por usuarios de los servicios
            </Text>{" "}
            <br />
            <Text>
              En los casos en que el usuario incluya ficheros con datos de
              carácter personal en los servidores de alojamiento compartido,
              _______________________________________ no se hace responsable del
              incumplimiento por parte del usuario del RGPD
            </Text>
            <br />
            <Text fontWeight="bold">
              ¿Con qué finalidad trataremos tus datos personales?
            </Text>{" "}
            <br />
            <Text>
              En __________________________________, trataremos tus datos
              personales recabados a través del Sitio Web:
              ______________________________, con las siguientes finalidades:{" "}
              <br /> <br />
              1. En caso de contratación de los bienes y servicios ofertados a
              través de ____________________________, para mantener la relación
              contractual, así como la gestión, administración, información,
              prestación y mejora del servicio. <br />
              2. Envío de información solicitada a través de los formularios
              dispuestos en ____________________________ <br />
              3. Remitir boletines (newsletters), así como comunicaciones
              comerciales de promociones y/o publicidad de
              ______________________________ y del sector. <br /> <br />
              Te recordamos que puedes oponerte al envío de comunicaciones
              comerciales por cualquier vía y en cualquier momento, remitiendo
              un correo electrónico a la dirección indicada anteriormente.{" "}
              <br />
              Los campos de dichos registros son de cumplimentación obligatoria,
              siendo imposible realizar las finalidades expresadas si no se
              aportan esos datos.
            </Text>
            <br />
            <Text fontWeight="bold">
              Retención de datos en conformidad a la LSSI
            </Text>{" "}
            <br />
            <Text>
              ______________________________________ informa de que, como
              prestador de servicio de alojamiento de datos y en virtud de lo
              establecido en la Ley 34/2002 de 11 de julio de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSI),
              retiene por un periodo máximo de 12 meses la información
              imprescindible para identificar el origen de los datos alojados y
              el momento en que se inició la prestación del servicio. La
              retención de estos datos no afecta al secreto de las
              comunicaciones y sólo podrán ser utilizados en el marco de una
              investigación criminal o para la salvaguardia de la seguridad
              pública, poniéndose a disposición de los jueces y/o tribunales o
              del Ministerio que así los requiera. La comunicación de datos a
              las Fuerzas y Cuerpos del Estado se hará en virtud a lo dispuesto
              en la normativa sobre protección de datos personales.
            </Text>
            <br />
            <Text fontWeight="bold">
              ¿Con qué finalidad trataremos tus datos personales?
            </Text>{" "}
            <br />
            <Text fontWeight="bold">
              Derechos propiedad intelectual ____________
            </Text>{" "}
            <br />
            <Text>
              _________________________________ es titular de todos los derechos
              de autor, propiedad intelectual, industrial, &quot;know how&quot;
              y cuantos otros derechos guardan relación con los contenidos del
              sitio web _______________________ y los servicios ofertados en el
              mismo, así como de los programas necesarios para su implementación
              y la información relacionada. No se permite la reproducción,
              publicación y/o uso no estrictamente privado de los contenidos,
              totales o parciales, del sitio web
              __________________________________ sin el consentimiento previo y
              por escrito.
            </Text>
            <br />
            <Text fontWeight="bold">
              Propiedad intelectual del software
            </Text>{" "}
            <br />
            <Text>
              El usuario debe respetar los programas de terceros puestos a su
              disposición por ____________________________, aun siendo gratuitos
              y/o de disposición pública. __________________________ dispone de
              los derechos de explotación y propiedad intelectual necesarios del
              software. El usuario no adquiere derecho alguno o licencia por el
              servicio contratado, sobre el software necesario para la
              prestación del servicio, ni tampoco sobre la información técnica
              de seguimiento del servicio, excepción hecha de los derechos y
              licencias necesarios para el cumplimiento de los servicios
              contratados y únicamente durante la duración de los mismos. Para
              toda actuación que exceda del cumplimiento del contrato, el
              usuario necesitará autorización por escrito por parte de
              _______________________________, quedando prohibido al usuario
              acceder, modificar, visualizar la configuración, estructura y
              ficheros de los servidores propiedad de
              _______________________________, asumiendo la responsabilidad
              civil y penal derivada de cualquier incidencia que se pudiera
              producir en los servidores y sistemas de seguridad como
              consecuencia directa de una actuación negligente o maliciosa por
              su parte.
            </Text>
            <br />
            <Text fontWeight="bold">
              Propiedad intelectual de los contenidos alojados
            </Text>{" "}
            <br />
            <Text>
              Se prohíbe el uso contrario a la legislación sobre propiedad
              intelectual de los servicios prestados por
              _______________________________ y, en particular de:  <br />{" "}
              <br />
              • La utilización que resulte contraria a las leyes españolas o que
              infrinja los derechos de terceros.  <br />
              • La publicación o la transmisión de cualquier contenido que, a
              juicio de ________________________, resulte violento, obsceno,
              abusivo, ilegal, racial, xenófobo o difamatorio.  <br />
              • Los cracks, números de serie de programas o cualquier otro
              contenido que vulnere derechos de la propiedad intelectual de
              terceros.  <br />
              • La recogida y/o utilización de datos personales de otros
              usuarios sin su consentimiento expreso o contraviniendo lo
              dispuesto en Reglamento (UE) 2016/679 del Parlamento Europeo y del
              Consejo, de 27 de abril de 2016, relativo a la protección de las
              personas físicas en lo que respecta al tratamiento de datos
              personales y a la libre circulación de los mismos.  <br />
              • La utilización del servidor de correo del dominio y de las
              direcciones de correo electrónico para el envío de correo masivo
              no deseado.  <br />
              El usuario tiene toda la responsabilidad sobre el contenido de su
              web, la información transmitida y almacenada, los enlaces de
              hipertexto, las reivindicaciones de terceros y las acciones
              legales en referencia a propiedad intelectual, derechos de
              terceros y protección de menores. El usuario es responsable
              respecto a las leyes y reglamentos en vigor y las reglas que
              tienen que ver con el funcionamiento del servicio online, comercio
              electrónico, derechos de autor, mantenimiento del orden público,
              así como principios universales de uso de Internet. El usuario
              indemnizará a ___________________ por los gastos que generara la
              imputación de ______________________________ en alguna causa cuya
              responsabilidad fuera atribuible al usuario, incluidos honorarios
              y gastos de defensa jurídica, incluso en el caso de una decisión
              judicial no definitiva.
            </Text>
            <br />
            <Text fontWeight="bold">
              Protección de la información alojada
            </Text>{" "}
            <br />
            <Text>
              ____________________ realiza copias de seguridad de los contenidos
              alojados en sus servidores, sin embargo no se responsabiliza de la
              pérdida o el borrado accidental de los datos por parte de los
              usuarios. De igual manera, no garantiza la reposición total de los
              datos borrados por los usuarios, ya que los citados datos podrían
              haber sido suprimidos y/o modificados durante el periodo del
              tiempo transcurrido desde la última copia de seguridad. Los
              servicios ofertados, excepto los servicios específicos de backup,
              no incluyen la reposición de los contenidos conservados en las
              copias de seguridad realizadas por ______________________________,
              cuando esta pérdida sea imputable al usuario; en este caso, se
              determinará una tarifa acorde a la complejidad y volumen de la
              recuperación, siempre previa aceptación del usuario. La reposición
              de datos borrados sólo está incluida en el precio del servicio
              cuando la pérdida del contenido sea debida a causas atribuibles a
              ________________________________
            </Text>
            <br />
            <Text fontWeight="bold">Comunicaciones comerciales</Text> <br />
            <Text>
              En aplicación de la LSSI. _______________________________ no
              enviará comunicaciones publicitarias o promocionales por correo
              electrónico u otro medio de comunicación electrónica equivalente
              que previamente no hubieran sido solicitadas o expresamente
              autorizadas por los destinatarios de las mismas. En el caso de
              usuarios con los que exista una relación contractual previa,
              ______________________________ sí está autorizado al envío de
              comunicaciones comerciales referentes a productos o servicios de
              ____________________________ que sean similares a los que
              inicialmente fueron objeto de contratación con el cliente. En todo
              caso, el usuario, tras acreditar su identidad, podrá solicitar que
              no se le haga llegar más información comercial a través de los
              canales de Atención al Cliente.
            </Text>
            <br />
          </VStack>
        </Flex>
      </>
    </Layout>
  );
}

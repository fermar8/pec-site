import { useFormik } from "formik";
import {
  Text,
  Box,
  Button,
  FormControl,
  VisuallyHidden,
  FormLabel,
  Input,
  VStack,
  Textarea,
} from "@chakra-ui/react";

import { EmailIcon, PhoneIcon, LocationIcon } from "./icons";
import { LinkedinIcon } from "./icons/socialMedia/linkedinIcon";
import { TwitterIcon } from "./icons/socialMedia/twitterIcon";
import { useState } from "react";

export default function Footer() {
  const [showForm, setShowForm] = useState(true);
  const [afterErrorMessage, setAfterErrorMessage] = useState("");
  const [afterSuccessMessage, setAfterSuccessMessage] = useState("");
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Este campo es obligatorio";
    } else if (values.name.length > 20) {
      errors.name = "El nombre es demasiado largo";
    }

    if (!values.email) {
      errors.email = "Este campo es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "El correo electrónico no es válido";
    }
    if (!values.phone) {
      errors.phone = "Este campo es obligatorio";
    } else if (values.phone.length > 15) {
      errors.phone = "El número tiene que tener menos de 15 carácteres";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          phone: values.phone,
          company: values.company,
          message: values.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();
      if (error) {
        setShowForm(true);
        setAfterErrorMessage(
          "Ha habido un error al enviar el correo, por favor vuelve a intentarlo más tarde."
        );
        return;
      } else {
        setShowForm(false);
        setAfterErrorMessage("");
        setAfterSuccessMessage(
          "El correo se ha enviado correctamente. Le contestaremos en menos de 24 horas."
        );
        return;
      }
    },
  });

  return (
    <VStack
      minHeight="890px"
      width="100%"
      color="white"
      textAlign="center"
      justifyContent="space-around"
    >
      <VStack
        justifyContent="space-around"
        minHeight="660px"
        width="100%"
        backgroundColor="brand.beige"
        color="white"
        textAlign="center"
        overflow="hidden"
      >
        <Box mb="16px">
          <Text
            color="brand.white"
            fontSize="40px"
            lineHeight="36px"
            fontWeight="bold"
            textShadow="0 0 2px #F55951"
            mt="32px"
          >
            ¿Hablamos?
          </Text>
        </Box>
        {showForm ? (
          <form onSubmit={formik.handleSubmit}>
            <VStack
              spacing={4}
              align="flex-start"
              width={[320, null, null, null, null, null]}
            >
              <FormControl>
                <VisuallyHidden>
                  <FormLabel htmlFor="name">Nombre completo</FormLabel>
                </VisuallyHidden>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nombre completo*"
                  type="text"
                  variant="standard"
                  outlineColor="brand.lightPink"
                  sx={{
                    ":focus": {
                      outlineColor: "brand.red",
                    },
                  }}
                  color="black"
                  bg="white"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </FormControl>
              {formik.touched.name && formik.errors.name ? (
                <Box mt="8px" color="brand.red">
                  {formik.errors.name}
                </Box>
              ) : null}
              <FormControl>
                <VisuallyHidden>
                  <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                </VisuallyHidden>
                <Input
                  id="email"
                  name="email"
                  placeholder="Correo electrónico*"
                  type="email"
                  variant="standard"
                  outlineColor="brand.lightPink"
                  sx={{
                    ":focus": {
                      outlineColor: "brand.red",
                    },
                  }}
                  bg="white"
                  color="black"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </FormControl>
              {formik.touched.email && formik.errors.email ? (
                <Box mt="8px" color="brand.red">
                  {formik.errors.email}
                </Box>
              ) : null}
              <FormControl>
                <VisuallyHidden>
                  <FormLabel htmlFor="phone">Teléfono</FormLabel>
                </VisuallyHidden>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Teléfono*"
                  type="tel"
                  variant="standard"
                  outlineColor="brand.lightPink"
                  sx={{
                    ":focus": {
                      outlineColor: "brand.red",
                    },
                  }}
                  bg="white"
                  color="black"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </FormControl>
              {formik.touched.phone && formik.errors.phone ? (
                <Box mt="8px" color="brand.red">
                  {formik.errors.phone}
                </Box>
              ) : null}
              <FormControl>
                <VisuallyHidden>
                  <FormLabel htmlFor="company">Empresa</FormLabel>
                </VisuallyHidden>
                <Input
                  id="company"
                  name="company"
                  placeholder="Empresa"
                  type="text"
                  variant="standard"
                  outlineColor="brand.lightPink"
                  sx={{
                    ":focus": {
                      outlineColor: "brand.red",
                    },
                  }}
                  bg="white"
                  color="black"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                />
              </FormControl>
              <FormControl>
                <VisuallyHidden>
                  <FormLabel htmlFor="message">Escribe tu mensaje</FormLabel>
                </VisuallyHidden>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje"
                  type="text"
                  bg="white"
                  variant="standard"
                  outlineColor="brand.lightPink"
                  sx={{
                    ":focus": {
                      outlineColor: "brand.red",
                    },
                  }}
                  color="black"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
              </FormControl>
              <Button
                type="submit"
                bg="brand.red"
                color="brand.white"
                w="50%"
                h="36px"
                verticalAlign="text-bottom"
                borderRadius="999"
                sx={{
                  ":focus": {
                    bg: "brand.red",
                  },
                }}
              >
                Enviar
              </Button>
            </VStack>
          </form>
        ) : null}
          <Box color="brand.red">{afterSuccessMessage}</Box>
          <Box color="brand.red">{afterErrorMessage}</Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight={[108, 128, null, null, null, null]}
          w={[320, 440, null, null, null, null]}
        >
          <Box display="flex" alignItems="center" w="100%">
            <EmailIcon />
            <Text color="brand.black" ml="16px">
              mail@mailto.com
            </Text>
          </Box>
          <Box display="flex" alignItems="center" w="100%">
            <PhoneIcon />
            <Text color="brand.black" ml="16px">
              933237184
            </Text>
          </Box>
          <Box display="flex" alignItems="center" w="100%">
            <LocationIcon />
            <Text color="brand.black" ml="16px">
              C/ Eudald el dèbil, 2n 2a, Gelida
            </Text>
          </Box>
        </Box>
      </VStack>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        backgroundColor="brand.red"
        minHeight={[250, null, null, null, null, null]}
        w="100%"
      >
        <Box w="100%" mt="16px">
          <Text color="brand.white" ml="16px">
            Política de privacidad
          </Text>
        </Box>
        <Box w="100%">
          <Text color="brand.white" ml="16px">
            Configuración de cookies
          </Text>
        </Box>
        <Box w="100%">
          <Text color="brand.white" ml="16px">
            Términos y condiciones
          </Text>
        </Box>
        <Box w="100%">
          <Text color="brand.white" ml="16px">
            Aviso Legal
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" w="100%">
          <TwitterIcon />
          <LinkedinIcon />
        </Box>
      </Box>
    </VStack>
  );
}
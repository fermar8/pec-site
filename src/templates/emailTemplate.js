import * as React from "react";
import { Section } from "@react-email/section";
import { Column } from "@react-email/column";
// import { Text } from '@react-email/text';

export function Email(props) {
  const { name, email, phone, company, message } = props;

  return (
    <Section lang="es">
      <Column>Nombre: {name}</Column>
      <Column>Correo: {email}</Column>
      <Column>Phone: {phone}</Column>
      <Column>Company: {company}</Column>
      <Column>Message: {message}</Column>
    </Section>
  );
}

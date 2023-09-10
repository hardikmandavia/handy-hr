import { Menu, ChevronLeft } from "@styled-icons/material";

import { Container, HeaderContainer, IconContainer, TitleContainer } from "./styles";

interface Props {}

export default function Header({}: Props) {
  return (
    <Container>
      <HeaderContainer></HeaderContainer>
      {/* <TitleContainer>Header</TitleContainer> */}
    </Container>
  );
}

import { Menu, ChevronLeft } from "@styled-icons/material";

import { HeaderContainer, IconContainer, TitleContainer } from "./styles";

interface Props {
  isOpened: boolean;
  toggleDrawer: () => void;
}

export default function Header({ isOpened, toggleDrawer }: Props) {

  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
}

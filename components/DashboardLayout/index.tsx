import { useState } from "react";

import { Container, Content, PageContainer} from "./styles";

import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface Props {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDrawer = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
}

import { Typography } from "@mui/material";
import { Container, Content } from "./styled";

interface Props {
  children: React.ReactNode;
  header?: string;
  headerColor?: string;
}

const Page = ({ children, header, headerColor }: Props) => {
  return (
    <Container>
      <Content variant="outlined">
        {header && (
          <Typography
            variant="h1"
            sx={{ background: headerColor, fontSize: "20px" }}
          >
            {header}
          </Typography>
        )}
        {children}
      </Content>
    </Container>
  );
};

export default Page;

import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  position: absolute;
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98vw;
  height: 110px;
  background: #FFF;
  border-radius: 25px;
  margin: 12px;
  border-bottom: 8px solid #00A4F8;
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`

export const TitleContainer = styled.div`
  margin: auto;
`;

import styled from "styled-components";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Container = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Content = styled(Paper)`
  width: 100%;
  max-width: 85vw;
  background: #fff;
`;

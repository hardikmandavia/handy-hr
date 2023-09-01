import Header from "../Header";

import { Body } from "./styled";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

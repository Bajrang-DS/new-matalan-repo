import * as React from "react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

import Site from "../types/Site";


type Props = {
  _site: Site;
  children?: React.ReactNode;
};

const PageLayout = ({ _site, children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      {children}
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
  
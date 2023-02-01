import * as React from "react";
import Img, { Image } from "./Img";
import Header from "./header";
import Footer from "./footer";
import Site from "../types/Site";
type Props = {
    title?: string;
    _site?: any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    children,
  }: Props) => {
    // console.log(_site);
    return (
     
        <div style={{background:"white"}}  className="min-h-screen">
            <Header _site={_site} />
                {children}
            <Footer _site={_site} />
        </div>
    );
  };

export default PageLayout;
  
import * as React from "react";
// import Cta from "./cta";
import logo from "../../images/logo copy.png";
import "../../index.css";

const Header = (props: any) => {
  console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  })
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle('');
  };
  const linkDoms = props._site.c_headerLink.map((link: any) => (
    <a style={{ font: "", color: "black" }} className="navbar-item" href="#" >
      <span>{link.label}</span>
    </a>
  ));
  // console.log(linkDoms, "linkdoms");



  return (
    <>
      <div className="o-nav__container">
        <div style={{ background: "white" }} id="header" className="header-nav">

          <div className="o-nav__container pl-4 pr-4 pt-4 pb-2">


            <div className="grid grid-cols-2 gap-x-5 gap-y-5">

              <div className="logo">
                {
                  <img style={{ marginBottom: "1px" }} src={props._site.c_matalanLogo.url} />
                }

              </div>


              <div className="hidden@md-down u-pad-r-0" style={{ color: "black" }} >
                <ul className="text-right">
                  <li className="o-list__item"><a href="#">Store Finder</a>
                    <li className="o-list__item u-pad-r-0"><a href="#">Contact</a></li></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="o-nav__container">
            <nav className="navbar">
              {linkDoms}
              {/* {props._site.c_headerLink.map((res: any) => {
                        return (
                          <>
                            <a href="#" >
                             <span>{link.label}</span>
                            </a>
                          </>
                        )
                      })} */}

            </nav>
          </div>
        </div>
        </div>
      </>
      );
};

      export default Header;

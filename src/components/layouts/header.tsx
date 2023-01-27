import * as React from "react";
import Cta from "./cta";
import logo from "../../images/logo copy.png";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "WOMENS",
    url: "/",
  },
  {
    label: "LINGERIE",
    url: "#",
  },
  {
    label: "MENS",
    url: "#",
  },
  {
    label: "GIRLS",
    url: "#",
  },
  {
    label: "BOYS",
    url: "#",
  },
  {
    label: "BABY",
    url: "#",
  },
  {
    label: "HOMEWARE",
    url: "#",
  },
  {
    label: "SCHOOL UNIFORM",
    url: "#",
  },
  {
    label: "BRANDS",
    url: "#",
  },
  {
    label: "TRENDING",
    url: "#",
  },
  {
    label: "SALE",
    url: "#",
  }
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <a style={{ color: "black" }} className="navbar-item" href={link.url} >
      <span>{link.label}</span>
    </a>
  ));

  return (
    <>
      <div className="o-nav__container">
        <div style={{ background: "white" }} id="header" className="header-nav">

          <div className="o-nav__container pl-4 pr-4 pt-4 pb-2">


            {/* <div className="header-content-middle">
              <a className="logo" href="/">
                <img className="" src={logo} alt="matalan" />
              </a>
            </div> */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            <div className="col-2@lg o-header__brand">
              <a className="o-header__brand__logo" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="232" height="96" viewBox="0 0 232 96">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#AD1E1F" d="M0 96h232V0H0z"></path>
                    <path fill="#FFF" fill-rule="nonzero" d="M11.25 93.503v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0zm0-12v-6a.75.75 0 1 0-1.5 0v6a.75.75 0 1 0 1.5 0z"></path>
                    <g fill="#FEFEFE">
                      <path d="M184.573 63.63l-3.307 4.527-3.32-4.528h-.983l3.86 5.32v2.92h.886v-2.926l3.848-5.314zM174.933 67.674c0 1.997-1.427 3.34-3.551 3.34h-2.487v-6.546h2.487c2.124 0 3.551 1.288 3.551 3.206m-3.445-4.065h-3.477v8.263h3.477c2.522 0 4.353-1.762 4.353-4.19 0-2.36-1.83-4.073-4.353-4.073M162.765 68.458h-3.619l1.81-3.6 1.809 3.6zm-1.277-4.831h-.861l-4.17 8.245 1.048-.002 1.33-2.604h4.446l1.33 2.604 1.048.002-4.17-8.245zM154.613 64.435v-.808h-6.27v8.244h6.27v-.808h-5.384v-2.91h4.782v-.808h-4.782v-2.91zM144.096 66.256c0 1.074-.908 1.795-2.26 1.795h-2.725v-3.579h2.726c1.351 0 2.259.717 2.259 1.784zm-1.213 2.534l.01-.003c1.328-.313 2.121-1.26 2.121-2.531 0-1.605-1.237-2.641-3.153-2.641h-3.636v8.256h.886v-2.962h2.702l2.646 2.962h1.171l-2.747-3.081zM128.737 64.435v-.808h-6.27v8.244h6.27v-.808h-5.384v-2.91h4.782v-.808h-4.782v-2.91zM113.7 63.627v8.244h.887v-3.544h4.882v-.807h-4.882v-3.085h5.384v-.808zM109.063 71.87h.886v-8.243h-.886zM100.517 63.627v8.244h5.9v-.808h-5.015v-7.436zM86.435 63.627v8.244h5.9v-.808h-5.014v-7.436zM78.98 63.627l-4.171 8.245 1.048-.002 1.33-2.604h4.446l1.33 2.604 1.048.002-4.17-8.245h-.862zm.43 1.23l1.81 3.6H77.6l1.81-3.6zM66.695 63.627v8.244h6.27v-.808h-5.384v-2.91h4.783v-.808H67.58v-2.91h5.384v-.808zM62.55 66.256c0 1.074-.907 1.795-2.259 1.795h-2.726v-3.579h2.726c1.352 0 2.26.717 2.26 1.784zm-1.212 2.534l.01-.003c1.328-.313 2.12-1.26 2.12-2.531 0-1.605-1.237-2.641-3.152-2.641H56.68v8.256h.885v-2.962h2.702l2.647 2.962h1.17l-2.746-3.08z"></path>
                    </g>
                    <g fill="#FEFEFE">
                      <path d="M202.883 25.15v20l-17.81-20.004-2.68.003v23.42h2.354V28.566l17.73 19.926.066.073 2.693.004v-23.42zM172.138 38.978H161.48l5.328-10.603 5.329 10.603zm-4.09-13.712l-.061-.12h-2.355L153.784 48.57l2.798-.005 3.807-7.456h12.841l3.807 7.456 2.798.005-11.788-23.304zM136.866 46.439v-21.29h-2.353v23.42h16.712v-2.13zM124.257 38.978H113.6l5.329-10.603 5.328 10.603zm-4.09-13.712l-.061-.12h-2.355L105.903 48.57l2.799-.005 3.806-7.456h12.842l3.806 7.456 2.798.005-11.787-23.304zM91.446 25.15v2.13h8.26v21.289h2.354v-21.29h8.261v-2.13zM88.176 38.978H77.52l5.329-10.603 5.328 10.603zm-4.033-13.599l-.118-.233H81.67L69.822 48.57l2.799-.005 3.806-7.456h12.842l3.806 7.456 2.798.005-11.73-23.19zM64.104 25.15h-2.908l-9.064 19.895-9.064-19.896H40.16L37 48.57h2.5l2.634-19.608 8.893 19.61h2.21l8.893-19.61 2.634 19.608h2.5z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              

            </div>
            <div style={{ color: "black" }} className="container">
              <ul className="text-right">
                <li className="o-list__item"><a href="#">Store Finder</a>
                  <li className="o-list__item u-pad-r-0"><a href="#">Contact</a></li></li>
              </ul>
            </div>
            </div>

            {/* <div className="header-content-left">
            <a className="button" href="#">
              <span className="is-hidden-touch">Find a restaurant</span></a>
            <a className="button" href="#" title="Book now">Book now</a>
          </div> */}

            {/* <div className="header-content-right lg:hidden">
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div> */}
          </div>
          <div className="o-nav__container">
            <nav className="navbar">
              {linkDoms}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

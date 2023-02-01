import * as React from "react";
import "../index.css";
import { GetPath, Template, TemplateProps, TemplateRenderProps, TemplateConfig, GetHeadConfig,
  HeadConfig } from "@yext/pages";
import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {  AnswerExperienceConfig  } from "../config/globalConfig";
 import Header from "../components/layouts/header";
 import Footer from "../components/layouts/footer";
 import Site from "../types/Site";
export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};


// export const config: TemplateConfig = {
//   stream: {
//     $id: "locatorSearch",
//     localization: {
//       locales: ["en_GB"],
//       primary: false,
//     },
//     filter: {},
//     fields: []
//   },
// };
export const config: TemplateConfig = {
  stream: {
    $id: "locator-data",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      
      "name",
      "c_matalanLogo",
      "c_headerLink",
      "c_description",
      "c_socials",
      "c_footerLogo",
      "c_customerServices",
      "c_aboutMatalan",
      "c_ourWebsites",
      "c_appSectionText",
      "c_appIcons",
      "c_faqs"

    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["gd-1"] ,
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
         
        },
      },
    ],
  };
};
const providerOptions: google.maps.MapOptions = {
  disableDefaultUI: true
}

const locatorSearch: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
 
  document,
}) => {
  const {
    _site
  } = document;
console.log("site",_site)


return (
    <>
    <div>
  <PageLayout _site={_site} >
  
        <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}               
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion={AnswerExperienceConfig.experienceVersion}
            sessionTrackingEnabled={AnswerExperienceConfig.sessionTrackingEnabled}  
            endpoints={AnswerExperienceConfig.endpoints}         
        >
           <SearchLayout/>           
        </SearchHeadlessProvider>  
       
        </PageLayout >
        </div>
    </>
  );
};

export default locatorSearch;
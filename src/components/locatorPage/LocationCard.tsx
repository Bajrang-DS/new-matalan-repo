import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
// import phonePin from "..//../images/phone.svg";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
import GetDirection from "../commons/GetDirection";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}



const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, hours, mainPhone, timezone,distance } = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }
console.log(result);
  return (


    <div style={{background:"white"}} className={`location result`} id={`result-${result.index}`}>
      <div style={{color:"green"  }}className="text-right">{metersToMiles(result.distance)} miles</div> 
      <div className="grid grid-cols-2 py-4" >

      
        {/* <h3 className="">{result.rawData.name}
      </h3> */}
       <div >
        <a
          target={"_blank"}
          href={result.rawData.slug}
          className="font-semibold text-orange"
          rel="noreferrer"
        >
         <span style={{color:"#f5821f"}}>{result.rawData.name}</span> 

        </a>
        <Address address={address} />
        <span style={{ color: "green" }}>Contact:</span><a className="number_col" style={{ color: "black" }} href="">{mainPhone}</a>

      </div>
      <div >
  
        <div>
        <button><a
          target={"_blank"}
          className="flex flex-col items-center text-sm text-orange"
        >

<GetDirection latitude={result?.rawData?.yextDisplayCoordinate?.latitude} longitude={result?.rawData?.yextDisplayCoordinate?.longitude}/>

        </a></button></div>
        <div className="centered-container">
        <button >
        <a
          
          className="btn btn-primary" 
          href={result.rawData.slug}
        ><span style={{color:"blue"}}>View Details</span> </a>
        </button></div>
      </div>
      </div>
     
      </div>
  );
}

export default LocationCard;
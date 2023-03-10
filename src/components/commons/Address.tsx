import * as React from "react";
import Mapicon from "../../images/pin.svg"; 

const Address = (props: any) => {  
    const { address } = props; 
  return (
    <>
      <div className="icon-row location-address"> 
        <div>{address.line1}</div>
            {address.line2 && (<div>{address.line2}</div>)}
            <div>{address.city}, {address.postalCode},  </div>
            <div> {address.region}</div>       
      </div>
    </>
  );
};

export default Address;

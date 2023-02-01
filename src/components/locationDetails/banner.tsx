import * as React from "react";
import Address from "../commons/Address";
import hours from "../commons/hours";
import OpenCloseStatus from "../commons/OpenCloseStatus";
import GetDirection from "../commons/GetDirection";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';

type Banner = {
  name?: string;
  address?: any;
  hoursData?: any;
  timezone?: any;
  mainPhone?: any;
  latitude?: any;
  longitude?: any;
  children?: React.ReactNode;
};

const Banner = (props: Banner) => {
  const {
    name,
    address,
    hoursData,
    timezone,
    mainPhone,
    latitude,
    longitude,
    children
  } = props;

  const formattedPhone = formatPhoneNumber(mainPhone);

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-72  `}
      >
        <div className="absolute left-10 right-10 flex flex-col items-center ">
          <div className="w-96 my-8 rounded-xl bg-green-500 border-8 shadow-xl border-amber-600 px-4 py-2 text-center">
            <div>
              <h1 className="text-black text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2 text-black font-semibold">
                <Address address={address}></Address>
              </p>
            </div>
            <div className="centered-container">
              <div><OpenCloseStatus timezone={timezone} hours={hoursData}></OpenCloseStatus></div>
              {/* <h1 style={{ color: "white" }}> "Welcome In Our World"</h1> */}
              {/* <Cta
                buttonText="Order Pickup"
                url="#"
                style="text-orange bg-white shadow-xl"
              ></Cta>
              <Cta
                buttonText="Order Delivery"
                url="#"
                style="text-orange bg-white shadow-xl"
              ></Cta> */}
            </div>
            {/* <div>
              <GetDirection buttonText={"View on google maps"} latitude={latitude}
                longitude={longitude} ></GetDirection>
            </div>
            {children} */}
          </div>
        </div>

        {/* <div className="w-60 my-8 rounded-xl bg-amber-500 border-8 shadow-xl border-amber-600 px-4 py-2 text-center">
            <button><a className="text-white text-3xl font-semibold" href="">Order Now</a></button>
          </div> */}
      </div>
   
    </>
  );
};

export default Banner;

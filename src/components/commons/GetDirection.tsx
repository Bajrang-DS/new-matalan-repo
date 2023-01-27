import * as React from "react";
import { RiDirectionFill } from "react-icons/ri";

type Cta = {
  buttonText: string;
  latitude?: number;
  longitude?: number;
};

const GetDirection = (props: GetDirection) => {
  const { 
    buttonText, 
    latitude,
    longitude 
  } = props;
  
  const GetDirectionUrl = () => { 
  
	if (navigator.geolocation) {
		const error = () => {		
		  var message_string = 'Unable to determine your location. please share your location';	
		  if (confirm(message_string) != true) {
			var getDirectionUrl = 'https://www.google.com/maps/dir/?api=1&destination='+latitude+','+longitude;	
			window.open(getDirectionUrl, '_blank');
		  }else{
			  return false;
		  } 		
		}		
		navigator.geolocation.getCurrentPosition(  function(position){			
			let currentLatitude = position.coords.latitude;
			let currentLongitude = position.coords.longitude;
			let getDirectionUrl = 'https://www.google.com/maps/dir/?api=1&destination='+latitude+','+longitude+'&origin='+currentLatitude+','+currentLongitude;		
			window.open(getDirectionUrl, '_blank');		
		}, error, {
			timeout: 10000,
		});
	};	
  }

  return (
	<div className="flex flex-col items-center text-sm text-orange">
    <button><a
	target={"_blank"}
	className="flex items-center"
	onClick={GetDirectionUrl}>
		 <RiDirectionFill size={30} />
     <p>GetDirection</p> 
    </a></button></div>
  );
};

export default GetDirection;

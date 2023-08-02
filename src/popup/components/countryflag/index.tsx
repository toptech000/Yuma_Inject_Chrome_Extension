import { CountryFlagPropsType } from "@/utils/types/countryflag";
import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function CountryFlag({countryCode}: CountryFlagPropsType) {
  return (
    <ReactCountryFlag 
      style={{
        width: '24px',
        height: '18px',
        borderRadius: '2px',
      }}
      svg={true} 
      countryCode={countryCode}
    />
  );
}
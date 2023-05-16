import React from "react";
import WhichMacColumn from "./WhichMacColumn";
export default function MacWhichMac({name,img}) {
  return (
    <div className="which--mac--parent">
      <div className="Which--mac--left--card">
        <WhichMacColumn name={name} img={img}/>
        <WhichMacColumn name={name} img={img}/>
      </div>
      <div className="Which--mac--right--card">
        <WhichMacColumn name={name} img={img}/>
        <WhichMacColumn name={name} img={img}/>
      </div>
    </div>
  );
}

import ChangebleSection from "./ChangebleSection";
import ChangableSectionData from "./ChangableSectionData";
import ChangableSectionData2 from "./ChangableSectionData2";
export default function WhatMakesMacParent({
  title,
  description,
  title1,
  description1
}) {
  const firstComponent = ChangableSectionData.map((data) => {
    return (
      <ChangebleSection
        key={data.id}
        nav1Name1={data.nav1Name1}
        nav1Name2={data.nav1Name2}
        nav1Name3={data.nav1Name3}
        nav1Name4={data.nav1Name4}
        nav1Name5={data.nav1Name5}
        nav1Name6={data.nav1Name6}
        nav1Name7={data.nav1Name7}
        nav1Icon1={data.nav1Icon1}
        nav1Icon2={data.nav1Icon2}
        nav1Icon3={data.nav1Icon3}
        nav1Icon4={data.nav1Icon4}
        nav1Icon5={data.nav1Icon5}
        nav1Icon6={data.nav1Icon6}
        nav1Icon7={data.nav1Icon7}
        nav1activeDef1={data.nav1activeDef1}
        nav1activeDef2={data.nav1activeDef2}
        nav1activeDef3={data.nav1activeDef3}
        nav1activeDef4={data.nav1activeDef4}
        nav1activeDef5={data.nav1activeDef5}
        nav1activeDef6={data.nav1activeDef6}
        nav1activeDef7={data.nav1activeDef7}
        nav1activeImg1={data.nav1activeImg1}
        nav1activeImg2={data.nav1activeImg2}
        nav1activeImg3={data.nav1activeImg3}
        nav1activeImg4={data.nav1activeImg4}
        nav1activeImg5={data.nav1activeImg5}
        nav1activeImg6={data.nav1activeImg6}
        nav1activeImg7={data.nav1activeImg7}
      />
    );
  });


  const secondComponent = ChangableSectionData2.map((data) => {
    return (
      <ChangebleSection
        key={data.id}
        nav1Name1={data.nav2Name1}
        nav1Name2={data.nav2Name2}
        nav1Name3={data.nav2Name3}
        nav1Name4={data.nav2Name4}
        nav1Name5={data.nav2Name5}
        nav1Icon1={data.nav2Icon1}
        nav1Icon2={data.nav2Icon2}
        nav1Icon3={data.nav2Icon3}
        nav1Icon4={data.nav2Icon4}
        nav1Icon5={data.nav2Icon5}
        nav1activeDef1={data.nav2activeDef1}
        nav1activeDef2={data.nav2activeDef2}
        nav1activeDef3={data.nav2activeDef3}
        nav1activeDef4={data.nav2activeDef4}
        nav1activeDef5={data.nav2activeDef5}
        nav1activeImg1={data.nav2activeImg1}
        nav1activeImg2={data.nav2activeImg2}
        nav1activeImg3={data.nav2activeImg3}
        nav1activeImg4={data.nav2activeImg4}
        nav1activeImg5={data.nav2activeImg5}
      />
    );
  });
  return (
    <div className="what--makes--mac--parent--card">
      <div className="title">
        {title && <h2>{title}</h2>}
        {description && <p className="new-line">{description}</p>}
      </div>
      {firstComponent}
      <div className="title">
        {title && <h2>{title1}</h2>}
        {description && <p className="new-line">{description1}</p>}
      </div>
      {secondComponent}
    </div>
  );
}

import WhichMacDetail from "./WhichMacDetail";
import WhichMacDevice from "./WhichMacDevice";
import WhichMacDetailData from "./WhichMacDetailData";

export default function WhichMacColumn({name,img}) {
  const WhichMacDetailFetched = WhichMacDetailData.map((data) => {
    return (
      <WhichMacDetail
        key={data.id}
        topNumber={data.topNumber}
        bottom={data.bottom}
        img={data.topImage}
        upto={data.upTo}
        voluemCapacity={data.voluemCapacity}
        type={data.type}
        specialAudio={data.specialAudio}
      />
    );
  });

  return (
    <div className="which--mac--column--container">
    <div className="which--mac--left">
      <WhichMacDevice name={name} img={img}/>
      {WhichMacDetailFetched}
      </div>
      
    </div>
  );
}

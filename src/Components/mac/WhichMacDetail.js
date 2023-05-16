import React from "react";

export default function WhichMacDetail({
  key,
  img,
  topNumber,
  bottom,
  type,
  specialAudio,
}) {
  return (
    <div className="which--mac--detail--card" key={key}>
      {img && <img src={img} alt="" />}
      {topNumber && <p className="which--mac--number">{topNumber}</p>}
      {bottom && <p className="which--mac--description">{bottom}</p>}
      {type && <p className="which--mac--type">{type}</p>}
      {specialAudio && (
        <p className="which--mac--audio--text">{specialAudio}</p>
      )}
    </div>
  );
}

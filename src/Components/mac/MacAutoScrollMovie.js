import { Link } from "react-router-dom";

export default function MacAutoScrollMovie({ img1, img2, img3, img4, img5 }) {
  return (
    <div className="mac--auto--scrool--movie--card">
      <div className="slide--one">
        <span>
          <img src={img1} alt="" />
        </span>

        <span>
          <img src={img2} alt="" />
        </span>

        <span>
          <img src={img3} alt="" />
        </span>

        <span>
          <img src={img4} alt="" />
        </span>

        <span>
          <img src={img5} alt="" />
        </span>
      </div>
      <div className="slide--one">
        <span>
          <img src={img1} alt="" />
        </span>

        <span>
          <img src={img2} alt="" />
        </span>

        <span>
          <img src={img3} alt="" />
        </span>

        <span>
          <img src={img4} alt="" />
        </span>

        <span>
          <img src={img5} alt="" />
        </span>
      </div>
    </div>
  );
}

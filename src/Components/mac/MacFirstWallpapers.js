import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function MacFirstWallpapers({
  key,
  status,
  title,
  description,
  price,
  buyButton,
  watchButton,
  link,
  img,
}) {
  let arrow = ">";
  return (
    <div className="mac--first--wallpaper--card" key={key}>
      <div className="mac--first--wallpaper--text">
        {status && <p className="status">{status}</p>}
        {title && <h2>{title}</h2>}
        {title && <h3 className="description">{description}</h3>}
        {price && <p className="price">{price}</p>}
        <div className="mac--first--wallpaper--button">
          {buyButton && <button className="buy--button">buy</button>}
          {watchButton && (
            <button className="watch--button">
              Watch the accouncemetn <PlayCircleIcon />
            </button>
          )}
          {link && (
            <Link to="https://www.apple.com/macbook-pro-14-and-16/">
              Learn more {arrow}
            </Link>
          )}
        </div>
      </div>
      {img && <img src={img} alt="" />}

    </div>
  );
}

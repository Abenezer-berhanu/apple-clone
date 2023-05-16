import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Link } from "react-router-dom";
export default function MacSecondWallpaper({
  color,
  information,
  title,
  description,
  watchFilmLink,
  learnLink,
  shopButoon,
  tradeLink,
  img
}) {
  const arrow = ">";
  return (
    <div>
    {!color && <div className="mac--second--wallpaper--card">
      <div className="text">
        {information && <h4>{information}</h4>}
        {title && <h2 className="new-line title">{title}</h2>}
        {description && <p className="new-line description">{description}</p>}
        {watchFilmLink && (
          <p className="mac--watch--film--button">
            watch the film <PlayCircleIcon />
          </p>
        )}
        {learnLink && (
          <Link to="https://www.apple.com">Learn more {arrow}</Link>
        )}
        {shopButoon && <button>Buy</button>}
        {tradeLink && (
          <Link to="https://www.apple.com">
            Find your trade‑in value {arrow}
          </Link>
        )}
      </div>
      <img src={img} alt="" />
    </div>}
    {color && <div className="mac--second--wallpaper--card--dark">
      <div className="text">
        {information && <h4>{information}</h4>}
        {title && <h2 className="new-line title">{title}</h2>}
        {description && <p className="new-line description">{description}</p>}
        {watchFilmLink && (
          <p className="mac--watch--film--button">
            watch the film <PlayCircleIcon />
          </p>
        )}
        {learnLink && (
          <Link to="https://www.apple.com">Learn more {arrow}</Link>
        )}
        {shopButoon && <button>Buy</button>}
        {tradeLink && (
          <Link to="https://www.apple.com">
            Find your trade‑in value {arrow}
          </Link>
        )}
      </div>
      <img src={img} alt="" />
    </div>}
    </div>
  );
}

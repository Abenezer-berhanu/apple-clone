import React from "react";
import SearchIcon from '@mui/icons-material/Search';


export default function Search() {
  return (
    <div className="accessorie--search">
      <h2>Find the accessories for you're looking for</h2>
      <div className="icon--search--container">
        <div className="icon">
        <SearchIcon sx={{fontSize:35}}/>
        </div>
        <input type="text" />
      </div>
    </div>
  );
}

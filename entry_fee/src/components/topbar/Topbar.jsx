import "./topbar.css";
import { Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarlinks">
          <span className="topbarLink active">Entry Fee</span>
        </div>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search here..." type="search" className="searchInput"
          />
        </div>
      </div>
    </div>
  );
}

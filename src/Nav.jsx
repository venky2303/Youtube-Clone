import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const handleSearchInput = (event) => {
    const searchValue = event.target.value;

    switch (searchValue) {
      case "Music":
        navigate("/Button");
        break;
      case "Sports":
        navigate("/Sports");
        break;
      case "Gaming":
        navigate("/Gaming");
        break;
      case "Movies":
        navigate("/Movies");
        break;
      case "Trending":
        navigate("/Button");
        break;
      case "Vlogs":
        navigate("/vlogs");
        break;
      case "Fashion & Beauty":
        navigate("/fashion");
        break;
      case "News":
        navigate("/News");
        break;
      default:
        break;
    }
  };

  // const switchOn = (e) => {
  //   e.preventDefault();
  //   if (e.target.checked) {
  //     document.body.style.backgroundColor = "black";
  //     document.body.style.color="white";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color="black";
  //   }
  // };

  return (
    <>
      <nav className="navbar fixed-top bg-white">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <Link className="navbar-brand fs-4 mx-4 fw-bold" to="/">
            <img
              width={40}
              height={40}
              className="mx-1"
              src="https://cdn-icons-png.flaticon.com/128/174/174883.png"
              alt=""
            />
            YouTube
          </Link>

          {/* Datalist Search Bar */}
          <div className="d-flex flex-grow-1 mx-3">
            <input
              name="searchInput"
              className="form-control me-2"
              list="searchSuggestions"
              placeholder="Search videos, music, trends..."
              onInput={handleSearchInput}
            />
            <datalist id="searchSuggestions">
              <option value="Music" />
              <option value="Sports" />
              <option value="Gaming" />
              <option value="Movies" />
              <option value="Trending" />
              <option value="Vlogs" />
              <option value="Fashion & Beauty" />
              <option value="News" />
            </datalist>
          </div>

          {/* Toggle Switch
          <div className="form-check form-switch d-sm-block">
              <input className="form-check-input p-2 " type="checkbox" onChange={(e) => switchOn(e)} />
              <label className="form-check-label" htmlFor="darkModeSwitch">
          </label>
          </div> */}

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Sidebar */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link className="lis" to="/">
                <h5 className="offcanvas-title mt-1 fw-bold" id="offcanvasNavbarLabel">
                  <img
                    width={35}
                    height={35}
                    className="mx-1"
                    src="https://cdn-icons-png.flaticon.com/128/174/174883.png"
                    alt=""
                  />
                  YouTube
                </h5>
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-start">
              <ul className="navbar-nav">
                <li className="nav-item lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;Home
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/Shorts" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-bolt"></i>&nbsp;&nbsp;&nbsp;Shorts
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-file"></i>&nbsp;&nbsp;&nbsp;Subscriptions
                  </Link>
                </li>
                <hr />
                <h1 className="fs-4 fw-bold">Your Profile</h1>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-address-card"></i>&nbsp;&nbsp;&nbsp;Your
                    Channel
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-clock-rotate-left"></i>&nbsp;&nbsp;&nbsp;History
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-list"></i>&nbsp;&nbsp;&nbsp;Playlists
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-video"></i>&nbsp;&nbsp;&nbsp;Your Videos
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-folder"></i>&nbsp;&nbsp;&nbsp;Your
                    Courses
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-share-from-square"></i>&nbsp;&nbsp;&nbsp;Watch
                    Later
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-sharp fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;Liked
                    Videos
                  </Link>
                </li>
                <hr />
                <h1 className="fs-4 fw-bold">Explore</h1>
                <li className="nav-item mt-2 lis2">
                  <Link to="/Button" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-fire"></i>&nbsp;&nbsp;&nbsp;Trending
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;&nbsp;Shopping
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/Music" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-music"></i>&nbsp;&nbsp;&nbsp;Music
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/Sports" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-baseball"></i>&nbsp;&nbsp;&nbsp;Sports
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/Movies" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-film"></i>&nbsp;&nbsp;&nbsp;Movies
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/Gaming" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-gamepad"></i>&nbsp;&nbsp;&nbsp;Games
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/News" className="fw-semibold fs-5 lis">
                    <i className="fa-regular fa-newspaper"></i>&nbsp;&nbsp;&nbsp;News
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-folder-plus"></i>&nbsp;&nbsp;&nbsp;Courses
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-brands fa-vimeo-v"></i>&nbsp;&nbsp;&nbsp;Vlogs
                  </Link>
                </li>
                <li className="nav-item mt-2 lis2">
                  <Link to="/" className="fw-semibold fs-5 lis">
                    <i className="fa-solid fa-shirt"></i>&nbsp;&nbsp;&nbsp;Fashion &
                    Beauty
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav
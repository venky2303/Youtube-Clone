import {Link} from "react-router-dom"
function Option(){
    return(
        <>
        {/* Options list start */}
      <div className="container-fluid h11">
        <div className="row ">
          <div className="d-flex gap-3 scr" >
          <Link to="/News" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">News</Link>
          <Link to="/Sports" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Sports</Link>
          <Link to="/Button" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Music</Link>
          <Link to="/Movies" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Movies</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Fashion</Link>
          <Link to="/Shorts" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Shows</Link>
          <Link to="/Gaming" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Gaming</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Concerts</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Live</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Standup</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Comedy</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Country</Link>
          <Link className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Thrillers</Link>
          <Link to="/Gaming" className="btn btn-grey border border-dark p-1 px-4 fw-semibold lin">Gaming</Link>
          </div>
        </div>
      </div>
    {/* Options lis end */}
        </>
    )
}
export default Option
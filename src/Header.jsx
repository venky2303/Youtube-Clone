import Nav from './Nav'
import Option from './Option'
const Header = () => {
  
  return (
    <>
      <Nav/>
      <Option/>
      
    {/* Content start */}
      <div className="container-fluid mt-3 " style={{overflowY:"auto"}}>
        {/* first row */}
        <div className="row mt-3">
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/JOwwUJfZcLQ?si=8h3W49ei9IXNgyMs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }}  src="https://www.youtube.com/embed/8RAd-_Qj_ac?si=GPw0Iyb-WaEulyr_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/IzrzRDVWR44?si=_6GWQObmIHTNGg9H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/cL816MjWHq8?si=N3RF5nV4fbVuWtzQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
        {/* second row */}
        <div className="row mt-4">
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/vrDPrtsq-_0?si=cR55rCgbAZXZZ_KV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/kArnh6zrfvI?si=Gwbu6Z_WkXrWBiOE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/IO-xNqAOnRI?si=eM77pjPqciU2V7xW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/7SUTGf4h6jE?si=3kOMePooKkeTh6s6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> </div>
        </div>
        {/* Third row */}
        <div className="row mt-4">
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }}  src="https://www.youtube.com/embed/fWyB5t-Lveg?si=eVpuWvQfYoFIRP0G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }}  src="https://www.youtube.com/embed/oH-txHzE4jA?si=tyqmif-P-etEsrcO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }}  src="https://www.youtube.com/embed/egpUFD0HOqI?si=H8lk2UHTvV9I5P_U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-md-3">
          <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/P_sGABhF7Sk?si=d9Z5PMhCzeWPhMcB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header;
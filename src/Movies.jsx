import Nav from './Nav'
function Movies(){
    return(
        <>
        <Nav/>
        <div className="container-fluid mt-5">
            {/* First row */}
            <div className="row">
                <div className="col-md-4 mt-5">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/qyRn3rPRw8w?si=QEVjTMkdiHcph3Ap" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Baby John - Trailer | Atlee | Varun Dhawan, Keerthy Suresh, Wamiqa G, Jackie Shroff | 25th Dec</h5>
                </div>
                <div className="col-md-4 mt-5">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/_qC4mq13crc?si=FEG_pYRg990il-k8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Fateh | Official Trailer l Sonu Sood | Jacqueline Fernandez | In Cinemas 10th January</h5>
                </div>
                <div className="col-md-4 mt-5">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/yE560j3AK3A?si=LgOkQ0WrVHeRhdF3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">RETRO - Title Teaser | Suriya | Karthik Subbaraj | Pooja Hegde | Santhosh Narayanan</h5>
                </div>
            </div>
            {/* Second row */}
            <div className="row mt-3">
                <div className="col-md-4 ">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/zKHvaG-XXOc?si=mlZ8z2MBNMZogFi5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">JAAT Teaser | Sunny Deol | Randeep Hooda | Vineet Kumar Singh | Gopichandh Malineni | Thaman S</h5>
                </div>
                <div className="col-md-4 ">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/Kx25iBtjwMo?si=Rh2eiGoHCMwqswPQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Sonu Model - Song Promo | Laila | Vishwak Sen | Akanksha Sharma | Ram Narayan | Leon James</h5>
                </div>
                <div className="col-md-4 ">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/l2AMaPCsJIQ?si=rAktXwR1XXj60-WH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">SIKANDAR: Official Teaser | Salman Khan | Sajid Nadiadwala | A.R. Murugadoss | EID 2025</h5>
                </div>
            </div>
        </div>

        </>
    )
}
export default Movies;
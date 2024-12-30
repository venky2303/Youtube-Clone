import Nav from './Nav'
function Sports(){
    return (
        <>
        <Nav/>
        <div className="container-fluid mt-5">
            {/* First Row */}
            <div className="row">
                <div className="col-md-4 mt-4">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/CdvGPoKJmsQ?si=xhiXb1PGzrq68ds5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Australia v India 2024-25 | Fourth Test | Day Three</h5>
                </div>
                <div className="col-md-4 mt-4">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/qXMpokWtxls?si=cR6Bv765W72tS8b3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Australia v India 2024-25 | Fourth Test | Day Two
                </h5>
                </div>
                <div className="col-md-4 mt-4">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/ixIUmYQG7pM?si=rAu6P4S-CHKfTzvn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">INDvsAUS: Nitish Reddy gives India a breather, sends clear cut {'jhukega nahi'} message to Aus at MCG</h5>
                </div>
            </div>
            {/* Second row */}
            <div className="row">
                <div className="col-md-4 mt-4">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/dFPyoqjGTW8?si=3SZHa_04bw_bF6WV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Haaland Denied as Manchester City Drop Points Against Everton</h5>
                </div>
                <div className="col-md-4 mt-4">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/LHg0IhDh82s?si=rQbb2-0DWMBdzktr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Kohli collision with Konstas {'totally unnecessary'} says Ravi Shastri | Australia v India 2024-25
                </h5>
                </div>
                <div className="col-md-4 mt-4">
                <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/POdQQLvrFrE?si=lLRAbdOZxSxt-NIq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="mt-2">Match Highlights - Wellington Phoenix v Newcastle Jets</h5>
                </div>
            </div>

        </div>
        </>
    )
}
export default Sports;
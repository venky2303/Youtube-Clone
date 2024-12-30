import Nav from './Nav'
function Shorts() {
    return (
        <>
            <Nav />
            <div className="container mt-5" style={{ overflowY: "scroll",scrollbarWidth:'none', maxHeight: "800px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 d-flex flex-column align-items-center">
                        {/* frist video */}
                        <iframe
                            className="rounded-3 mb-4 mt-4"
                            style={{ height: "450px", width: "450px" }}
                            src="https://www.youtube.com/embed/adtPRvkux34"
                            title="YouTube Shorts video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        {/* seccond video */}
                        <iframe
                            className="rounded-3 mb-4"
                            style={{ height: "450px", width: "450px" }}
                            src="https://www.youtube.com/embed/fWyB5t-Lveg"
                            title="YouTube Shorts video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        {/* Third video */}
                        <iframe
                            className="rounded-3 mb-4"
                            style={{ height: "450px", width: "450px" }}
                            src=" https://www.youtube.com/embed/zOiIzLXihbg"
                            title="YouTube Shorts video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        {/* Fourth video */}
                        <iframe
                            className="rounded-3 mb-4"
                            style={{ height: "450px", width: "450px" }}
                            src=" https://www.youtube.com/embed/TWfDTFC11bY"
                            title="YouTube Shorts video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Shorts
import Nav from './Nav'

const Button = () => {
  return (
   <>
   <Nav/>
   <div className='mt-5 container-fluid' style={{ overflowY: "auto" }}>
    {/* first row */}
    <div className="row">
      <div className="col-md-4 mt-5">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }}  src="https://www.youtube.com/embed/DDBUrQ8bdlc?si=WE3Be86yDOUuBkQW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Bujji Thalli Lyrical | Thandel |Naga Chaitanya, Sai Pallavi | Javed Ali |Shree Mani |Devi Sri Prasad</h5>
      </div>
      <div className="col-md-4 mt-5">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }}  src="https://www.youtube.com/embed/8RAd-_Qj_ac?si=dRkh3rvuZ6B9yjlU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>PEELINGS (Telugu Lyrical Video) | Pushpa 2 The Rule | Allu Arjun | Rashmika Mandanna | Sukumar | DSP</h5>
      </div>
      <div className="col-md-4 mt-5">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/rK7ws-wB770?si=rEnH_NEMZz-teUpj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Gango Renuka Thalli (Jathara) Lyrical | Pushpa 2 The Rule | Allu Arjun | Rashmika | Sukumar | DSP</h5>
      </div>
    </div>
    {/*second row  */}
    <div className="row  mt-4">
      <div className="col-md-4 ">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/EqDlrimnMCE?si=T_9ut87p0LuP1zbD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>NaaNaa Hyraanaa | Game Changer | Ram Charan, Kiara | Shreya Ghoshal, Karthik | Thaman S | Shankar
      </h5>
      </div>
      <div className="col-md-4">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/IblKu85jHf0?si=5errga-Bjx1PjxjI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Devara Thandavam | NTR, Saif Ali Khan, Koratala Siva | Anirudh | In cinemas now</h5>
      </div>
      <div className="col-md-4 ">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/Zrt77f7nTqY?si=2428ZC-es0BaGe7t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Morni | Badshah | Sharvi Yadav | Preity Mukhundhan | Hiten</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/45vS1-xtnp8?si=udlfxVqGssP0vSgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Jaragandi - Lyrical Video | Game Changer | Ram Charan | Kiara Advani | Shankar | Thaman S</h5>
      </div>
      <div className="col-md-4">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/L8s6qxQJKgk?si=-y5NFhbymFh2kx6Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Godari Gattu Lyrical - Sankranthiki Vasthunam | Venkatesh,Aishwarya | Anil Ravipudi | Bheems C</h5>
      </div>
      <div className="col-md-4">
      <iframe className='rounded-3 w-100' style={{ height: "250px" }} src="https://www.youtube.com/embed/NCthQyirLdI?si=CgAkzrGDoJzyReKh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5 className='mt-2'>Anaganaga Oka Raju - Pre Wedding Video | Naveen Polishetty, Meenakshi Chaudhary | S Naga Vamsi</h5>
      </div>
    </div>
   </div>
   </>
  )
}

export default Button
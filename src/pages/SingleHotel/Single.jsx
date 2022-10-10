import React from "react";
import { useState } from "react";
import "./single.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/header";
import MailList from "../../components/MailList/maillist";
import Footer from "../../components/Footer/footer";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";


const Hotels = () => {


	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);



	const photos = [
	{

	src:"https://cf.bstatic.com/images/hotel/840x460/354/354440025.jpg"
},

	{

	src:"https://cf.bstatic.com/images/hotel/840x460/354/354440025.jpg"
},
	{

	src:"https://les-bons-plans-de-barcelone.com/wp-content/uploads/2014/11/louer-un-appartement-moyenne-duree.jpg"
},
	{

	src:"https://cf.bstatic.com/images/hotel/840x460/354/354440025.jpg"
},
	{

	src:"https://cf.bstatic.com/images/hotel/840x460/354/354440025.jpg"
},
	{

	src:"https://cf.bstatic.com/images/hotel/840x460/354/354440025.jpg"
}

	];


	const handleOpen = (i) => {

		setSlideNumber(i);
		setOpen(true);
	};


	const handleMove = (direction) => {

		let newslideNumber;

		if(direction==="l") {

			newslideNumber = slideNumber === 0 ? 5 : slideNumber-1
		} else {

			newslideNumber = slideNumber === 5 ? 0 : slideNumber+1
		}

		setSlideNumber(newslideNumber)
	}


	return (

		<div>
			<Navbar />
			<Header className="List" />
			<div className="hotelcontainer">
			{open && <div className="slider">

			<FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() =>setOpen(false)}/>
			<FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() =>handleMove("l")} />
			<div className="sliderwrapper">
			<img src={photos[slideNumber].src} alt="" className="sliderimg" />
			</div>
			<FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() =>handleMove("r")} />

			</div>}
			<div className="hotelwrapper">
			<button className="bknow">Reserve or Book Now</button>
			<h1 className="hotelTitle">Mansoor Hotel</h1>
			<div className="hotelAddress">
			<FontAwesomeIcon icon={faLocationDot} />

			<span>Road Number 1 Madaxtooyada </span>

		</div>
		<span className="hotelDistance">Excellent Location 4km From Downtown</span>
		<span className="HotelPriceHighlight">
		Book a stay over $114 at this property and get free airport and taxi</span>
		<div className="Hotelimages">
		{photos.map((photo, i) =>(
			<div className="Hotelimagewrapper">
			<img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
			</div>
			))}
		</div>
		<div className="hotelDetails">
		<div className="hotelDetailTexts">
		<h1 className="hotelTitle">stay is the heart of Hargeisa</h1>
		<p className="hotelDesc">
		kusoo dhawaw gacmo furan, waji furan, iyo qabilaad heer sare
		 ah Mansoor ugu kaalay adeeg tayo sare leh,
		shaqale shaqada u carbisan,
		 iyo waliba jawi degan...</p>
		</div>
		<div className="hotelDetailPrice">
		<h1>perfect for a 9-night stay!</h1>
		<span>Located in the Best place in Hargeisa</span>
		<h2><b>$945</b>(9 nights)</h2>
		<button>Reserve or Book Now </button>
		</div>
		</div>
		</div>
		<MailList />
		<Footer />
		</div>
		</div>



		)
}
export default Hotels;
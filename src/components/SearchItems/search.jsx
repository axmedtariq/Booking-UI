import React from 'react'
import "./search.css";

function SearchItem() {
	return (
		<div  className="searchitem">
		<img src="https://resize.elle.fr/original/var/plain_site/storage/images/deco/reportages/visites-maisons/un-appartement-de-77-m2-astucieusement-optimise-pour-une-famille/96130343-1-fre-FR/Un-appartement-de-77-m2-astucieusement-optimise-pour-une-famille.jpg" alt="" className="siImg" />
		<div className="siDesc">
		<h1 className="siTitle">Tower Street Apartement</h1>
		<span className="siDistance">500m from cener</span>
		<span className="siTaxiOp">Free Airport Taxi</span>
		<span className="sisubtitle">Studio Apartment With Aircondition</span>
		<span className="siFeatures">
		Entire Studio * 1 bathroom * 21m 1 full bed </span>
		<span className="siCancelOp">Free Cancellation</span>
		<span className="siCancelOpSubtitle">
			You can cancell later, so lock in this great price today !
		</span>




</div>

		<div className="siDetails">

		<div className="siRating">
		<span>Excellent</span>
		<button>8.9</button>
		</div>

		<div className="siDetailsTaxi">
		<span className="siPrice">123</span>
		<span className="siTaxiOp">Includes taxes and fees</span>
		<button className="sicheckbutton">See Avaliability </button>
		</div>

		</div>
		</div>


			
	);
}

export default SearchItem;
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/header";
import SearchItem from "../../components/SearchItems/search";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import format from "date-fns/format"
import {DateRange} from "react-date-range";
import "./list.css";
const List = () => {
	

const Location = useLocation ();
const [destination, setDestination] = useState(Location.state.destination);
const [date, setDate] = useState(Location.state.date);
const [opendate, setOpenDate] = useState(false);

const [options, setOptions] = useState(Location.state.options);
 return (

		<div>
		<Navbar/>
		<Header type="list" />
		<div className="Listcontainer">
		<div className="listwrapper">
		<div className="Listsearch">
			<h1 className="ListTitle">SEARCH</h1>
			<div className="Listitem">
			<label>Destination</label>
			<input placeholder={destination} type="text" />

		</div>
		
		<div className="Listitem">
			<label>Check-in Date</label>
			<span onClick={() =>setOpenDate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
			{opendate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} />)}
			</div>
			<div className="Listitem">
			<div className="LSOption">
			<label>Options</label>
			<div className="Listoptions">
			<span className="ListopenText">
			Min Price <small>Per Night</small>
			</span>
			<input type="number" className="Listoptioninput" />
			</div>
			<div className="Listoptions">
			<span className="ListopenText">
			Max Price <small>Per Night</small>
			</span>
			<input type="number" className="Listoptioninput" />
			</div>
			<div className="Listoptions">
			<span className="ListopenText">
			Adult 
			</span>
			<input type="number" min={1} className="Listoptioninput" placeholder={options.adult}/>
			</div>
			<div className="Listoptions">
			<span className="ListopenText">
			Children 
			</span>
			<input type="number" min={0} className="Listoptioninput" placeholder={options.children}/>
			</div>
			<div className="Listoptions">
			<span className="ListopenText">
			Room 
			</span>
			<input type="number" min={1} className="Listoptioninput" placeholder={options.room} />
			</div>


		
		</div>
		</div>

		<button>Search</button>
		
		</div>
		<div className="listResult">
			<SearchItem />
			<SearchItem />
			<SearchItem />
			<SearchItem />
			<SearchItem />
			<SearchItem />
			<SearchItem />
			<SearchItem />
			<SearchItem />
		</div>

		</div>

		</div>
		</div>


		)
}
export default List;
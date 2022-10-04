
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/header";
import Featured from "../../components/Featured/feature";

const Home = () => {
	return(

		<div>
		<Navbar />
		<Header />
		<div className="homecontainer">
		<Featured/>
		</div>
		</div>

		);
};
export default Home;
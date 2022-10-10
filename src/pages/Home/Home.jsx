
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/header";
import Featured from "../../components/Featured/feature";
import PropertyList from "../../components/PropertyList/Property";
import FeaturedProp from "../../components/FeaturedProperties/featuredproperties";
import MailList from "../../components/MailList/maillist";
import Footer from "../../components/Footer/footer";




const Home = () => {
	return(

		<div>
		<Navbar />
		<Header />
		<div className="homecontainer">
		<Featured/>
		<h1 className="homeTitle">Browse by Property Type</h1>
		<PropertyList />
		<h1 className="homeTitle">Homes Guest Love </h1>
		<FeaturedProp />
		<MailList />
		<Footer />
		</div>
		</div>

		);
};
export default Home;
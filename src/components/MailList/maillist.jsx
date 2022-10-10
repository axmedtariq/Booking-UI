import "./maillist.css";

const MailList = () => {
	return (
		<div className="mail">
		<h1 className="mailtitle">Save time, Save money!</h1>
		<span className="mailDesc">Sign up we will send you Email</span>
		<div className="Mailinputcontainer">
		<input type="text" placeholder="Your Email" />
		<button>Subscribe</button>
		</div>
		</div>

		)
}
export default MailList;
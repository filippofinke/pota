import "./Header.css";
import Logo from "./../../logo.svg";
import Button from "./../Button/Button";

const Header = () => {
	return (
		<div className="header">
			<div className="brand">
				<img className="logo" alt="Pota's logo" src={Logo}></img>
				<h1 className="title">pota</h1>
			</div>
			<div className="actions">
				<Button className="primary" icon="add">
					<span>Inserisci un annuncio</span>
				</Button>
				<Button className="secondary ml7" icon="person_outline">
					<span>Il mio pota</span>
				</Button>
			</div>
		</div>
	);
};

export default Header;

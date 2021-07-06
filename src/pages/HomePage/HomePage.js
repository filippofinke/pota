import "./HomePage.css";
import Header from "./../../components/Header/Header";
import Input from "./../../components/Input/Input";
import Skeleton from "./../../components/Skeleton/Skeleton";
import Button from "./../../components/Button/Button";

const HomePage = () => {
	return (
		<div className="home-page">
			<Header></Header>
			<div className="container">
				<br />
				<br />
				<Input placeholder="Che cosa cerchi? iPhone12" icon="search"></Input>
				<br />
				<br />
				<h3>Scopri le categorie più visitate</h3>
				<div className="categories">
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
				</div>
				<h3>Scopri gli annunci più recenti</h3>
				<div className="classified-ads">
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
					<Skeleton></Skeleton>
				</div>
				<br />
				<br />
				<div className="center sticky">
					<Button className="secondary">
						<span>Visualizza tutti gli annunci</span>
					</Button>
				</div>
				<br />
				<br />
			</div>
		</div>
	);
};

export default HomePage;

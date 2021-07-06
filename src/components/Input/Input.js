import "./Input.css";
import Button from "../Button/Button";

const Input = (props) => {
	return (
		<div className="input">
			{props.icon && (
				<Button className="icon">
					<i className="material-icons">{props.icon}</i>
				</Button>
			)}
			<input type="text" placeholder={props.placeholder} />
		</div>
	);
};

export default Input;

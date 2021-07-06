import "./Button.css";

const Button = (props) => {
	return (
		<button className={props.className}>
			{props.icon && <i className="icon material-icons">{props.icon}</i>}
			{props.children}
		</button>
	);
};

export default Button;

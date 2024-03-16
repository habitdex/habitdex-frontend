const PrimaryButton = ({ children, ...props }) => {
	return (
		<div>
			<button {...props}>{children}</button>
		</div>
	);
};

export default PrimaryButton;

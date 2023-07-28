type PropsValue = {
	valueToRetrieve: {
		firstName: string;
	};
};
const Task = (props: PropsValue): JSX.Element => {
	return (
		<>
			<h1>Hello Task</h1>

			<h2 style={{color: "deepskyblue"}}>
				{props.valueToRetrieve?.firstName}
			</h2>

		</>
	)
}

export default Task;
type PropsValue = {
	valueToRetrieve: {
		firstName: string,
		age: number,
		admin: boolean
	};
}

const InputTask = (props: PropsValue): JSX.Element => {
	return (
		<>
			<h1>Hello InputTask</h1>
			<h1 style={{color: "deepskyblue"}}>{props.valueToRetrieve.firstName}</h1>
			<h1 style={{color: "deepskyblue"}}>{props.valueToRetrieve.age}</h1>
			<h1 style={{color: "deepskyblue"}}>{props.valueToRetrieve.admin ? `Yes admin` : `not admin`}</h1>
		</>
	)
}

export default InputTask;
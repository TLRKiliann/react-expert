import React, { ChangeEvent } from "react";

type PropsValue = {
	valueToRetrieve: {
		firstName: string;
		age: number;
		admin: boolean;
	};
	change: string;
	handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
	handleValidate: () => void;
};

const InputTask = (props: PropsValue): JSX.Element => {
	return (
		<>
			<h1>Hello InputTask</h1>

			<h2 style={{color: "deepskyblue"}}>
				{props.valueToRetrieve.firstName}
			</h2>

			<h2 style={{color: "deepskyblue"}}>
				{props.valueToRetrieve.age}
			</h2>
			
			<h2 style={{color: "deepskyblue"}}>
				{props.valueToRetrieve.admin ? `Yes admin` : `not admin`}
			</h2>

			<label>Change firstname :</label>
			<input 
				type="text"
				value={props.change} 
				onChange={props.handleChangeInput}
			/>
			
			{ props.change ? <p>{props.change}</p> : <p>Not changed</p> }

			<button type="button" onClick={props.handleValidate}>
				Validate
			</button>
		</>
	)
}

export default InputTask;
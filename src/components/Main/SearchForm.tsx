import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	buttonType: 'button' | 'reset' | 'submit' | undefined;
	buttonText: string;
}

export const SearchForm = (props: InputProps) => {
	return (
		<div>
			<input {...props}></input>
			<button type={props.buttonType}>{props.buttonText}</button>
		</div>
	);
};

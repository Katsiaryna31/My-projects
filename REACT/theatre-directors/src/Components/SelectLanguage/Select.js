import React from "react";
import "./Select.css";
class SelectLang extends React.Component {

	componentDidMount() {
		const value = localStorage.getItem('Activelang');
		const parent = document.body.querySelector('.row-1').children;
		if (value) {
			for (let i = 0; i < parent.length; i++) {
				if (parent[i].classList.contains("active-button"))
					parent[i].classList.remove("active-button");
				if (parent[i].value === value) {
					parent[i].classList.add("active-button")
				}
			}
		}
	}

	toggleLang = (event) => {
		const target = event.target.closest('button');
		if (!target) {
			return;
		}
		this.props.toggleLang(target);
		const parent = document.body.querySelector('.row-1').children;
		for (let i = 0; i < parent.length; i++) {
			if (parent[i].classList.contains("active-button"))
				parent[i].classList.remove("active-button")
		}
		target.classList.add("active-button");
		localStorage.setItem('Activelang', target.value);
		target.blur()
	}

	render() {

		return (
			<div className="row-1" onClick={this.toggleLang}>
				<button className="button-select-lang active-button" value="en">En</button>
				<button className="button-select-lang" value="ru">Ru</button>
				<button className="button-select-lang" value="by">Be</button>
			</div>
		)
	}
}

export default SelectLang;
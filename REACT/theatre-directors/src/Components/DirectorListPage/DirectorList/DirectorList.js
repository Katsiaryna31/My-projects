import React from "react";
import "./DirectorList.css";
import { Link } from "react-router-dom";

class Director extends React.Component {
  render() {
		const url = this.props.author.image;
    return <li>
			<div className="director-link" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${url})`}}>
			{this.props.author.name}
			</div>
			<p className="description">{this.props.author.description}</p>
		</li>;
  }
}

class DirectorList extends React.Component {
  render() {
    const rows = [];
    const objectAuter = this.props.author;
    const filterText = this.props.filterText.toLowerCase();
    const url = this.props.url;
    objectAuter.forEach(item => {
      const filter = item.name.toLowerCase() + item.placeOfBirth.toLowerCase();
      if (filter.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <Link to={`${url}/${item.id}`} key={item.id}>
          <Director key={item.id} author={item} />
        </Link>
      );
    });

    if(rows.length > 0) {
      document.body.querySelector("#root").style.height = "100%";
      return <ul className="director-list">{rows}</ul>;
    } else {
      document.body.querySelector("#root").style.height = "100vh";
      return <ul className="director-list">{rows}</ul>;
    }
  }
}

export default DirectorList;

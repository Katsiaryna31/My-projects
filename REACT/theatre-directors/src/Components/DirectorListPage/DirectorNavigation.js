import React, { useEffect } from 'react';
import "./FilterDirector.css";
import { Route, useParams,   useRouteMatch } from "react-router-dom";
import DirectorList from "./DirectorList/DirectorList";
import SearchBar from "./SearchBar/SearchBar";
import DirectorPage from "../DirectorPage/DirectorPage";
import Zoom from 'react-reveal/Zoom';


class FilterDirector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "" };
  }

  handleFilterTextChange = filterText => {
    this.setState({ filterText: filterText });
	};

  render() {
    return <Zoom>
      <div className="director-filter">
          <SearchBar
            handleFilterTextChange={this.handleFilterTextChange}
            filterText={this.state.filterText}
          />
          <DirectorList
            author={this.props.author}
            filterText={this.state.filterText}
            url={this.props.url}
          />
        </div>
    </Zoom>;
  }
}

function DirectorNavigation(props) {
	let { path, url } = useRouteMatch();
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
  return (
    <div>
      <Route exact path={path}>
        <FilterDirector author={props.author} url={url} />
      </Route>
      <Route path={`${path}/:id`}>
        <AboutDirector titles={props.titles} author={props.author} />
      </Route>
    </div>
  );
}

function AboutDirector(props) {
	let { id } = useParams();
  const index = props.author.findIndex(item => item.id === id);
	const data = props.author[index];
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
  return <DirectorPage titles={props.titles} data={data} />;
}

export default DirectorNavigation;

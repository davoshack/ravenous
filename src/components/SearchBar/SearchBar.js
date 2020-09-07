import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 'term': '', 'location': '', 'sortBy': 'best_match' };
      this.sortByOptions = {

        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
      };
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }
    getSortByClass(sortByOption) {
      if (this.state.sortBy === sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }
    handleSortByChange(sortByOption) {
      this.setState({
        'sortBy': sortByOption
      });
    }
    handleTermChange(e) {
      const term = e.target.value;
      this.setState({
        'term': term
      });
    }
    handleLocationChange(e) {
      const location = e.target.value;
      this.setState({
        'location': location
      });
    }
    handleSearch(e) {
      const term = this.state.term;
      const location = this.state.location;
      const sortBy = this.state.sortBy;
      this.props.searchYelp(term, location, sortBy);
      e.preventDefault();
    }
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map((sortByOption, i) => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                       className={this.getSortByClass(sortByOptionValue)} 
                       key={'sortByOptionValue_' + i}>{sortByOptionValue}</li>
        });
    }
    render() {
        return(
            <div className="SearchBar">
              <div className="SearchBar-sort-options">
                <ul>
                   {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
              </div>
              <div className="SearchBar-submit" onClick={this.handleSearch}>
                <a>Let's Go</a>
              </div>
            </div>
        );
    }
}

export default SearchBar;
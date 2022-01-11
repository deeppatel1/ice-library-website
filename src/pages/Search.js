import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Axios from 'axios';
import SearchResultsPage from '../components/SearchResultsPage';


export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: props.query || "",
            videoResults: []
        }
        this.updateQuery = this.updateQuery.bind(this)
    }

    updateQuery(query) {
        this.setState({query: query})
        this.loadVideoResults(query)
    }

    loadVideoResults(query) {

        Axios.get("http://127.0.0.1:5000/search?q=" + query).then((response) => {
            this.setState({ videoResults: [] })
            this.setState({ videoResults: response.data.videos })
        })
    }


    render() {
        return (
            <div>
                <SearchBar query="" updateQueryFunc={this.updateQuery}></SearchBar>
                <SearchResultsPage originalQuery={this.state.query} videos={this.state.videoResults}></SearchResultsPage>
            </div>
        )
    }
}

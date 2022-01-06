import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Axios from 'axios';
import HighlightVideo from '../components/HighlightVideo';
import SearchResultsPage from '../components/SearchResultsPage';
import SearchPage from './Search';


export default class VideoDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: props.query,
            videoResults: []
        }
        this.updateQuery = this.updateQuery.bind(this)
    }

    updateQuery(query) {
        this.setState({ query: query })
        this.loadVideoResults(query)
    }

    loadVideoResults(query) {
        Axios.get("http://127.0.0.1:5000/search?q=" + query).then((response) => {
            this.setState({ videoResults: response.data.videos})
        })
    }


    render() {
        // if query isn't blank, means it was used in the bar, and we need to return the list of videos
        // instead of the highlight video component/

        // return highlight video if video results are loaded and a query exists

        // if ((this.state.videoResults !== undefined) && (this.state.query !== undefined) && (this.state.videoResults.length === 0) && (this.state.query !== "nothing")) {
        // if (true) {
        if (this.state.query === undefined || this.state.query === "") {
            return (
                <div>
                    <SearchBar query="" updateQueryFunc={this.updateQuery}></SearchBar>
                    <HighlightVideo updateQueryFunc={this.updateQuery}></HighlightVideo>
                </div>
            )
        } else {
            return (
                <SearchPage query={this.state.query}></SearchPage>
            )
        }
    }
}
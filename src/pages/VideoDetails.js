import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Axios from 'axios';
import HighlightVideo from '../components/HighlightVideo';
import SearchResultsPage from '../components/SearchResultsPage';
import SearchPage from './Search';


export default class VideoDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.updateQuery = this.updateQuery.bind(this)
        const urlParams = new URLSearchParams(window.location.search);
        const q = urlParams.get('q')
        this.state = {
            query: props.query,
            originalQuery: q,
            videoResults: []
        }
        Axios.get("http://192.168.1.114:5000/search?q=" + q).then((response) => {
            this.setState({ videoResults: response.data.videos })
        })
    }

    updateQuery(query) {
        this.setState({ query: query })
        this.loadVideoResults(query)
    }

    loadVideoResults(query) {
        Axios.get("http://192.168.1.114:5000/search?q=" + query).then((response) => {
            this.setState({ videoResults: response.data.videos })
        })
    }

    render() {
        // this.loadQueryAndVideoResults()
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
                    {/* <SearchResultsPage originalQuery={this.state.originalQuery} videos={this.state.videoResults}></SearchResultsPage> */}
                </div>
            )
        } else {
            return (
                <SearchPage query={this.state.query}></SearchPage>
            )
        }
    }
}
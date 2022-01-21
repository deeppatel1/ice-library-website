import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Axios from 'axios';
import SearchResultsPage from '../components/SearchResultsPage';


export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        var urlParams = new URLSearchParams(window.location.search);
        var q = urlParams.get('q')
        this.state = {
            query: props.query || q,
            videoResults: [],
            isClips: true,
            isVids: true,
            isVods: true
        }
        this.updateQuery = this.updateQuery.bind(this)
        this.updateClipsBoolean = this.updateClipsBoolean.bind(this)
        this.updateVidsBoolean = this.updateVidsBoolean.bind(this)
        this.updateVodsBoolean = this.updateVodsBoolean.bind(this)
        this.loadRandomVideoResults = this.loadRandomVideoResults.bind(this)

        this.loadVideoResults(q)
    }

    updateQuery(query) {
        this.setState({ query: query })
        this.loadVideoResults(query)
    }

    loadVideoResults(query) {
        const videoType = [this.state.isClips, this.state.isVids, this.state.isVods].toString()
        Axios.get("http://192.168.1.114:5000/search?q=" + query + "&returnType=" + videoType).then((response) => {
            this.setState({ videoResults: [] })
            this.setState({ videoResults: response.data.videos })
        })
    }

    loadRandomVideoResults() {
        const videoType = [this.state.isClips, this.state.isVids, this.state.isVods].toString()
        Axios.get("http://192.168.1.114:5000/search?randomQuery=true&returnType" + videoType).then((response) => {
            this.setState({ videoResults: [] })
            this.setState({ videoResults: response.data.videos })
        })

    }

    updateClipsBoolean(boolean) {
        this.setState({isClips: boolean})
        this.loadVideoResults(this.state.query)
    }

    updateVidsBoolean(boolean) {
        this.setState({isVids: boolean})
        this.loadVideoResults(this.state.query)
    }

    updateVodsBoolean(boolean) {
        this.setState({isVods: boolean})
        this.loadVideoResults(this.state.query)
    }


    render() {
        return (
            <div>
                <SearchBar query={this.state.query} loadRandomVideoResults={this.loadRandomVideoResults} updateQueryFunc={this.updateQuery} updateClipsBoolean={this.updateClipsBoolean} updateVidsBoolean={this.updateVidsBoolean} updateVodsBoolean={this.updateVodsBoolean}></SearchBar>
                <SearchResultsPage originalQuery={this.state.query} videos={this.state.videoResults}></SearchResultsPage>
            </div>
        )
    }
}

import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Axios from 'axios';
import SearchResultsPage from '../components/SearchResultsPage';


export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "example_query",
            video_results: []
        }
        this.update_query = this.update_query.bind(this)
    }


    update_query(query) {
        this.setState({query: query})
        this.load_video_results(query)
    }


    load_video_results(query) {
        Axios.get("http://127.0.0.1:5000/search?q=" + query).then((response) => {
            console.log(response)
            this.setState({ video_results: response.data.videos })
        })
    }


    render() {
        return (
            <div>
                <SearchBar update_query_func={this.update_query}></SearchBar>
                <SearchResultsPage videos={this.state.video_results}></SearchResultsPage>
            </div>
        )
    }
}

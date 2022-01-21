import React, { Component, useEffect } from 'react';

import moment from 'moment'
import { Link } from "react-router-dom";
import SearchPage from '../pages/Search';

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


// export default function SearchSummaryVideo(props) {
export default class SearchSummaryVideo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoHyperlink: "/videos/" + props.video_id + "?q=" + props.originalQuery,
            thumbnail: props.thumbnail,
            title: props.title,
            uploader: props.uploader,
            view_count: props.view_count.toLocaleString(),
            views: props.views,
            duration: fancyTimeFormat(props.duration),
            date: moment(props.date).format("MMM Do YY")
        }
    }
    // if(props === null) {
    // return (<div></div>)

    // const updateQuery(e) {
    //     this.setState({ query: e.target.value })
    //     this.props.updateQueryFunc(e.target.value)
    // }



    updateQuery(e) {
        this.setState({ query: e.target.value })
        this.props.updateQueryFunc("")
    }

    render() {
        if (this.state.title === null) {
            return (<div></div>)
        }

        return (
            <div className="p-4">
                <Link to={this.state.videoHyperlink} onClick={(e) => { this.updateQuery(e) }} >
                    <div className="rounded shadow-lg w-64 md:w-80 lg:w-96 bg-gray-900 pb-5 sm:h-auto hover:bg-purple-900">
                        <div className="relative">
                            <img className="w-64 md:w-80 lg:w-96 shadow rounded" src={this.state.thumbnail} />
                            <div class="badge absolute bottom-0 right-0 bg-black m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">{this.state.duration}</div>
                        </div>
                        <div className="px-4 pt-3 text-sm text-white"> {this.state.title} </div>
                        <div className="px-4 py-2 text-xs text-gray-300 font-mono">
                            <span className="float-left">{this.state.uploader} · {this.state.view_count.toLocaleString()}</span>
                            <span className="hidden md:block float-left pl-1">views </span>
                            <span className="float-right">{this.state.date}</span>
                        </div>
                    </div>
                </Link>
            </div >
        )
    }
}
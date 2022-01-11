import React from 'react'
import SearchSummaryVideo from './SearchSummaryVideo'

export default function SearchResultsPage(props) {

    var videos = props.videos
    // var query = props.query

    if (videos == undefined) {
        return <div></div>
    }

    if (videos.length > 16) {
        videos = videos.splice(0, 16)
    }

    var videosList = videos.map((d) => <SearchSummaryVideo
        originalQuery={props.originalQuery}
        title={d.title}
        uploader={d.from_channel}
        thumbnail={d.www_thumbnail}
        date={d.date}
        view_count={d.view_count}
        video_id={d.videoId}
    ></SearchSummaryVideo>);

    return (
        <div class="flex justify-center flex-wrap flex-row pt-6 pl-3">{videosList}</div>
    );
}
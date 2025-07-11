import ReactPlayer from 'react-player/youtube'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchResultsPage from './SearchResultsPage';

export default function HighlightVideo() {

    const [data, setData] = useState({});
    const [videoUrl, setVideoUrl] = useState("");
    const [tags, setTags] = useState([]);
    const [videoSize, setVideoSize] = useState(0)
    const [relatedVideos, setRelatedVideos] = useState([])

    const fetchData = async () => {
        const id = window.location.pathname.substring(8)
        const res = await fetch("http://192.168.1.142:5001/" + id);
        const data = await res.json();
        setData(data);
        getTags(data.tags);

        const relatedResponse = await fetch("http://192.168.1.142:5001/related?title=" + data.title);
        const relatedVideosData = await relatedResponse.json();

        setRelatedVideos(relatedVideosData.videos);

        setVideoUrl("https://www.youtube.com/watch?v=" + id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    function getTags(tags) {
        const htmlTags = []
        for (var i = 0; i < tags.length; i++) {
            const tag_link = "/search?q=" + tags[i]
            htmlTags.push(
                <Link to={tag_link} class="pr-2">
                    <span className="font-sans inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 pr-4 mb-2"> {tags[i]} </span>
                </Link>
            )
        }
        setTags(htmlTags)
    }

    return (
        <div>
            <div className="HighlightVideo">
                <div className="Video">
                    <ReactPlayer
                        className='react-player'
                        controls
                        playing
                        url={videoUrl}
                        width='100%'
                        height='720px'
                        pip='true' />
                </div>

                <div className="mx-4 my-4">

                    <div class="font-mono font-bold text-xl px-10 py-4 text-gray-200">{data.title}</div>

                    <div class="py-3">
                        <div class="flex">
                            {/* <div class="flex-none">
                            <img class="inline content-center object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                            <div className="font-sans bg-gray-200 rounded-full px-4 py-1 text-xs text-gray-900 dark:text-white">test</div>
                        </div> */}
                            <div class="px-10 text-gray-500 font-serif whitespace-pre h-40 overflow-y-scroll"> {data.description}</div>
                        </div>
                    </div>

                    <div className="px-8 pt-4">
                        {tags}
                    </div>
                </div>
            </div>
            <p class="font-bold text-xl px-14 pt-4 text-gray-200">Related Videos</p>
            <SearchResultsPage originalQuery="" videos={relatedVideos}></SearchResultsPage>
        </div>
    )
}

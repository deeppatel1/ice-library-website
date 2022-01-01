import React from 'react'
import moment from 'moment'

export default function SearchSummaryVideo(props) {
    console.log("loaded props")
    console.log(props)
    return (
        <div className="p-4">
            <div className="rounded shadow-lg w-64 md:w-80 lg:w-96 bg-gray-900 pb-5 sm:h-auto">
                <img className="w-64 md:w-80 lg:w-96" src={props.thumbnail} />
                <div className="px-4 pt-3 text-sm text-white"> {props.title} </div>
                <div className="px-4 py-2 text-xs text-gray-300 font-mono">
                    <span className="float-left">{props.uploader} · {props.view_count.toLocaleString()}</span>
                    <span className="hidden md:block float-left pl-1">views </span>
                    <span className="float-right">{moment(props.date).format("MMM Do YY")}</span>
                </div>
            </div>
        </div>
    )
}
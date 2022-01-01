import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function HighlightVideo(props) {
    return (
        <div classNameName="HighlightVideo">
            <div classNameName="Video">
                <ReactPlayer
                    className='react-player'
                    controls
                    url={props.url}
                    width='100%'
                    height='574px'/>
            </div>

            <div className="mx-4 my-4">

                <div class="font-mono font-bold text-xl pl-1 py-2">{props.title}</div>

                <div class="py-3">
                    <div class="flex">
                        <div class="flex-none">
                            <img class="inline content-center object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                            <div className="font-sans bg-gray-200 rounded-full px-4 py-1 text-xs text-gray-900 dark:text-white">test</div>
                        </div>
                        <div class="pl-4"> {props.description}</div>
                    </div>
                </div>

                <div className="">
                    <span className="font-sans inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">photography</span>
                    <span className="font-sans inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">travel</span>
                    <span className="font-sans inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">winter</span>
                </div>
            </div>
        </div>
    )
}
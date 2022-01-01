import { result } from 'lodash'
import React from 'react'
import SearchSummaryVideo from './SearchSummaryVideo'

export default function SearchResultsPage(props) {

    const limited_list = props.data.splice(0, 16)
    
    // let itemList = limited_list.map((item, index) => {
    //     return <SearchSummaryVideo title={item}>{index}</SearchSummaryVideo>
    // })


    // console.log("...")
    // console.log(props)
    // console.log(limited_list)

    const listItems = limited_list.map((d) => <SearchSummaryVideo 
        title={d.title}
        uploader={d.from_channel}
        thumbnail={d.www_thumbnail}
        date={d.date}
        view_count={d.view_count}
        ></SearchSummaryVideo>);

    return (
        <div class="flex flex-wrap flex-row pt-6 pl-3">{listItems}</div>
    );
}
import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: props.query,
            isClips: true,
            isVids: true,
            isVods: true
        }
    }

    updateQuery(e) {
        this.setState({ query: e.target.value })
        this.props.updateQueryFunc(e.target.value)
    }

    handleVideoStates(type) {
        if (type === "isClips") {
            this.setState(prevState => ({
                isClips: !prevState.isClips
            }));
            this.props.updateClips(this.state.isClips)

        } else if (type === "isVids") {
            this.setState(prevState => ({
                isVids: !prevState.isVids
            }));
            this.props.updateVids(this.state.isVids)

        } else if (type === "isVods") {
            this.setState(prevState => ({
                isVods: !prevState.isVods
            }));
            this.props.updateVods(this.state.isVods)

        }
    }

    handleCallingParentRandomVideo() {
        this.props.loadRandomVideoResults()
    }

    getClipsButtonCss() {
        const clipsCss = "shadow px-4 py-1 text-white text-sm font-medium rounded-full rounded-lg-border focus:outline-none"
        return this.state.isClips ? clipsCss + " bg-purple-500" : clipsCss + " bg-gray-500"
    }

    getAverageButtonCss() {
        const clipsCss = "shadow px-4 py-1 text-white text-sm font-medium rounded-full focus:outline-none"
        return this.state.isVids ? clipsCss + " bg-purple-500" : clipsCss + " bg-gray-500"
    }

    getVodsButtonCss() {
        const clipsCss = "shadow px-4 py-1 text-white text-sm font-medium rounded-full focus:outline-none"
        return this.state.isVods ? clipsCss + " bg-purple-500" : clipsCss + " bg-gray-500"
    }


    render() {
        return <div><nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 shadow-xl">
            <div class="container flex flex-wrap justify-around items-center mx-auto">
                <a href="search" class="hidden lg:flex md:flex">
                    <svg class="h-12 w-12" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500.000000 500.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                            fill="#7E22CD" stroke="none">
                            <path d="M2505 4461 c-44 -15 -131 -51 -193 -80 -142 -65 -166 -70 -195 -43
-60 55 -219 108 -288 97 -51 -9 -71 -26 -127 -110 -26 -38 -62 -78 -81 -89
-34 -19 -34 -19 -75 2 -23 12 -52 22 -66 22 -47 0 -133 -111 -204 -262 -47
-101 -49 -103 -73 -87 -30 18 -65 4 -114 -46 -61 -62 -107 -140 -121 -208 -11
-51 -10 -61 10 -109 31 -75 29 -86 -20 -107 -24 -10 -65 -39 -93 -63 -48 -44
-50 -48 -49 -95 0 -37 12 -74 44 -142 l43 -91 -32 -46 c-41 -56 -49 -109 -27
-169 22 -57 61 -89 132 -110 50 -14 55 -18 49 -38 -4 -12 -9 -44 -12 -72 -4
-44 -1 -56 25 -94 27 -40 29 -50 25 -103 -4 -39 -2 -58 5 -58 8 0 10 -18 6
-57 -7 -68 7 -113 34 -113 10 0 27 -9 38 -21 13 -15 26 -19 46 -15 21 4 28 1
33 -14 4 -11 10 -20 14 -20 5 0 11 -18 15 -40 4 -24 14 -45 26 -52 15 -9 20
-24 20 -53 0 -68 87 -225 125 -225 10 0 12 11 8 41 -6 38 -5 41 13 31 48 -26
78 -83 92 -175 12 -73 33 -117 57 -117 19 0 19 7 0 60 -8 23 -26 99 -40 168
-14 70 -33 163 -42 207 -23 110 -22 332 2 445 23 114 46 159 98 192 23 15 53
36 67 47 24 20 28 20 115 6 50 -8 112 -15 139 -15 26 0 95 -11 152 -25 56 -14
110 -22 119 -18 21 7 14 64 -15 130 -16 36 -24 43 -47 44 -121 2 -235 17 -251
33 -22 21 -8 31 57 41 55 8 63 12 160 82 91 65 168 105 236 123 60 15 238 15
331 0 36 -6 69 -8 73 -4 3 4 0 9 -6 11 -7 3 -13 9 -13 14 0 13 44 11 75 -3 21
-9 36 -8 80 6 44 14 64 28 106 76 53 61 89 77 89 40 0 -27 20 -68 36 -74 7 -3
30 12 49 32 33 34 37 36 49 20 7 -10 21 -18 30 -18 31 0 73 -29 85 -57 6 -15
16 -54 21 -87 5 -32 16 -66 24 -75 35 -41 73 -151 51 -151 -2 0 -41 16 -87 36
-80 36 -84 36 -163 28 -44 -4 -122 -6 -172 -5 -105 3 -154 -9 -177 -44 -25
-39 -58 -134 -50 -146 9 -15 92 -4 264 36 99 23 251 23 305 1 79 -34 119 -95
131 -202 4 -42 15 -71 35 -100 58 -84 59 -106 15 -374 -9 -52 -20 -122 -26
-154 -5 -33 -7 -62 -4 -65 7 -7 123 110 130 132 3 10 0 24 -6 32 -8 9 -9 25
-5 42 5 16 7 71 6 124 -1 73 2 99 13 108 19 16 39 -15 56 -86 20 -87 43 -57
33 41 -4 41 -1 64 16 101 20 45 22 47 39 31 29 -25 42 -20 40 17 -3 31 0 34
68 67 95 47 101 53 109 111 6 44 4 54 -24 98 -37 57 -39 70 -7 64 18 -4 28 3
45 30 26 42 29 124 6 133 -8 4 -15 18 -15 33 0 15 -7 37 -16 49 -14 20 -13 24
9 54 31 42 50 99 38 111 -6 6 -21 1 -40 -12 -32 -23 -130 -45 -144 -32 -4 5 0
46 9 92 16 75 16 89 3 129 -12 39 -21 49 -64 71 l-50 25 -8 115 c-12 180 -41
242 -145 312 -68 47 -72 51 -72 100 0 21 -5 47 -11 59 -10 18 -17 19 -74 13
-82 -8 -105 10 -105 83 0 90 -41 182 -80 182 -10 0 -56 -18 -102 -40 -53 -26
-94 -40 -113 -38 l-30 3 -6 80 c-3 44 -9 87 -13 97 -18 38 -103 50 -215 28
-98 -18 -98 -19 -93 49 4 52 2 60 -19 75 -32 22 -61 20 -154 -13z"/>
                            <path d="M2900 2370 c-46 -11 -277 -100 -362 -138 l-67 -31 -98 38 c-152 60
-349 121 -386 121 -62 0 -139 -30 -179 -70 -70 -69 -55 -85 152 -154 257 -85
241 -67 119 -136 -175 -98 -295 -183 -291 -205 10 -53 77 -105 134 -105 13 0
129 51 258 113 129 62 249 119 267 126 37 15 42 13 364 -130 193 -85 227 -94
279 -76 37 13 80 67 80 101 0 24 -94 84 -293 186 -59 30 -107 57 -107 60 0 3
64 30 143 59 227 86 247 96 247 124 0 76 -151 144 -260 117z"/>
                            <path d="M3436 1553 c-9 -49 -24 -109 -33 -136 -12 -32 -14 -50 -7 -57 14 -14
101 78 110 116 4 15 21 40 38 55 17 15 39 41 49 58 16 27 16 32 3 37 -8 3 -25
-1 -38 -10 -31 -22 -65 -20 -80 4 -7 11 -16 20 -19 20 -3 0 -13 -39 -23 -87z"/>
                            <path d="M1903 1443 c-36 -14 6 -167 72 -268 82 -123 184 -195 324 -231 50
-12 97 -15 205 -11 157 5 243 27 338 88 104 67 208 214 241 342 23 88 20 91
-87 83 -119 -8 -135 -13 -142 -45 -18 -81 -28 -104 -57 -143 -64 -84 -175
-128 -323 -128 -165 0 -281 63 -323 176 -12 30 -21 66 -21 79 0 31 -20 41
-100 49 -36 4 -76 9 -90 11 -14 2 -31 1 -37 -2z"/>
                            <path d="M3173 911 c-40 -43 -93 -104 -119 -135 -56 -69 -109 -105 -219 -147
-77 -31 -89 -32 -296 -41 -193 -9 -223 -8 -275 7 -87 25 -184 95 -322 232 -68
68 -128 123 -133 123 -38 0 55 -119 192 -244 143 -132 291 -204 398 -192 31 3
117 10 191 15 134 10 221 31 300 71 50 26 125 95 172 158 22 30 74 93 115 139
42 46 73 86 71 88 -2 3 -36 -31 -75 -74z"/>
                        </g>
                    </svg>

                    <span class="self-center text-lg font-semibold dark:text-white">ICE VODS</span>
                </a>
                <div class="flex items-center pt-3 md:pt-0 lg:pt-0">
                    <div class="relative md:pr-0 md:block w-96">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <input spellcheck="false" type="text" value={this.state.query} onChange={(e) => { this.updateQuery(e) }} class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow outline-none focus:outline-none focus:ring" placeholder="Search..." />
                        <button type="submit" class="focus:outline-none absolute right-0 top-0 inset-y-0 mx-2" onClick={() => { this.handleCallingParentRandomVideo() }} >
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 w-6 h-6" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256" />
                                <path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="pt-3 md:pt-0 lg:pt-0" id="mobile-menu">
                    <div class="justify-evenly items-center flex space-x-8 md:space-x-4 lg:space-x-4">
                        <button class={this.getClipsButtonCss()} onClick={(e) => { this.handleVideoStates("isClips") }}>
                            Clips
                        </button>

                        <button class={this.getAverageButtonCss()} onClick={(e) => { this.handleVideoStates("isVids") }}>
                            Vids
                        </button>

                        <button class={this.getVodsButtonCss()} onClick={(e) => { this.handleVideoStates("isVods") }}>
                            Vods
                        </button>
                    </div>
                </div>

            </div>
        </nav>
        </div>
    }
}
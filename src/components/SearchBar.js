export default function SearchBar(props) {

    const handleSubmit = e => {
        e.preventDefault();
        alert("you have searched for - ");
        // or you can send to backend
    };

    return (
        <div class="flex items-center justify-center py-6">
            <div class="flex border-2 rounded">

                <form action="/" method="get">
                    <label htmlFor="vods-search">
                        <span className="visually-hidden"></span>
                    </label>
                    <input id="vods-search" name="q" type="text" class="px-4 py-2 w-96" placeholder="Search..." />
                    <button type="submit" class="flex items-center justify-center px-4 border-l bg-white">

                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </form>

                {/* <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search blog posts</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search blog posts"
                        name="s"
                    />
                    <button type="submit">Search</button>
                </form> */}

            </div>
        </div>
    )
}
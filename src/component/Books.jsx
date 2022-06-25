
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom"
import { getBooks } from "../data/data"

const Books = () => {
    const books = getBooks()
    const [searchParam, setSearchParam] = useSearchParams()
    const location = useLocation()


    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderLeft: "solid 1px", padding: "1rem" }}>


                <input type="text"
                    value={searchParam.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value
                        if (filter) {
                            setSearchParam({ filter })
                        } else {
                            setSearchParam({})
                        }
                    }}
                    placeholder="جست جوی کتاب"></input>

                {books.filter(
                    (book) => {
                        let filter = searchParam.get("filter")
                        if (!filter) { return true }
                        let name = book.name.toLowerCase()
                        return name.startsWith(filter.toLowerCase())
                    }
                )
                    .map((book) => (
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "",
                                };
                            }}
                            to={`/books/${book.number}${location.search}`}
                            key={book.number}
                        >
                            {book.name}
                        </NavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    )
}


export default Books








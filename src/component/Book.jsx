import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getBook } from "../data/data"
import { deleteBook } from './../data/data';
const Book = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const param = useParams()
    const book = getBook(parseInt(param.bookId))

    if (book) {
        return (
            <main>
                <h3>قیمت : {book.amount}</h3>
                <p>نام کتاب : {book.name}</p>
                <p>تاریخ انتشار : {book.due}</p>
                <button className="btn btn-outline-danger" onClick={() => {
                    deleteBook(book.number)
                    navigate("/books" + location.search)
                }
                }>حذف کتاب</button>
            </main>
        )
    } else {

        return (
            <main>
                <h3>کتاب مورد نظر یافت نشد</h3>
            </main>


        )
    }
}

export default Book
import React, { useState, useEffect } from 'react'
import ArAudBooks from './ArAudBooks.json'
import './ArBooks.css'

export default function ArBooks() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(ArAudBooks.books)
    }, [books])




    return (
        <div>
            <div className="alert-info p-3 mt-3">
                <h3 className="text-center">
                    قصص عربية مسموعة
                </h3>
            </div>

            {
                books.map(book =>
                    <div className="row mt-5 arabic mx-auto" key={book.name}>
                        <img key={book.img} className="img-fluid opacity-1 col-md-6 col-xs-12" src={book.img} alt={book.name} />
                        <ul key={book.name} className="col-md-6 col-xs-12 text-right">
                            <li key={book.name}><b>اسم الكتاب: </b>{book.name}</li>
                            <li key={book.author}><b>المؤلف: </b>{book.author}</li>
                            <li key={book.narrator}><b>الراوي: </b>{book.narrator}</li>
                            <li key={book.overview}><b>نبذة عن الكتاب او القصة: </b>{book.overview}</li>
                            <li key={book.voice}><audio className="mt-3 mx-auto text-center" controls src={book.voice}></audio></li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

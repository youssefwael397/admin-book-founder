import React, { useState, useEffect, Fragment } from 'react'
// import arabicBooks from './ArabicBooks.json'
import './ArabicBooks.css'
import api_url from '../../env';


function ArabicBooks() {

    const [books, setBooks] = useState([])
    const [filteredBooks, setfilteredBooks] = useState([])
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        fetchArabicBooks()
    }, [])

    useEffect(() => {
        setfilteredBooks(books)
        searchValue === '' ? setfilteredBooks(books) : setfilteredBooks(books.filter(book => book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.category.toLowerCase().includes(searchValue.toLowerCase())))
    }, [books, searchValue])


    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const fetchArabicBooks = async () => {
        await fetch(`${api_url}/books/arabic`)
            .then(res => res.json())
            .then(books => setBooks(books))
    }

    return (

        <div className="container mx-auto arabic">

            <input className='form-control' type="text" value={searchValue} placeholder='ابحث عن اسم او تصنيف كتاب عربي' onChange={handleSearchChange} />

            {
                filteredBooks === [] ? <p className='text-center'>There is no book has this name</p> :
                    filteredBooks.map((book) => (<Fragment key={book._id}>
                        <div className='row text-right'>
                            <img className=" img img-thumbnail col-md-4 col-xs-12 my-4" src={`data:image/png;base64, ${book.image}`} alt={book.name} />
                            <div className="col-md-8 col-xs-12 my-5">
                                <ul key={book.id}>
                                    <li><b>اسم الكتاب: </b>{book.name}</li>
                                    <li><b>المؤلف: </b>{book.author}</li>
                                    <li><b>عدد الصفحات: </b>{book.numberOfPages}</li>
                                    <li><b>لمحة عن الكتاب: </b>{book.overview}</li>
                                    <li><b>التصنيف: </b>{book.category}</li>
                                    <li><b>السعر: </b><del className="text-danger">${book.price}</del> - ${Math.floor(book.price - (0.30 * book.price))}</li>
                                    <li> <button className='btn' data-toggle="modal" data-target="#exampleModalCenter">اشتري الان</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </Fragment>
                    ))
            }


        </div>
    );
};

export default ArabicBooks;
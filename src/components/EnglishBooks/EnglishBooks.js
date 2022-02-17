import React, { useState, useEffect, Fragment } from 'react'
import api_url from '../../env';
// import englishBooks from './EnglishBooks.json'
import './EnglishBooks.css'

function EnglishBooks() {

    const [books, setBooks] = useState([])
    const [filteredBooks, setfilteredBooks] = useState([])
    const [searchValue, setSearchValue] = useState('')



    useEffect(() => {
        fetchEnglishBooks()
    }, [])

    useEffect(() => {
        setfilteredBooks(books)
        searchValue === '' ? setfilteredBooks(books) : setfilteredBooks(books.filter(book => book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.category.toLowerCase().includes(searchValue.toLowerCase())))
    }, [books, searchValue])


    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const fetchEnglishBooks = async () => {
        await fetch(`${api_url}/books/english`)
            .then(res => res.json())
            .then(books => setBooks(books))
    }


    return (

        <div className="row container mx-auto">

            <input className='form-control' type="text" value={searchValue} placeholder='Search for an English Book or Category' onChange={handleSearchChange} />

            {
                filteredBooks === [] ? <p className='text-center'>There is no book has this name</p> :
                    filteredBooks.map((book) => (<Fragment key={book._id}>
                        <img key={book.image} className="img img-thumbnail col-md-4 col-xs-12 my-4" src={`data:image/png;base64, ${book.image}`} alt={book.name} />
                        <div className="col-md-8 col-xs-12 ">
                            <ul key={book._id.toString()}>
                                <li key={book.name}><b>Book name: </b>{book.name}</li>
                                <li key={book.author}><b>Author: </b>{book.author}</li>
                                <li key={book.numberOfPages}><b>Number of pages: </b>{book.numberOfPages}</li>
                                <li key={book.overview}><b>Overview: </b>{book.overview}</li>
                                <li key={book.category}><b>category: </b>{book.category}</li>
                                <li key={book.price}><b>Price: </b><del className="text-danger">${book.price}</del> - ${Math.floor(book.price - (0.30 * book.price))}</li>
                                <li key={`delete${book._id}`}> <button className='btn' data-toggle="modal" data-target="#exampleModalCenter">Buy now</button>
                                </li>
                            </ul>
                        </div>
                        <hr />
                    </Fragment>))
            }


        </div>
    );
};

export default EnglishBooks;
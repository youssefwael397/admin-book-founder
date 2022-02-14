import React, { useState, useEffect } from 'react'
import "./Form.css";
import api_url from "../../env";

export default function EditForm({ editedBook, language }) {


    const [id, setId] = useState(editedBook._id)
    const [name, setName] = useState(editedBook.name)
    const [author, setAuthor] = useState(editedBook.author)
    const [numberOfPages, setNumberOfPages] = useState(editedBook.numberOfPages)
    const [price, setPrice] = useState(editedBook.price)
    const [lang, setLang] = useState(editedBook.lang)
    const [overview, setOverview] = useState(editedBook.overview)

    useEffect(() => {
        if (editedBook) {
            setId(editedBook._id)
            setName(editedBook.name)
            setAuthor(editedBook.author)
            setNumberOfPages(editedBook.numberOfPages)
            setPrice(editedBook.price)
            setOverview(editedBook.overview)
            setLang(language)
        }
    }, [editedBook, language])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);
        form.append("author", author);
        form.append("numberOfPages", numberOfPages);
        form.append("price", price);
        form.append("overview", overview);
        if (lang === "ar") {
            EditBook(`${api_url}/books/arabic/${id}`, form);
        } else {
            EditBook(`${api_url}/books/english/${id}`, form);
        }
    };

    const EditBook = async (url, form) => {
        await fetch(url, { method: "PUT", body: form })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.status === 'ok') {
                    alert(`${name} book 's been updated successfully.`);
                } else {
                    alert(data.error);
                }
            })
    };

    return (
        <div className="my-1">
            <div className="container">
                <div className="form">
                    <div className="form-container">
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Book Name</span>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            name="name"
                                            placeholder="Enter Book Name"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Author Name</span>
                                        <input
                                            type="text"
                                            name="author"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                            placeholder="Enter your Author Name"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Pages</span>
                                        <input
                                            type="number"
                                            name="numberOfPages"
                                            value={numberOfPages}
                                            onChange={(e) => setNumberOfPages(e.target.value)}
                                            placeholder="Enter Number Of Pages"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Price</span>
                                        <input
                                            type="number"
                                            name="price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="Enter Book Price"
                                            required
                                        />
                                    </div>

                                </div>
                                <div className="subj">
                                    <span className="details">Overview</span>
                                    <textarea
                                        type="text"
                                        className="w-100 box-area p-2"
                                        style={{ resize: "none" }}
                                        name="overview"
                                        value={overview}
                                        onChange={(e) => setOverview(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="button">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

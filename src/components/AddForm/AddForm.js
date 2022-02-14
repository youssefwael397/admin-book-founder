import React, { useState, useRef } from "react";
import "./Form.css";
import api_url from "../../env";

export default function AddForm() {

    const name = useRef(null)
    const author = useRef(null)
    const category = useRef(null)
    const numberOfPages = useRef(null)
    const price = useRef(null)
    const image = useRef(null)
    const overview = useRef(null)

    const [lang, setLang] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const imageInput = document.querySelector(".image");
        const actual_image = imageInput.files[0];
        const form = new FormData();
        form.append("name", name.current.value);
        form.append("author", author.current.value);
        form.append("category", category.current.value);
        form.append("image", actual_image);
        form.append("numberOfPages", numberOfPages.current.value);
        form.append("price", price.current.value);
        form.append("overview", overview.current.value);
        if (lang === "ar") {
            CreateBook(`${api_url}/books/arabic/create`, form);
        } else if (lang === 'en') {
            CreateBook(`${api_url}/books/english/create`, form);
        } else {
            alert('you must choose a language.')
        }
    };

    const CreateBook = async (url, form) => {
        await fetch(url, { method: "POST", body: form })
            .then((res) => res.json)
            .then((data) => {
                if (data) {
                    alert("New Book 's been added successfully.");
                } else {
                    alert("Failed to add new book");
                }
            });
    };
    return (
        <div className="my-1">
            <div className="container">
                <div className="form">
                    <div className="form-container">
                        {/* <div className="title">Add a new Book</div> */}
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Book Name</span>
                                        <input
                                            type="text"
                                            ref={name}
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
                                            ref={author}
                                            placeholder="Enter your Author Name"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Pages</span>
                                        <input
                                            type="number"
                                            name="numberOfPages"
                                            ref={numberOfPages}
                                            placeholder="Enter Number Of Pages"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Price</span>
                                        <input
                                            type="number"
                                            name="price"
                                            ref={price}
                                            placeholder="Enter Book Price"
                                            required
                                        />
                                    </div>
                                    <div className="gender-details">
                                        <input
                                            type="radio"
                                            name="lang"
                                            value="en"
                                            id="dot-1"
                                            onClick={() => setLang('en')}
                                        />
                                        <input
                                            type="radio"
                                            name="lang"
                                            value="ar"
                                            id="dot-2"
                                            onClick={() => setLang('ar')}

                                        />
                                        <span className="gender-title">Language</span>
                                        <div className="category">
                                            <label htmlFor="dot-1">
                                                <span className="dot one"></span>
                                                <span className="gender">En</span>
                                            </label>
                                            <label htmlFor="dot-2">
                                                <span className="dot two"></span>
                                                <span className="gender">Ar</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Category</span>
                                        <input
                                            type="text"
                                            name="category"
                                            ref={category}
                                            placeholder="Enter The Category"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        className="form-control image"
                                        id="inputGroupFile02"
                                        name="image"
                                        ref={image}
                                    />
                                    <label className="input-group-text" htmlFor="inputGroupFile02">
                                        Upload book image
                                    </label>
                                </div>
                                <div className="subj">
                                    <span className="details">Overview</span>
                                    <textarea
                                        type="text"
                                        className="w-100 box-area p-2"
                                        style={{ resize: "none" }}
                                        name="overview"
                                        ref={overview}
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

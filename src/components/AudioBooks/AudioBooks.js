import React from 'react'
import './AudioBooks.css'
import audioBook from "./audiobook.jpg"
import ArBooks from './ArBooks/ArBooks';

function AudioBooks() {

    return (
        <div className='container mx-auto'>
            <h1 className='my-3'>Audio Books</h1>

            <div className="row mb-5">

                <p className="lead col-md-6 col-xs-12 mt-4">Some people prefer audio over text for learning and maybe you’re one of them. If you don’t like reading, experiment with audiobooks and see if this helps you with learning.
                    <br /><br /> One of the main advantages of audiobooks is that you can pace the information you consume. I like to play my audiobooks at 1.5x or 2x speed and it doesn’t affect my comprehension. If you want to go through a lot of information, this is a great way to do that.
                </p>

                <img className="img-fluid opacity-1 col-md-6 col-xs-12" src={audioBook} alt="audiobook" />

            </div>

            <hr />

            <ArBooks />
        </div>)
}

export default AudioBooks

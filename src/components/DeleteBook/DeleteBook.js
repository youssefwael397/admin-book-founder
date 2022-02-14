import React from 'react';
import api_url from "../../env";

export default function DeleteBook({ deletedBook, lang }) {

    const handleDelete = async (id) => {
        if (lang === 'en') {
            await fetch(`${api_url}/books/english/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data =>
                    data.status === 'ok' ?
                        (
                            alert(data.data)
                        ) :
                        (
                            alert(data.error)
                        )
                )
        } else {
            await fetch(`${api_url}/books/arabic/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data =>
                    data.status === 'ok' ?
                        (
                            alert(data.data)
                        ) :
                        (
                            alert(data.error)
                        )
                )
        }
    }

    return <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete Confirmation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            `Are you sure you 'll delete ${deletedBook.name} book?`
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(deletedBook.id)} >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

import React from 'react';
import EditForm from './../EditForm/EditForm';
// import api_url from './../../env';

export default function EditBook({ editedBook, lang }) {

    return <div>

        {/* Edit modal */}
        <div
            className="modal fade "
            id="editFormModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="editFormModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered form-modal" >
                <div className="modal-content" style={{ backgroundColor: '#fff' }}> {/* e2e2e2c5 */}
                    <div className="modal-header">
                        <h5 className="modal-title " id="editFormModalLabel">
                            Edit {editedBook ? <span className="text-primary">{editedBook.name}</span> : null} Book
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body" >
                        {
                            editedBook ?
                                <EditForm editedBook={editedBook} language={lang} />
                                : null

                        }
                    </div>
                </div>
            </div>
        </div>

        {/* Edit modal */}
    </div>;
}

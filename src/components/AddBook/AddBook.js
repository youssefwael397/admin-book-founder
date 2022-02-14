import React from 'react';
import AddForm from './../AddForm/AddForm';

export default function AddBook() {
    return <div>
        {/* Add modal */}
        <div
            className="modal fade "
            id="addFormModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="addFormModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered form-modal" >
                <div className="modal-content" style={{ backgroundColor: '#fff' }}> {/* e2e2e2c5 */}
                    <div className="modal-header">
                        <h5 className="modal-title " id="addFormModalLabel">
                            Add New Book
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body" >
                        <AddForm />
                    </div>
                </div>
            </div>
        </div>

        {/* Edit modal */}
    </div>;
}

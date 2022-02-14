import * as React from "react";

import '../AddForm/Form.css';
import AddBook from './../AddBook/AddBook';
import DeleteBook from './../DeleteBook/DeleteBook';
import EditBook from './../EditBook/EditBook';
import TableBooks from './../TableBooks/TableBooks';


export default function StickyHeadTable() {

  const [lang, setLang] = React.useState();
  const [deletedBook, setDeletedBook] = React.useState({});
  const [editedBook, setEditedBook] = React.useState();

  return (
    <div>

      {/* table of books */}
      <TableBooks lang={lang} setLang={setLang} setDeletedBook={setDeletedBook} setEditedBook={setEditedBook} />

      {/* add book */}
      <AddBook />

      {/* edit book */}
      <EditBook editedBook={editedBook} lang={lang} />

      {/* delete modal */}
      <DeleteBook deletedBook={deletedBook} lang={lang} />
    </div >
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from "@mui/material/IconButton";
import api_url from "../../env";


export default function TableForm({ lang, setLang, setIsLoading, setRows }) {
    const fetchBooks = async (lang) => {
        setIsLoading(true);
        if (lang === "en") {
            const new_rows = await fetch(`${api_url}/books/english`)
                .then((res) => res.json())
                .then((books) => books.map((book) => createData(book)));
            setRows([...new_rows]);
        } else if (lang === "ar") {
            const new_rows = await fetch(`${api_url}/books/arabic`)
                .then((res) => res.json())
                .then((books) => books.map((book) => createData(book)));
            setRows([...new_rows]);
        }
        setIsLoading(false);
    };


    React.useEffect(() => {
        if (lang) {
            fetchBooks(lang);
        }
    }, [lang]);



    function createData(book) {
        const { _id, name, author, category, numberOfPages, price, overview } = book;
        return { _id, name, author, category, numberOfPages, price, overview };
    }

    return <div className="d-flex justify-content-between">
        <FormControl className="my-2">
            <RadioGroup
                className="mx-2"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel
                    value="ar"
                    control={<Radio />}
                    label="Ar"
                    onClick={() => setLang("ar")}
                />
                <FormControlLabel
                    value="en"
                    control={<Radio />}
                    label="En"
                    onClick={() => setLang("en")}
                />
            </RadioGroup>
        </FormControl>
        <div>
            <IconButton
                color="primary"
            >
                <CachedIcon className="fs-1 mx-2" onClick={() => fetchBooks(lang)} />
            </IconButton>
            <IconButton
                color="primary"
                data-bs-toggle="modal"
                data-bs-target="#addFormModal"
            >
                <AddCircleIcon className="fs-1 mx-2" />
            </IconButton>

        </div>
    </div>;
}

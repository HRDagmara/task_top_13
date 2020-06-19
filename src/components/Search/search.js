import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import styles from "./_search.scss";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Search = () => {
    return (
        <section className={styles}>
            <div className="box-search">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon"> <FaBars /></InputGroup.Text>
                        <InputGroup.Text className="category">Kategorie produktów</InputGroup.Text>
                    </InputGroup.Prepend>
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                    <FormControl className="form"
                        placeholder="Wpisz czego szukasz"
                    />
                    <InputGroup.Text><button class="btn btn-danger" type="button">Szukaj</button></InputGroup.Text>
                </InputGroup>
            </div>
        </section>
    )
}

export default Search;

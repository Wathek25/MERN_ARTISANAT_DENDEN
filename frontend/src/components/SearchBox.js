import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBox = (props) => {
  const [nom, setNom] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/nom/${nom}`);
  };
  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <FormControl
        placeholder="Recherche"
        type="Search"
        className="me-2"
        nom="q"
        id="q"
        aria-label="Search"
        onChange={(e) => setNom(e.target.value)}
      ></FormControl>
      <Button type="submit" variant="outline-light">
        Rechercher
      </Button>
    </Form>
  );
};

export default SearchBox;

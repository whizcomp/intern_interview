import React, { useState } from "react";
import { Formik } from "formik";
import Results from "./Results";
import { getSearch } from "../Services/backend";
export default function Search() {
  const [data, setData] = useState([]);
  const getMovie = async title => {
    const { data } = await getSearch(title);
    data.Response && setData(data.Search);
  };

  return (
    <div className="container">
      <div className="text-center pt-3">
        <Formik
          initialValues={{ name: "" }}
          onSubmit={values => getMovie(values.name)}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <input
                placeholder="search for a movie"
                type="text"
                onChange={e => {
                  props.handleChange(e);
                  props.handleSubmit(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button className="btn btn-info ms-1 btn-sm" type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Results movies={data} />
    </div>
  );
}

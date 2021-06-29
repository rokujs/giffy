import React from "react";
import { Link } from "wouter";

const Category = ({ options = [] }) => {
  return (
    <div className="col-start-2 col-end-3 row-start-2 row-end-3">
      <h4 className=" text-2xl text-yellow-400">Most popular gifs</h4>
      <ul className="list-inside bg-rose-200 text-yellow-200 text-lg mt-8">
        {options.map((link) => (
          <li className="mb-4" key={link}>
            <Link className="hover:underline" to={`/search/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

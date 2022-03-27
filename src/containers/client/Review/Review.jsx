import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import React, { useState } from "react";
import people from "./data";
import "./Review.scss";


export default function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
  
    const next = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        if (newIndex > people.length - 1) return 0;
        return newIndex;
      });
    };
    const prev = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        if (newIndex < 0) return people.length - 1;
        return newIndex;
      });
    };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2 className="title1"> Our review </h2>
          <div className="underline"></div>
        </div>
        <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={next}>
          <FaChevronLeft /> 
        </button>
        <button className="next-btn" onClick={prev}>
          <FaChevronRight />
        </button>

      </div>
    </article>
      </section>
    </main>
  );
}

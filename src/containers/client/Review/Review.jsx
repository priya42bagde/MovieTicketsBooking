
import { FaGithubSquare } from "react-icons/fa";
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
  
    const random = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      setIndex((index) => {
        if (randomNumber < 0) return people.length - 1;
        if (randomNumber > people.length - 1) return 0;
        return randomNumber;
      });
    };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> Our review </h2>
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
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>

      </div>
    </article>
      </section>
    </main>
  );
}

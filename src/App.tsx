import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const nextReview = () => {
    setIndex((index + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((index - 1 + reviews.length) % reviews.length);
  };

  const randomReview = () => {
    const newIndex = Math.floor(Math.random() * reviews.length);

    if (index == newIndex) {
      setIndex((newIndex + 1) % reviews.length);
      return;
    }

    setIndex(newIndex);
  };

  return (
    <main>
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
          <FaChevronLeft className="prev-btn" onClick={prevReview} />
          <FaChevronRight className="next-btn" onClick={nextReview} />
        </div>
        <button className="btn btn-hipster" onClick={randomReview}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;

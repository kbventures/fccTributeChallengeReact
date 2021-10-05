import React from 'react';
import timFerrisBook from '../img/4 Hour Work Week.jpg';

function Book() {
  return (
    <div className="book">
      <a
        className="book__link"
        href="https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357"
        target="noopener noreferrer"
      >
        <img
          className="book__img"
          src={timFerrisBook}
          alt="4 Hour Work Week Book"
        />
      </a>
    </div>
  );
}

export default Book;

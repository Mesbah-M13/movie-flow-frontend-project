import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/images/pagenotfound.png";
import { Button } from "../components/Button";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / MovieFLow`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          '/* Display 404 text */'
          <p className="text text-7xl text-gray-700 font-semibold my-10 dark:text-white ">
            404, Page not found
          </p>
          <div className="max-w-lg">
            '/* Display Image */'
            <img className="rounded" src={pageNotFound} alt="page not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          '/* Display button to go home */'
          <Link to="/">
            <Button>Back to MovieFlow</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParmas] = useSearchParams();
  const queryTerm = searchParmas.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-4">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Result Found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}{" "}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

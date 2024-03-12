import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../component/MatchDetailCard";
import { useParams } from "react-router-dom";
import "./MatchPage.scss";
import { YearSelector } from "../component/YearSelector";

import { Navigation } from "../component/Navigation";
import Footer from "../component/Footer";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );

      const data = await response.json();

      setMatches(data);
    };

    fetchMatches();
  }, [teamName, year]);

  // if (!year) return <h1>Team Not Avilable</h1>;

  return (
    <div>
      <Navigation />
      <div className="MatchPage text-xl">
        <div className="year-selector">
          <h3> Select Year </h3>
          <YearSelector teamName={teamName} />
        </div>
        <div className="text-2xl">
          <h1 className="page-heading">
            {teamName} matches in {year}
          </h1>
          {matches.map((match) => (
            <MatchDetailCard key={match.id} teamName={teamName} match={match} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

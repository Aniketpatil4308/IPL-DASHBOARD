import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MatchDetailCard } from "../component/MatchDetailCard";
import { MatchSmallCard } from "../component/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import "./TeamPage.scss";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Navigation } from "../component/Navigation";
import Footer from "../component/Footer";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);

      const data = await response.json();

      setTeam(data);
    };

    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team Not Found</h1>;
  }
  return (
    <div>
      <Navigation />
      <div className="TeamPage">
        <div className="team-name-section">
          <h1 className="team-name ">{team.teamName}</h1>
        </div>
        <div className="win-loss-section text-xl">
          Wins / Losses
          <PieChart
            data={[
              {
                title: "Losses",
                value: team.totalMatches - team.totalWins,
                color: "#a34d5d",
              },
              {
                title: "Wins",
                value: team.totalWins,
                color: "#4da375",
              },
            ]}
          />
        </div>
        <div className="match-detail-section">
          <div className="text-2xl font-sans pb-6">Latest Matches</div>
          <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
        </div>

        {team.matches.slice(1).map((match) => (
          <MatchSmallCard
            key={match.id}
            teamName={team.teamName}
            match={match}
          />
        ))}

        <div className="more-link">
          <div>
            <Link
              to={`/teams/${teamName}/matches/${
                import.meta.env.VITE_APP_DATA_END_YEAR
              }`}
            >
              <div className=" flex justify-center items-center ">
                <div className="more-link flex  text-3xl mr-2">More</div>

                <div className="arrow-img">
                  <BsFillArrowRightCircleFill />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

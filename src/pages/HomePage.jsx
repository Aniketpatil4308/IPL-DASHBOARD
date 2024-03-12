import { React, useEffect, useState } from "react";
import "./HomePage.scss";
import { TeamTile } from "../component/TeamTile";
import { Navigation } from "../component/Navigation";
import Footer from "../component/Footer";
import SocialMedia from "../component/SocialMedia";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(`http://localhost:8080/team`);
      const data = await response.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  // if (!teams) return <h1>Teams Not Avilable</h1>;

  return (
    <>
      <Navigation />
      <div>
        <div className="text-3xl py-3 text-center mt-5">IPL Matches</div>
        <div className="HomePage text-2xl py-4 ">
          <div className="team-grid shadow-xl rounded-md ">
            {teams.map((team) => (
              <TeamTile key={team.id} teamName={team.teamName} />
            ))}
          </div>
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};

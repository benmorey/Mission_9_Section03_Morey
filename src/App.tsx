import React from "react";
import teamsData from "./CollegeBasketballTeams.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Header() {
  return (
    <div className="container bg-dark text-light sticky-top">
      <header className="d-flex justify-content-center py-3">
        <h1 className="display-3">
          Hello User! Welcome to my Mission#9 Website!
        </h1>
      </header>
      <h3 className="display-5">Basketball Team List:</h3>
    </div>
  );
}

class SingleCard extends React.Component<{ team: Team }> {
  render() {
    const t = this.props.team;
    return (
      <div className="card">
        <h1 className="display-4">Team Name: {t.school}</h1>
        <h4 className="display-6">Mascot Name: {t.name}</h4>
        <h4 className="display-6">
          Location: {t.city}, {t.state}
        </h4>
      </div>
    );
  }
}

function CombinedList() {
  const list: { teams: Team[] } = teamsData; // Define the type of teams
  return (
    <div className="container mt-4">
      <div className="App">
        {list.teams.map((t) => (
          <>
            <SingleCard team={t} />
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <CombinedList />
    </div>
  );
}

export default App;

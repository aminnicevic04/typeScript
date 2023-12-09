import React from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoal title="learn react + TS">
        <p>learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;

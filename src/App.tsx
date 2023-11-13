import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";

function App() {
  return (
    <main>
      <CourseGoal
        title="lear react + TS"
        // description="learn it from the ground up"
      >
        <p>learn it from the ground up</p>{" "}
      </CourseGoal>
    </main>
  );
}

export default App;

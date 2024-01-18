import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App"; //menjam mu ime zato sto ne moze da se zove tip kao komponenta

type CourseGoalLisProps = {
  goals: CGoal[];
};

function CourseGoalList({ goals }: CourseGoalLisProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;

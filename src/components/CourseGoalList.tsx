import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App"; //menjam mu ime zato sto ne moze da se zove tip kao komponenta

type CourseGoalLisProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalLisProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;

// import {type ReactNode } from "react";
import { type PropsWithChildren } from "react";
// import { type FC, type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   // description: string;
//   children: ReactNode;
// };

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => { //second way
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
  //first way
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;

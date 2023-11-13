// import {type ReactNode } from "react";
import { type PropsWithChildren } from "react";
// import { type FC, type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   // description: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{ title: string }>;

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

function CourseGoal({ title, children }: CourseGoalProps) {
  //first way
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;

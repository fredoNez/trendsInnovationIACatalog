import { SiDjango, SiAngular, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import styles from "./TemplateStack.module.scss";

const technologies = [
  {
    label: "Template 1: Full Stack Web App",
    frontEnd: `Angular 17`,
    backend: `Django`,
    frontEndIcon: <SiAngular />,
    backendIcon: <SiDjango />
  },
  {
    label: "Template 2: Next App",
    frontEnd: `Next.js`,
    backend: ` Node.js`,
    frontEndIcon: <SiNextdotjs />,
    backendIcon: <SiNodedotjs />
  },
];

const TemplateStack = () => {
  return (
    <div className={styles.stack}>
      {technologies.map((row, i) => (
        <div className={styles.row} key={i}>
          <span>{row.label}</span>
          <div className={styles.technologies}>
            <span>{row.frontEndIcon} {row.frontEnd}</span>
            <span>{row.backendIcon} {row.backend}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateStack;

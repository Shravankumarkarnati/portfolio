export interface ProjectType {
  name: string;
  description: string;
  tools: string[];
  code: string | string[];
  live: string | null;
  image?: string;
}

export const projectData: ProjectType[] = [
  {
    name: "Coterie",
    description: "Reddit Clone - Full Stack (PERN) Application.",
    tools: [
      "NextJs",
      "TypeScript",
      "Apollo GraphQL",
      "PostgreSQL",
      "Styled-Components",
      "Redis",
      "TypeORM",
      "Express",
      "SCSS",
      "Session Based Management",
    ],
    live: "https://themutant.store/",
    image: "Corterie",
    code: "https://github.com/Shravankumarkarnati?tab=repositories&q=reddit&",
  },
  {
    name: "Regale",
    description:
      "Regale is a recipe search web application using Spoonacular food API.",
    tools: ["React", "Redux", "React Router", "Styled Components", "SCSS"],
    live: "https://regale-heroku.herokuapp.com/",
    code: "https://github.com/Shravankumarkarnati/Regale",
    image: "Regale",
  },
  {
    name: "Travel Log",
    description:
      "Travel Log is a Full Stack (MERN) Application for logging places visited.",
    tools: [
      "React",
      "TypeScript",
      "MongoDB",
      "ExpressJS",
      "JWT Authentication",
      "Context API",
      "React Hooks",
      "SCSS",
    ],
    live: "https://travel-log-clint.herokuapp.com/",
    code:
      "https://github.com/Shravankumarkarnati?tab=repositories&q=travelLog-&type=&language=typescript",
    image: "TravelLog",
  },
  {
    name: "shorts",
    description:
      "Shorts is a collection of mini projects I built using various technologies in the field of web development.",
    live: "https://shravankumarkarnati.github.io/shorts/",
    code: "https://bitbucket.org/ShravanKarnati/shorts/src/master/",
    tools: ["HTML", "SCSS", "Angular", "javascript", "React", "Webpack"],
    image: "Shorts",
  },
  {
    name: "A-STAR ALGORITHM",
    description:
      "Written in Python, this is a graph search visualization of A-Star algorithm.",
    live: null,
    code: "https://github.com/Shravankumarkarnati/A-Star-Algorithm",
    tools: ["Python", "Matplotlib", "Numpy", "Seaborn"],
    image: "Star",
  },
  {
    name: "Automate Me!",
    description:
      "Automate Me! is about automating real-world incident response tasks at a Security Operations Centre, where a Security Analyst must detect the potentially infected device and its user in an organization where they have hundreds of thousands of users.",
    live: null,
    code: "https://github.com/Shravankumarkarnati/AutomateMe",
    tools: ["Python", "MySQL", "XML"],
  },
  {
    name: "CREDIT CARD FRAUD DETECTION",
    description:
      "The goal was to implement two different machine learning models in order to classify, to the highest possible degree of Sensitivity and Specificity, credit card fraud from a dataset. After initial data exploration, we knew we would implement a logistic regression model and a neural network.",
    live: null,
    code: "https://bitbucket.org/ShravanKarnati/credit-card-fraud-detection/",
    tools: [
      "Python",
      "Matplotlib",
      "Pandas",
      "Numpy",
      "Sklearn",
      "Seaborn",
      "Logistic Regression",
      "Neural Networks",
    ],
  },
  {
    name: "INTERNET USER PROFILING",
    description:
      "Demonstration : If the Internet usage of each subject is statistically indistinguishable when compared to the Internet usage of the same subject over time, while simultaneously being statistically distinguishable when compared to Internet usage of other subjects. Subsequently, we want to study how the time window chosen for profiling affects the answer to the above problem.",
    live: null,
    code: "https://github.com/Shravankumarkarnati/Internet-User-Profiling",
    tools: ["Python", "MySQL", "Pandas", "Numpy", "Scipy"],
  },
];

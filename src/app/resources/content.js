import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Jari",
  lastName: "Scholten",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist",
  avatar: "/images/ProfilePic.jpg",
  email: "jari.scholten@gmail.com",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Dutch", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JariScholten",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jari-scholten-2a3a56117/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data. Code. Insight.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
        Hi, I’m Jari, a curious and creative data science enthusiast who loves turning messy data into clear, actionable insights. 
        <br/>I’ve worked on projects that span machine learning, data visualization, and statistical analysis, and I enjoy exploring how data can tell stories and solve real-world problems. 
        <br/>Whether it's predicting trends, building models, or just diving deep into a new dataset, I’m always excited to learn and grow. 
        <br/>This portfolio is a collection of some of my favorite projects—each one a step in my journey through the world of data.

    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jari is a curious and creative data science enthusiast with a passion for turning messy data into clear, actionable insights. 
        His work spans machine learning, data visualization, and statistical analysis, with a strong focus on solving real-world problems through data. 
        Always eager to explore new tools and techniques, he enjoys diving deep into datasets, uncovering patterns, and building models that drive understanding. 
        This portfolio showcases a selection of his favorite projects, each reflecting his growth, curiosity, and love for data.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IntoAnalytics",
        timeframe: "2022 - Present",
        role: "Data Scientist",
        achievements: [
          <>
            At IntoAnalytics I focused on performing prescriptive,
            descriptive, and predictive analysis. My work involved analyzing
            data to provide actionable insights, using various analytical
            models and techniques. I was responsible for driving the
            analysis that informed decision-making, ensuring accurate
            and relevant results for the business. My role as Data Engineer
            within IntoData added to this role for a complete data project
            cycle.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "IntoData",
        timeframe: "2021 - Present",
        role: "Data Engineer",
        achievements: [
          <>
            At IntoData I worked as a data engineer where I was
            responsible for designing, developing, and maintaining robust
            data infrastructure and systems. My tasks included enabling
            the efficient collection, storage, processing, and analysis of
            large volumes of data. I built data pipelines, integrated various
            data sources, transformed raw data into usable formats, and
            ensured the quality and integrity of the data.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Philips",
        timeframe: "2022 - 2023",
        role: "Research & Development Intern",
        achievements: [
          <>
            Conducted paper research to stay updated on the
            latest computer vision techniques.
          </>,
          <>
            Annotated datasets to ensure high-quality input for
            model training.
          </>,
          <>
            Developed and programmed computer vision
            algorithms to be deployed in production
            environments.
          </>,
          <>
            Tested and refined algorithms to improve accuracy
            and efficiency.
          </>,
          <>
            Gained experience in working within a large corporate
            structure, contributing to real-world projects.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "IntoData",
        timeframe: "2021 - 2021",
        role: "Data Science Intern",
        achievements: [
          <>
             Set up CI/CD pipelines to streamline development
             and deployment processes.
          </>,
          <>
            Developed and tested machine learning models for
            predicting football game outcomes.
          </>,
          <>
            Conducted data cleaning and preprocessing to
            ensure high-quality datasets.
          </>,
          <>
            Performed data analysis to derive insights and
            improve model accuracy.
          </>,
          <>
            Programmed and tested various components to
            integrate machine learning operations within the
            company’s infrastructure.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Lamb Weston Meijer",
        timeframe: "2019 - 2020",
        role: "Data Science Intern",
        achievements: [
          <>
             Developed a sales prediction model to forecast client
             demand in Italy.
          </>,
          <>
            Analyzed historical sales data to identify trends and
            patterns.
          </>,
          <>
             Provided insights to help LWM make more accurate
             decisions regarding product inventory.
          </>,
          <>
             Collaborated with cross-functional teams to ensure
              the model aligned with client needs and business
              objectives.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Tilburg University",
        description: <>Msc, Data Science and Society</>,
      },
      {
        name: "Fontys Hogeschool Eindhoven",
        description: <>Bachelor's degree, ICT and Data Science</>,
      },
      {
        name: "Scalda Vlissingen",
        description: <>MBO degree, Software Development</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Able to write Python code</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Docker",
        description: <>Able to write Python code</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Agile",
        description: <>Able to write Python code</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "API Development",
        description: <>Able to write Python code</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Machine learning libraries such as: Tensorflow, Pytorch, Scikit-Learn",
        description: <>Able to write Python code</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "MLOPS",
        description: <>Able to write Python code</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Computer Vision",
        description: <>Experience building computer vision pipelines.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/IntoAnalytics 8.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0111.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0869.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_1051.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_8738.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

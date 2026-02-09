import { FaCode, FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      {/* bi section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Front-End Developer with over three years of
          experience building modern, responsive, and user-friendly web
          applications. I work mainly with JavaScript, TypeScript, React and
          Next.js, focusing on clean and maintainable code.
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React / Next.js</li>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaTools className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>TanStack Query</li>
              <li>React Hook Form</li>
              <li>Redux Toolkit</li>
              <li>shadcn/ui</li>
            </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold mb-3">
              B.Sc. in Chemistry – Islamic Azad University, Shiraz
            </h3>
            <p className="text-secondary font-bold">
              Strong analytical and problem-solving background
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

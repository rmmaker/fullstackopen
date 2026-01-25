const Header = ({ text }) => <h1>{text}</h1>;

const Part = ({ title, exercises }) => (
  <p>
    {title}: {exercises}
  </p>
);

const Content = ({ parts }) => {
  return parts.map((part) => (
    <Part key={part.id} title={part.name} exercises={part.exercises} />
  ));
};

const Total = ({ parts }) => (
  <p>
    Total: {parts.reduce((total, { exercises }) => total + exercises, 0)}{" "}
    exercise(s)
  </p>
);

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;

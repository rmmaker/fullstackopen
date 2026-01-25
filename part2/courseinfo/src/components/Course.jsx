const Header = ({ text }) => <h2>{text}</h2>;

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
    <b>
      Total: {parts.reduce((total, { exercises }) => total + exercises, 0)}{" "}
      exercise(s)
    </b>
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

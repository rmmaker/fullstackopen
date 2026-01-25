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

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;

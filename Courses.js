import './Courses.css';

function Courses () {
  return (
    <section id="courses">
      <h2>Popular Courses</h2>
      <div className="courses-container">
        <div className="course">
          <h3>Web Development</h3>
          <p>Learn HTML, CSS, JavaScript and more.</p>
        </div>
        <div className="course">
          <h3>Data Science</h3>
          <p>Master Python, Machine Learning and AI.</p>
        </div>
        <div className="course">
          <h3>Graphic Design</h3>
          <p>Adobe Photoshop, Illustrator and more.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;

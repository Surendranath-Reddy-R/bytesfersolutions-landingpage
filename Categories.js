import './Categories.css';

function Categories () {
  return (
    <section id="categories">
      <h2>Top Categories</h2>
      <div className="categories-container">
        <div className="category">
          <h3>Development</h3>
        </div>
        <div className="category">
          <h3>Business</h3>
        </div>
        <div className="category">
          <h3>Design</h3>
        </div>
      </div>
    </section>
  );
}

export default Categories;

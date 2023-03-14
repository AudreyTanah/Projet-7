import "../Tags/index.css";

function Tags({ tags }) {//Props tags dans LodgingPage.jsx
  return (
    <div className="containerTag">
      {tags.map((tag) => {
        return (
          <span key={tag} className="tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;

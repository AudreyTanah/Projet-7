import "../Tags/index.css";

function Tags({ tags }) {
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

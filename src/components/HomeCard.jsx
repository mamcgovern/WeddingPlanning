import { Link } from "react-router-dom";

function HomeCard({ title, description, path }) {
  return (
    <Link to={path} className="home-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span aria-hidden="true">View details →</span>
    </Link>
  );
}

export default HomeCard;
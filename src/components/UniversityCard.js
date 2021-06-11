import PropTypes from 'prop-types'
import './UniversityCard.css'
import { Link } from 'react-router-dom'

function UniversityCard(props) {
  return (
    <div className="university-card">
      <h2 className="university-mark">{props.mark}</h2>
      <div key={props.name} className="university-card-content">
        <h3>
          <Link to={props.name}>{props.name}</Link>
        </h3>
      </div>
    </div>
  );
}

UniversityCard.propTypes = {
  mark: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  web_pages: PropTypes.array.isRequired,
  state: PropTypes.string
}

export default UniversityCard;

import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Details.css'

function Details(props) {

  const { uName } = useParams()

  const currUniversity = props.data.filter(el => el.name === uName)[0]

  if ( !currUniversity ) {
    return (<h4>Fetching Universities...</h4>)
  }

  return (
    <div className="details">
      <div className="details-inner">
        <div className="university-details">
          <h1>{currUniversity.name} </h1>
          <h2>Country: {currUniversity.country || 'N/A'} {currUniversity.alpha_two_code &&
          <span>({currUniversity.alpha_two_code})</span>}</h2>
          <h2>State: {currUniversity['state-province'] || 'N/A'}</h2>
          {currUniversity.web_pages && currUniversity.web_pages.length &&
            (<><span>Visit on: </span> <h3>{currUniversity.web_pages.map(el => (<a key={el} href={el}>{el}</a>))}</h3></>)}
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  data: PropTypes.array.isRequired
}

export default Details;

// eslint-disable-next-line no-unused-vars
import UniversityCard from './UniversityCard'
import './Home.css'
import PropTypes from 'prop-types'
import { changeSelectedPage } from '../redux/actions'
import { store } from '../redux/store'


const getPaginationData = (dataLength) => {
  const totalNumberOfUniversities = dataLength;
  const PER_PAGE_SIZE = 10;

  return {
    totalPages: Math.ceil(totalNumberOfUniversities / PER_PAGE_SIZE)
    , pageSize: PER_PAGE_SIZE
  }
}

function PaginationBar(props) {

  const changePageSelection = (page) => store.dispatch(changeSelectedPage(page))
  const paginationData = getPaginationData(props.dataLength)

  return (
    <div className="pagination-bar">
      <select className="pagination-selection" name="Select the page:" onChange={(evt) => {
        changePageSelection(Number(evt.target.value))
      }} value={props.page}>
        {Array(paginationData.totalPages).fill(0).map((el, index) => (
          <option key={index} value={index}> {index + 1}</option>
        ))}
      </select>

      <div>
        <span>You're seeing {(props.page || 0) + 1} out of {paginationData.totalPages} Pages</span>
        <span> (Displaying {paginationData.pageSize} records per page)</span>
      </div>
    </div>
  )
}

PaginationBar.propTypes = {
  dataLength: PropTypes.number.isRequired,
  page: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired
}


function Home(props) {

  const data = props.data.concat();

  const getPaginatedData = (page) => {
    const { pageSize } = getPaginationData();

    const currPosition = page * pageSize;
    return data.slice(currPosition, currPosition + pageSize)
  }

  if ( !data || !data.length ) {
    return (<h4>Fetching Universities...</h4>)
  }

  return (
    <div className="home">
      <PaginationBar dataLength={data.length} page={props.page}/>
      <div className={"university-list"}>

        {getPaginatedData(props.page).map((university) => (
            (<UniversityCard mark={university.mark} key={university.name}
                             name={university.name}
                             country={university.country}
                             state={university['state-province']}
                             web_pages={university.web_pages}/>)
          )
        )}
      </div>
    </div>
  );
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired
}

export default Home;

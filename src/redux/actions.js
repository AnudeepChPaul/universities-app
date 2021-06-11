import { CHANGE_SELECTED_PAGE, INIT_UNIVERSITIES } from './types'

async function fetchUniversities() {
  const response = await fetch('http://universities.hipolabs.com/search?country=india')
  return await response.json()
}

export const changeSelectedPage = (page) => {
  return dispatch => dispatch(changeSelectedPageAction(page))
}

export const initUniversities = () => {
  return dispatch => {

    fetchUniversities().then(resp => {
      dispatch(initUniversitiesAction(resp.map((el, index) => ({
        ...el,
        mark: index + 1
      }))))
    })
  };
};

const initUniversitiesAction = universities => ({
  type: INIT_UNIVERSITIES,
  payload: {
    universities: universities
  }
})

const changeSelectedPageAction = page => ({
  type: CHANGE_SELECTED_PAGE,
  payload: {
    page
  }
})
import { render, screen } from '@testing-library/react';
import Details from './Details'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const data = [ {
  "state-province": "Punjab",
  "web_pages": [ "http://www.davietjal.org/" ],
  "alpha_two_code": "IN",
  "country": "India",
  "name": "DAV Institute of Engineering & Technology",
  "domains": [ "davietjal.org" ]
}, {
  "state-province": "Punjab",
  "web_pages": [ "http://www.lpu.in/" ],
  "alpha_two_code": "IN",
  "country": "India",
  "name": "Lovely Professional University",
  "domains": [ "lpu.in" ]
} ]

test('renders the details component', () => {
  const history = createMemoryHistory()
  history.push(encodeURI("/DAV Institute of Engineering & Technology"))

  render(<Router history={history}>
    <Details data={data}/>
  </Router>);
  const nameEl = screen.getByText(/Fetching Universities.../i);
  expect(nameEl).toBeInTheDocument();
});

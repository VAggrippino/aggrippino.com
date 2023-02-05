import {render, within, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

const {getByRole} = render(<Home />)
const main = getByRole('main')
const regions = within(main).getAllByRole('region')

it('has the profile picture', () => {
  const profile_picture = within(main).getByRole('figure')
  expect(profile_picture.classList.contains('profile_picture'))
})

it('has an intro with a heading and 1 or more paragraphs', () => {
  const intro = regions.filter(region => region.classList.contains('intro'))[0]

  expect(intro.classList.contains('intro'))
  expect(within(intro).getByRole('heading', {level: 2}))
  
  /* This doesn't work. There seems to be some community disagreement about the
   * <p> element's implicit ARIA role of "paragraph" */
  //expect(within(intro).getAllByRole('paragraph'))

  // This is ugly, but it doesn't require me to add non-semantic elements or
  // test IDs that I'll forget to use when I change the content in the future
  intro.querySelectorAll('p').length > 0
})

it('has the technology list', () => {
  const tech = regions.filter(region => region.classList.contains('tech'))[0]
  expect(tech).toBeDefined()

  const tech_list = within(tech).getByRole('list')
})
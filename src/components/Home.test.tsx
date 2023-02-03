import {render, within, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

const {getByRole} = render(<Home />)
const main = getByRole('main')

it('has the intro', () => {
  const intro = within(main).getByRole('region')
})

// it('has the technology cards', () => {

// })
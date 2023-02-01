import {render, within, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

it('has the page header', () => {
  // Arrange
  const {getByRole} = render(<Header />)
  const header = getByRole('banner')
  const logo_link = within(header).getByRole('link')

  // Act

  // Assert
  expect(logo_link.classList.contains('logo')).toBe(true)
  expect(within(logo_link).getByRole('img'))
  expect(within(header).getByRole('heading', { level: 1 }))
})

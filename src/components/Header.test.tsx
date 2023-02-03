import {render, within, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

it('has the page header with branding and navigation', () => {
  // Arrange
  const {getByRole} = render(<Header />)
  const header = getByRole('banner')
  const logo_link = (within(header).getAllByRole('link'))[0]
  const nav = within(header).getByRole('navigation')

  // Act

  // Assert
  // Logo / Branding
  expect(logo_link.classList.contains('logo')).toBe(true)
  expect(within(logo_link).getByRole('img'))

  // Page title
  expect(within(header).getByRole('heading', { level: 1 }))

  // Navigation
  expect(within(nav).getAllByRole('link'))

})

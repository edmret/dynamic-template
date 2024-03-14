import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import AppHeader from '../AppHeader'

test('App Header is rendered correctly', async () => {
  // ARRANGE
  render(<AppHeader />)
  expect(screen.getAllByText('Notification Test')).toBeDefined()
})

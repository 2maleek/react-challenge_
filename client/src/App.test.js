import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import App from './App'

it("renders correctly", () => {
  const { getByText } = render(<App />)
  const pageTitle = getByText(/Popular Movie/i)
  const navMyFav = getByText(/My Favorite/i)

  expect(pageTitle).toBeInTheDocument()
  expect(navMyFav).toBeInTheDocument()
})



it("renders correctly Home page again", () => {
  const { getByText, getByTestId } = render(<App />)
  const homeBtn = getByTestId('homeBtn')
  fireEvent.click(homeBtn)
  const pageTitle = getByText(/Popular Movie/i)
  expect(pageTitle).toBeInTheDocument()
})

it("renders correctly my Favorite page", () => {
  const { getByText, getByTestId } = render(<App />)
  const myFavBtn = getByTestId('myFavBtn')
  fireEvent.click(myFavBtn)
  const pageTitle = getByText(/My Favorite/i)
  const elFav = getByText(/Favorite is empty/i)
  expect(elFav).toBeInTheDocument()
  expect(pageTitle).toBeInTheDocument()
})
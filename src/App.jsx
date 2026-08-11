import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Navigation from "./component/layouts/Navigation"

import Home from "./pages/Home"
import { HelmetProvider } from "react-helmet-async"
import Error from "./pages/Error"
import { Provider } from "react-redux"
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='*' element={<Error />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  )

}

export default App

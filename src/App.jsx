import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Navigation from "./component/layouts/Navigation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Home from "./pages/Home"
import { HelmetProvider } from "react-helmet-async"
import Error from "./pages/Error"
import { Provider } from "react-redux"
import store from './redux/store'
import Menu from "./pages/Menu"
import DishCart from "./pages/DishCart"
import Checkout from "./pages/Checkout"
import About from './pages/About';
import BookTable from "./pages/BookTable"



function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About/>} />
              <Route path="/booktable" element={<BookTable/>} />
              <Route path="/dishcart" element={<DishCart />} />
              <Route path="/checkout" element={<Checkout/>} />
              
              <Route path='*' element={<Error />} />

            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </HelmetProvider>
    </Provider>
  )

}

export default App

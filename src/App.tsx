import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { Store } from "./pages/store"
import { About } from "./pages/about"
import { Navbar } from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/checkout"
import { ProductPage } from "./pages/productPage"




function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
     <Container className="mb-4">
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path= "/store" element= {<Store />} />
        <Route path= "/about" element= {<About />} />
        <Route path= "/checkout" element= {<Checkout />} />
        <Route path= "/productPage/:id" element= {<ProductPage />} />


    </Routes>
  </Container>
  </ShoppingCartProvider>
  )
}

export default App

import Home from "./components/Home"
import NavBar from "./components/Navbar.js"
import Create from "./components/Create"
import BlogDetails from "./components/BlogDetails"
import NotFound from "./components/NotFound"

import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom/cjs/react-router-dom"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"

const App = () => {
   return (
      <Router>
         <div className="App">
            <NavBar />
            <div className="content">
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/create">
                     <Create />
                  </Route>
                  <Route path="/blogs/:id">
                     <BlogDetails />
                  </Route>
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
            </div>
         </div>
      </Router>
   )
}

export default App

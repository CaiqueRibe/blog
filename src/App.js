import Home from "./Home"
import NavBar from "./Navbar"

// export default function App() {
//    return (
//       <div className="App">
//          <div className="content">
//             <h1>App Component</h1>
//          </div>
//       </div>
//    )
// }

// export default App

const App = () => {
   //  const title = "Welcome to the my new Blog"
   //  const likes = 50
   //  //  const testBool = false
   //  //  const person = { name: "caique", age: 30 }
   //  //  console.log(testBool)
   //  const link = "https://www.google.com/"

   return (
      <div className="App">
         <NavBar />
         <div className="content">
            {/* <h1>{title}</h1>
            <p>Liked {likes} times</p> */}
            {/* {console.log(testBool)} */}
            {/* <p>Bool Test {testBool} </p> */}
            {/* <p>Bool Test {person} </p> */}
            <Home />
            {/* <p>{10}</p>
            <p>"Hello Ninjas"</p>
            <p>{"Hello Ninjas"}</p>
            <p> {[1, 2, 3, 4, 5]} </p>
            <p>{Math.random() * 10}</p> */}

            {/* <a href="https://www.google.com/">Google</a> */}
            {/* <a href={link}>Google</a> */}
         </div>
      </div>
   )
}

export default App

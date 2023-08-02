const Home = () => {
   const handleClick = (e) => {
      // naming convention
      console.log("Hello Ninjas", e)
   }

   const handleClickButton2 = (name, e) => {
      console.log("Hello " + name, e.target) //e.target = <button>CLick me too</button>
   }

   return (
      <div className="home">
         <h2>Homepage</h2>
         <button onClick={handleClick}>Click Me</button>{" "}
         {/* function reference vs invoke function  */}
         <button onClick={(e) => handleClickButton2("Caique", e)}>
            Click me Too
         </button>
         {/* so instead of passing something as a paremeter we would use a wrap of a annoynymous function, not invoking it... */}
      </div>
   )
}

export default Home

import { useEffect, useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
   const [blogs, setBlogs] = useState(null)
   // {
   //    title: "My new teste1",
   //    body: "lorem ipsum...",
   //    author: "mario",
   //    id: 1,
   // },
   // {
   //    title: "My new teste2",
   //    body: "lorem ipsum...",
   //    author: "yoshi",
   //    id: 2,
   // },
   // {
   //    title: "My new teste3",
   //    body: "lorem ipsum...",
   //    author: "mario",
   //    id: 3,
   // },

   const [name, setName] = useState("mario")

   const handleDelete = (id) => {
      // const newBlogs = blogs.filter((blog) => blog.id !== id)
      // setBlogs(newBlogs)

      setBlogs((currentBlogs) => {
         const teste2 = [...currentBlogs]
         const teste = teste2.findIndex((e) => e.id === id)

         if (teste !== -1) {
            teste2.splice(teste, 1)
         }

         return teste2
         // return teste2.splice(teste, 1)
      })
      // setBlogs((currentBlogs) => {
      //    const updatedBlogs = [...currentBlogs]
      //    const indexToDelete = updatedBlogs.findIndex((blog) => blog.id === id)

      //    if (indexToDelete !== -1) {
      //       updatedBlogs.splice(indexToDelete, 1)
      //    }

      //    return updatedBlogs
      // })

      // setTodos((curerentTodos) => {
      //    const teste2 = [...curerentTodos]
      //    const teste = teste2.findIndex((e) => e.id === id)
      //    return teste2.splice(teste, 1, teste2)
      //    // return curerentTodos.filter((todo) => todo.id !== id) // this will return all the currentodos execept the one i dicided to remove(deleted)
      // })
   }

   useEffect(() => {
      console.log("Running Use Effect")
      // console.log(name)
      // console.log(blogs)
      fetch("http://localhost:8000/blogs") // remenber that this isent the data its an object
         .then((res) => {
            return res.json()
         })
         .then((data) => {
            // console.log(data)
            setBlogs(data)
         })
   }, [])
   // }, [name])

   return (
      <div className="home">
         {blogs && (
            <BlogList
               blogs={blogs}
               title="All Blogs Listed"
               handleDelete={handleDelete}
            />
         )}
         <button onClick={() => setName(name === "Mario" ? "Luigi" : "Mario")}>
            Change Name
         </button>
         <p>{name}</p>
         {/* <BlogList
            blogs={blogs.filter((blog) => blog.author === "mario")}
            title="Mario's Blogs"
         /> */}
         {/* <BlogList blogs={blogs} title="All Blogs Listed" /> */}
         {/* <BlogList blogs={blogs} /> */}
      </div>
   )
}

export default Home

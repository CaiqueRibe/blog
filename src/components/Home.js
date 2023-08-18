import useFetch from "../hooks/useFetch"
import BlogList from "./BlogList"

const Home = () => {
   const {
      data: blogs,
      isPending,
      error,
   } = useFetch("http://localhost:8000/blogs")

   return (
      <div className="home">
         {error && <div>{error}</div>}
         {isPending && <div id="loadingMsg">Loading Data...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs Listed" />}
      </div>
   )
}

export default Home

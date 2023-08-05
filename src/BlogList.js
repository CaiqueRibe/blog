//stateless Functional Component

// const BlogList = (props) => {
const BlogList = ({ blogs, title, handleDelete }) => {
   //    const blogs = props.blogs
   //    const title = props.title

   if (Object.keys(blogs).length === 0) {
      title = "There aren't any posts to be showed"
   }
   return (
      <div className="blog-list">
         <h2>{title}</h2>
         {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>Written By - {blog.author}</p>
               <button onClick={() => handleDelete(blog.id)}>
                  Delete Blog
               </button>
            </div>
         ))}
      </div>
   )
}

export default BlogList

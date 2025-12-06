import Blog from "../../Components/Blog/Blog"
import postsData from "../../data/postsData.json"

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <Blog data={postsData ? postsData.data : []} />
    </div>
    )
}

export default HomePage
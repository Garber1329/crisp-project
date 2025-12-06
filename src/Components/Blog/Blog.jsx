import './Blog.css'

const Blog = ({data, limit = 4}) => {

    const limitedPosts = data.slice(0, limit);

  return (
    <div className="Blog">
        <h2 className='BlogTitle'>Blog</h2>
        <div className="BlogContainer">
            {data && data.map((post) => (
            <div className="BlogCard" key={post.id}>
                <p className="BlogType">{post.id % 2 === 0 ? "Article" : "Tips"}</p>
                <h3 className="ArticleTitle">{post.title}</h3>
                <p className="ArticleText">
                    {post.body.length > 100
                    ? post.body.slice(0, 100) + "..."
                    : post.body}
                </p>
                <p className="ArticleDate">21 January 2018 by guido</p>
            </div>
            ))}
            {/* <div className="BlogCard">
                <p className="BlogType">Tips</p>
                <h3 className="ArticleTitle"></h3>
                <p className="ArticleText"></p>
                <p className="ArticleDate">21 January 2018 by guido</p>
            </div>
            <div className="BlogCard">
                <p className="BlogType">Tips</p>
                <h3 className="ArticleTitle"></h3>
                <p className="ArticleText"></p>
                <p className="ArticleDate">21 January 2018 by guido</p>
            </div>
            <div className="BlogCard">
                <p className="BlogType">Article</p>
                <h3 className="ArticleTitle"></h3>
                <p className="ArticleText"></p>
                <p className="ArticleDate">21 January 2018 by guido</p>
            </div> */}
        </div>
    </div>
    )
}

export default Blog
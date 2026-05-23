import blog from './BlogPages.module.css'


export default function BlogPages() {
    return (
        <>
            <section>
                <div className={blog.linkBlog}>
                    <a href="">Home</a>
                    <a href="">/ Womens Dress /</a>
                    <a href=""> Angels malu</a>
                </div>
                <div className={blog.blogTitle}>
                    <h1>WHAT TO WEAR TO A SUMMER WEDDING THIS YEAR?</h1>
                </div>
            </section>
        </>
    )
}
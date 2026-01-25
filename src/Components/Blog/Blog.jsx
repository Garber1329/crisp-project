import styles from "./Blog.module.css";

const Blog = ({ data, limit = 4 }) => {
  const limitedPosts = data.slice(0, limit);

  return (
    <div className={styles.Blog}>
      <h2 className={styles.BlogTitle}>Blog</h2>

      <div className={styles.BlogContainer}>
        {limitedPosts.map((post) => (
          <div className={styles.BlogCard} key={post.id}>
            <p className={styles.BlogType}>
              {post.id % 2 === 0 ? "Article" : "Tips"}
            </p>

            <h3 className={styles.ArticleTitle}>{post.title}</h3>

            <p className={styles.ArticleText}>
              {post.body.length > 100
                ? post.body.slice(0, 100) + "..."
                : post.body}
            </p>

            <p className={styles.ArticleDate}>
              21 January 2018 by guido
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

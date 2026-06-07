// import styles from "./Blog.module.css";

// const Blog = ({ data, limit = 10 }) => {
//   const limitedPosts = data.slice(0, limit);

//   return (
//     <div className={styles.Blog}>
//       <h2 className={styles.BlogTitle}>Blog</h2>

//       <div className={styles.BlogContainer}>
//         {limitedPosts.map((post) => (
//           <div className={styles.BlogCard} key={post.id}>
//             <p className={styles.BlogType}>
//               {post.id % 2 === 0 ? "Article" : "Tips"}
//             </p>

//             <h3 className={styles.ArticleTitle}>{post.title}</h3>

//             <p className={styles.ArticleText}>
//               {post.body.length > 100
//                 ? post.body.slice(0, 100) + "..."
//                 : post.body}
//             </p>

//             <p className={styles.ArticleDate}>
//               21 January 2018 by guido
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import { useState, useEffect } from "react";
import css from "./Blog.module.css";

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

function Article({ title, text }) {
  const getTodayFormattedDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className={css.article}>
      <div className={css.top}>
        <h3 className={css.subArticle}>Article</h3>
        <div className={css.main}>
          <h2 className={css.articleTitle}>{title}</h2>
          <p className={css.articleText}>{text}</p>
        </div>
      </div>
      <div className={css.articleFooter}>
        <hr className={css.hr} />
        <p className={css.date}>{getTodayFormattedDate()}</p>
      </div>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get(
          "https://crisp-project-server.onrender.com/posts",
        );
        
        const fetchedPosts = Array.isArray(response.data) ? response.data : response.data?.data || [];
        setPosts(fetchedPosts.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);

  return (
    <section className={css.blog}>
      <div className="container">
        <div className={css.content}>
          <h2 className={css.title}>Blog</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"} // я намагався задати фіксовану ширину одному посту і прописати slidesPerView "auto", щоб swiper сам вирахував, скільки постів помістяться на одному слайді
            autoplay={{
              delay: 5000000000000000000, // такий delay тимчвсово.
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <Article title={post.title} text={post.body} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import blog from './BlogPages.module.css'
import adverstising from '/src/images/BlogPage/adverstising.png'
import adverstising2 from '/src/images/BlogPage/adverstising2.png'
import dresses from '/src/images/BlogPage/dreses.png'
import axios from 'axios'

export default function BlogPages({ clouses = 'dress' }) {
    const [blogData, setBlogData] = useState([])
    const [blogSearch, setBlogSearch] = useState()
    const [searchParams, setSerchParams] = useSearchParams()
    const [productData, setProductData] = useState([])

    const searchValue = () => {
        if (searchParams.get('name')) {
            setBlogSearch(searchParams.get('name'))
        } else {
            setSerchParams({ name: clouses })
            setBlogSearch(clouses)
        }
    }

    useEffect(() => {
        const fetchRecuaest = async () => {
            searchValue()
            const fetch = await axios.get(`https://newsapi.org/v2/everything?q=${blogSearch}&apiKey=9d7ffabbae414e4e8a76d9dde2662f4b`)
            const fetchProducts = await axios.get(`https://dummyjson.com/products/search`)
            setProductData(fetchProducts)
            setBlogData(fetch.data.articles)
        }

        fetchRecuaest()
    }, [blogSearch])

    // console.log(blogSearch)
    // console.log(blogData)
    // console.log(clouses)
    console.log(productData)

    return (
        <>
            {blogData && <>
                <section className={blog.blogSection}>
                    <div className={blog.linkBlog}>
                        <a href="">Home</a>
                        <a href="">/ Womens Dress /</a>
                        <a href=""> Angels malu</a>
                    </div>
                    <div className={blog.blogTitle}>
                        <h1>WHAT TO WEAR TO A SUMMER WEDDING THIS YEAR?</h1>
                    </div>
                </section>
                <section className={blog.blogSectionContent}>
                    <div className={blog.blogContent}>
                        <div className={blog.contentTitle}>
                            <h1 className={blog.title}>The {blogSearch}</h1>
                            <div className={blog.contentBox}>
                                {blogData.slice(0, 11).map((data, index) => (
                                    <p key={index}>{data.description}</p>
                                ))}
                            </div>
                        </div>
                        <img src={dresses} alt="" />
                        <div className={blog.contentTitle}>
                            <h1 className={blog.title}>The {blogSearch}</h1>
                            <div className={blog.contentBox}>
                                {blogData.slice(0, 11).map((data, index) => (
                                    <p key={index}>{data.description}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={blog.adverstisingBox}>
                        <img src={adverstising} alt="" />
                        <img src={adverstising2} alt="" />
                    </div>
                </section></>}
            <section className={blog.otherItems}>
                <h1>You May Also Like</h1>
                {/* <div>
                    {arr.map((info, index) => (
                        <div className={blog.itemBox}>
                            <img src="" alt="" className={blog.image} />
                            <p className={blog.categoryItem}></p>
                            <p className={blog.description}></p>
                            <h2 className={blog.prise}></h2>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    )
}
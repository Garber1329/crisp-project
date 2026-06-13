import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import blog from './BlogPages.module.css'
import adverstising from '/src/images/BlogPage/adverstising.png'
import adverstising2 from '/src/images/BlogPage/adverstising2.png'
import shopOption from '/src/data/productsData.json'
import bd from '/src/data/bd.json'
import axios from 'axios'

export default function BlogPages({ clouses = 'dress' }) {
    const [blogData, setBlogData] = useState()
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
        searchValue()
        const data = bd.filter(e => e.type === blogSearch)
        const shopOptions = shopOption.data.slice(0, 4)

        setProductData(shopOptions)
        if (data.length) {
            setBlogData(data)
        } else {
            setBlogData(bd.filter(e => e.type === 'dress'))
        }
    }, [blogSearch])

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
                            <h1 className={blog.title}>{blogData[0].title}</h1>
                            <p>{blogData[0].firstDescription}</p>
                        </div>
                        <img src={blogData[0].imageUrl} alt="" />
                        <div className={blog.contentTitle}>
                            <h1 className={blog.title}>{blogData[0].title}</h1>
                            <p>{blogData[0].secondDescription}</p>
                        </div>
                    </div>
                    <div className={blog.adverstisingBox}>
                        <img src={adverstising} alt="" />
                        <img src={adverstising2} alt="" />
                    </div>
                </section></>}
            <section className={blog.otherItems}>
                <div>
                    <h1 className={blog.bonusTitle}>You May Also Like</h1>
                    <div className={blog.boxCard}>
                        {productData.map((info, index) => (
                            <div className={blog.itemBox}>
                                <img src={info.image} alt="" className={blog.image} />
                                <p className={blog.categoryItem}>top clouthes</p>
                                <p className={blog.description}>{info.title}</p>
                                <h2 className={blog.price}>{info.price},00 EUR </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
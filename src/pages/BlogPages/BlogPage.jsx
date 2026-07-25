import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import blog from './BlogPages.module.css'
import adverstising from '/src/images/BlogPage/adverstising.png'
import adverstising2 from '/src/images/BlogPage/adverstising2.png'
import shopOption from '/src/data/productsData.json'
import { useDispatch, useSelector } from 'react-redux'
import fetchBlog from '../../store/async/blogDataThunk'
import { filterInfo } from '../../store/slices/blogSlice'

export default function BlogPages({ clouses = 'dress' }) {
    const [blogSearch, setBlogSearch] = useState()
    const [searchParams, setSerchParams] = useSearchParams()
    const [productData, setProductData] = useState([])
    const dispatch = useDispatch()
    const { blogDataFetch, filterBlogResult } = useSelector(state => state.blogsSlice)

    console.log(blogDataFetch)

    useEffect(() => {
        dispatch(fetchBlog())
    }, [dispatch])

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
        if (blogDataFetch.length) {
            dispatch(filterInfo(blogSearch))
        }

        setProductData(shopOption.data.slice(0, 4))
    }, [blogSearch, blogDataFetch])

    return (
        <>
            {filterBlogResult.length && <>
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
                            <h1 className={blog.title}>{filterBlogResult[0].title}</h1>
                            <p>{filterBlogResult[0].firstDescription}</p>
                        </div>
                        <img src={filterBlogResult[0].imageUrl} alt="" />
                        <div className={blog.contentTitle}>
                            <h1 className={blog.title}>{filterBlogResult[0].title}</h1>
                            <p>{filterBlogResult[0].secondDescription}</p>
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
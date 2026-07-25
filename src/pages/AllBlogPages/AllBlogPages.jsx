import allBlog from './AllBlogPages.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import fetchBlog from '../../store/async/blogDataThunk'
import { useEffect } from 'react'

export default function AllBlogPages() {
    const dispatch = useDispatch()
    const { blogDataFetch, error, filterBlogResult } = useSelector(state => state.blogsSlice)

    useEffect(() => {
        dispatch(fetchBlog())
    }, [dispatch])

    return (
        <>
            <div className={allBlog.containerPage}>
                {blogDataFetch.map(e => (
                    <Link to={{
                        pathname: '/blogPage',
                        search: `?name=${e.type}`
                    }} key={e.id} className={allBlog.boxItem}>
                        <img className={allBlog.photo} src={e.imageUrl} alt="" />
                        <h3 className={allBlog.titleItem}>{e.title}</h3>
                        <p className={allBlog.description}>{e.firstDescription.slice(0, 150)}...</p>
                    </Link>
                ))}
            </div>
        </>
    )
}
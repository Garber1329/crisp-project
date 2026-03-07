import coment from './Coments.module.css'
import { IoStarSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from 'react'
import axios from 'axios'

const Comentar = ({ name, reting, comentar, data }) => {
    return (
        <div className={coment['comentar-box']}>
            <div className={coment['user-box']}>
                <FaCircleUser className={coment.icon} />
                <h6>{name}</h6>
            </div>
            <p className={coment.reting}>Reting  <span>{reting} <IoStarSharp className={coment.star} /></span></p>
            <p className={coment.comentar}><span>Comentar:  </span>  {comentar}</p>
            <p className={coment.comentar}><span>Time:</span> {data}</p>
        </div>
    )
}

export default function Coments() {
    const [isAll, setAll] = useState([])
    const [isComplate, setComplate] = useState(false)
    const [isAll2, setAll2] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const comentInfo = await axios.get('https://fakestoreapiserver.reactbd.org/api/reviews')
            const userInfo = await axios.get('https://fakestoreapiserver.reactbd.org/api/users')

            setAll(comentInfo.data.data)
            setAll2(userInfo.data.data)
            setComplate(true)
        }

        fetchData()
    }, [])

    const nameUser = (id) => {
        const finalArr = isAll2.find(e => e._id === id)
        return finalArr.name
    }

    return (
        <>
            <section className={coment.section}>
                {isComplate && isAll.map(e => (
                    <Comentar name={nameUser(e._id)} reting={e.rating} comentar={e.comment} data={e.createdAt} />
                ))}
            </section>
        </>
    )
}

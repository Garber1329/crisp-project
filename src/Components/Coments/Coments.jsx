import coment from './Coments.module.css'
import { IoStarSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState, memo } from 'react'
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

const Coments = memo(function Coments({ id }) {
    const [isAll, setAll] = useState([])
    const [isComplate, setComplate] = useState(false)
    const [isAll2, setAll2] = useState([])
    const [infoComent, setInfoComent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comentInfo = await axios.get('https://crisp-project-server.onrender.com/reviews')
                const userInfo = await axios.get('https://crisp-project-server.onrender.com/users')

                setAll(comentInfo.data.data)
                setAll2(userInfo.data.data)
            } catch (e) {
                console.log(`Помилка`, e)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const info = isAll.find(e => e._id === id)

        setInfoComent([info])
        console.log(infoComent)

        if (infoComent.length > 0) {
            setComplate(true)
        }
    }, [isAll])

    const nameUser = (id) => {
        const finalArr = isAll2.find(e => e._id === id)
        return finalArr.name
    }

    return (
        <>
            <section className={coment.section}>
                {isComplate && infoComent.map(e => (
                    <Comentar name={nameUser(id)} reting={e.rating} comentar={e.comment} data={e.createdAt} />
                ))}
            </section>
        </>
    )
}
)  

export default  Coments
import coment from './Coments.module.css'
import { IoStarSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { Component } from 'react'
import axios from 'axios'

class Comentar extends Component {
    render() {
        const { name, reting, comentar, data } = this.props
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
}

export default class Coments extends Component {
    state = {
        all: [],
        complate: false,
        all2: [],
    }

    async componentDidMount() {
        const comentInfo = await axios.get('https://fakestoreapiserver.reactbd.org/api/reviews')
        const userInfo = await axios.get('https://fakestoreapiserver.reactbd.org/api/users')

        this.setState({
            all: comentInfo.data.data,
            all2: userInfo.data.data,
            complate: true
        })
    }

        nameUser(id) {
        const finalArr = this.state.all2.find(e => e._id === id)
        return finalArr.name
    }

    render() {
        const { all } = this.state

        return (
            <>
                <section className={coment.section}>
                    {all.map(e => (
                        <Comentar name={this.nameUser(e._id)} reting={e.rating} comentar={e.comment} data={e.createdAt} />
                    ))}
                </section>
            </>
        )
    }
}

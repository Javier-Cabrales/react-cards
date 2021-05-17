import React from 'react'
import Card from './Card'
import Imagen1 from '../img/hiperbestia1.jpg'
import Imagen2 from '../img/hiperbestia2.jpg'
import Imagen3 from '../img/hiperbestia3.jpg'

const cards = [
    {
        id: 1,
        title: "Brock hofer",
        img: Imagen1,
        url: "https://brockhoferart.com/"
    },
    {
        id: 2,
        title: "Hyper Beast",
        img: Imagen2,
        url:"https://www.instagram.com/brockhofer/?hl=es"
    },
    {
        id: 3,
        title: "Eternal",
        img: Imagen3,
        url:"https://makersplace.com/brockhofer/"
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imagen={card.img} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards

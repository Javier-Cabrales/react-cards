import React from 'react'
import "./cards.css"

function Card({ title, imagen, url }) {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={imagen} alt="Hiper Bestia" className="card-img-top" />
            </div>
            <div className="card-body">
                <h1 className="card-title text-danger">{title}</h1>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis animi laudantium praesentium mollitia nihil ducimus, a iusto voluptatum suscipit id, doloribus voluptas facere non inventore quo velit veniam molestiae rerum.</p>
                <a href={url} className="btn btn-outline-danger border-0" target="_blank" rel="noreferrer">Welcome To Hell</a>
            </div>
        </div>
    )
}

export default Card

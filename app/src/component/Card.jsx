import { React } from 'react'

import './../App.css';


export const Card = ({ id, image, title, desc, link }) => {

    const img = require('../img/' + image); // with require

    if (id % 2 == 0)
        return (
        <div className="Card">
            <div className="CardText CardRight">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
                <a href={link}>{link}</a>
            </div>
            <img src={img} alt="test"/>
        </div>
        )
    else
        return (
        <div className="Card CardLeft">
            <img src={img} alt="test"/>
            <div className="CardText">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
                <a href={link}>{link}</a>
            </div>
        </div>
        )

}
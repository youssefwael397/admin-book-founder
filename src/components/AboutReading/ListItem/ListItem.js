import React from 'react'

export default function ListItem(props) {
    return (
        <li>
            <h4 className="mt-2">{props.title}</h4>

            <div className="row">
                <p className="lead col-md-6 col-xs-12 mt-5">
                    {props.body}
                </p>
                <img className="img-fluid col-md-6 col-xs-12 my-4 " src={props.img} alt="this is for reading " />
            </div>
        </li>
    )
}

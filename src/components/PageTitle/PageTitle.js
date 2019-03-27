import React from 'react'
import './pagetitle.css'

const PageTitle = props => (
    <div>
        <div className="TitleGroup">
            <h1 className="title">
                {props.title}
            </h1>
        </div>
    </div>
)

export default PageTitle
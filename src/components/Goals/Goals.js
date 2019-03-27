import React from 'react'
import './goals.css'

const Goals = props => (
    <div className="GoalsGroup">
        <div className="goal-item create">
            <h2>Create</h2>
            <img src={require('../../images/create_icon_lg.svg')}></img>
            <p>After brainstorming with our small-but-mighty team, 
            we create compelling marketing content and develop programs with your business 
            goals and objectives specifically in mind.</p>
        </div>
        <div className="goal-item elevate">
            <h2>Elevate</h2>
            <img src={require('../../images/elevate_icon_lg.svg')}></img>
            <p>Working closely with you and your teams, we evaluate existing initiatives 
            and marketing materials, make recommendations for enhancements and execute with 
            excellence. </p>
        </div>
        <div className="goal-item engage">
            <h2>Engage</h2>
            <img src={require('../../images/engage_icon_lg.svg')}></img>
            <p>Using your business insights, we craft programs that connect you with your customers, 
            and also build relationships between your customers and your brand.</p>
        </div>
    </div>
)

export default Goals
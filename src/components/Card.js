import React from 'react'
import './Card.css'

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }

        // this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }

    render(){
        const {name, position, image, description} = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        // const postHeight = height ? auto : currentHeight;

        return(
            <div className="CardGroup">
                <div className={`panel panel-heading ${isExpanded ? 'is-expanded has-margin' : ""}`} onClick={(e) => this.handleToggle(e)}>
                    <h3>{name}, </h3>
                    <h6>{position}</h6>
                    <div className="Card">
                        <img alt="team" src={image}/>
                    </div>
                    <div className="panel-collapse" style={{height: currentHeight+'px'}}>
                        <div className="panel-body" ref="inner">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card





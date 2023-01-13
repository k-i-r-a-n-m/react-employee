import React, { Component } from 'react';
import './card.styles.css'
class CardContainer extends Component {
    render() {
        const {name,id,email} = this.props.data
        return (
            
            <div className='card-container' key={id}>
                        <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`}  />
                        <h2>{name}</h2>
                        <p>{email}</p>
            </div>
            
        );
    }
}

export default CardContainer;

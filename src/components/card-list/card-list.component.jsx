import React, { Component } from 'react';
import './card-list.styles.css'
import CardContainer from '../card-container/card-container.component';
class CardList extends Component {
    render() {
        const {list}=this.props


        return (
            <div className='card-list'>
                {list.map(e=><CardContainer data={e}/>)}                
            </div>
            
        );
    }
}

export default CardList;

import React, { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        const {placeholder,onChangeHandler,className}=this.props
        return (
            <div >
                <input 
                 className={`search-box `}
                 type="search"
                 placeholder={placeholder} 
                 onChange={onChangeHandler}>

                 </input>
               
            </div>
        );
    }
}

export default SearchBox;

import React from 'react';

const SearchBox = ({ se, searchChange }) => {
    return (
        <div className='tc pa2'>
            <input type='search' placeholder='search robots'
                onChange={searchChange}
                className='pa2 ba b--green bg-light-blue' />
        </div>
    )
}

export default SearchBox
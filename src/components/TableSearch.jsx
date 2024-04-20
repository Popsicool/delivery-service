import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span className='table-search'>
        <input value={filter || ''}
        className="form-input"
        placeholder='Search'
        onChange={e => setFilter(e.target.value)}
        />
    </span>
  )
}

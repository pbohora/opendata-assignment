import React from 'react'

import './Header.css'

const Header = ({ handleDate, selectedDate }) => {
  const currentDate = new Date()
  console.log(currentDate)
  const yesterday = currentDate.getDate() - 1
  const dayBeforeYesterday = currentDate.getDate() - 2

  const dates = [currentDate.getDate(), yesterday, dayBeforeYesterday]

  return (
    <div className='header'>
      <label>
        Choose the Date:
        <select
          className='header_select'
          value={selectedDate}
          onChange={handleDate}
        >
          {dates.map((date, index) => (
            <option key={index} value={date}>
              {date}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Header

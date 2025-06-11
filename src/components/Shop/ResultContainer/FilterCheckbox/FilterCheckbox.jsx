import React from 'react'

function FilterCheckbox (props) {
  return (
    <>
      <div className=' flex align-middle items-center text-[1.1rem] '>
        
        <input
          type='checkbox'
          name={'check' + props.value}
          id={'check' + props.value}
          value={props.value}
          className='p-2 m-2 h-5 w-5 rounded-sm border-2 text-green-600'
        />
        <p className='p-2 ml-2'>{props.value}</p>
        <p className='mr-2'>{props.mes}</p>
      </div>
    </>
  )
}

export default FilterCheckbox

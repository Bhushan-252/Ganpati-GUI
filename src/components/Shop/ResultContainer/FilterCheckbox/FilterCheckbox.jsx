import React from 'react'

function FilterCheckbox (props) {
    function handleTemp(event) {
        const value = event.target.value;
        const isCategory = +value <= 2;

        if (event.target.checked) {
            props.setFilterStore(prev => ({
                inches: isCategory ? [...prev.inches] : [...prev.inches, +value],
                categories: isCategory ? [...prev.categories, +value] : [...prev.categories]
            }));
        } else {
            props.setFilterStore(prev => ({
                inches: isCategory ? [...prev.inches] : prev.inches.filter(x => x !== +value),
                categories: isCategory ? prev.categories.filter(x => x !== +value) : [...prev.categories]
            }));
        }

    }
  return (
    <>
      <div className=' flex align-middle items-center text-[1.1rem] '>
        
        <input
          type='checkbox'
          name={'check' + props.value}
          id={'check' + props.value}
          value={props.value}
          className='p-2 m-2 h-5 w-5 rounded-sm border-2 text-green-600'
          onChange={(event) => handleTemp(event) }
        />
        <p className='p-2 ml-2'>{props.title}</p>
        <p className='mr-2'>{props.mes}</p>
      </div>
    </>
  )
}

export default FilterCheckbox

import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
const {setSearchTerm} = useGlobalContext()

const submitForm = (e) =>{
e.preventDefault();
const searchValue = e.target.elements.search.value
if(!searchValue) return
//console.log(searchValue)
setSearchTerm(searchValue)
}

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={submitForm}>
         <input type="text" name='search' placeholder='cat' className='form-input search-input' />
<button type='submit' className='btn'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm

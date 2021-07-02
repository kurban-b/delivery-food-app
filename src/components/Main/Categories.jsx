import React from 'react'
import { useSelector } from 'react-redux'
import { categoriesSelector } from '../../redux/selectors/categories'
import CategoryBox from './CategoryBox'

function Categories () {
  const categories = useSelector(categoriesSelector);

  return (
    <div className={'categories'}>
      {
        categories.map(category => {
          return <CategoryBox key={category.id} category={category}/>
        })
      }
    </div>
  )
}

export default Categories
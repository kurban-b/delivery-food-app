import React from 'react'
import { useSelector } from 'react-redux'
import { categoriesSelector } from '../../redux/selectors/categories'
import NavItem from './Nav-Item'

function Nav (props) {
  const categories = useSelector(categoriesSelector);

  return (
    <div className={'nav'}>
      <ul className={'navbar'}>
        {
          categories.map(item => {
            return <NavItem category={item} key={item.id} />
          })
        }
      </ul>

    </div>
  )
}

export default Nav
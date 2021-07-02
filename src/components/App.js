import Header from './Header/index'
import Main from './Main/Index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadingCategories } from '../redux/actions/categories'
import { loadingProducts } from '../redux/actions/products'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadingCategories())
    dispatch(loadingProducts())
  },[dispatch])

  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;

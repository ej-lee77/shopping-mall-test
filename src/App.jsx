import './App.css'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import All from './pages/All'
import Man from './pages/Man'
import Women from './pages/Women'
import Jewelery from './pages/Jewelery'
import Electronics from './pages/Electronics'
import Login from './pages/Login'
import Member from './pages/Member'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import UserInfo from './pages/UserInfo'
import ProductDetail from './pages/ProductDetail'
import { useProductStore } from './store/useProductStore'
import { useEffect } from 'react'
import ProductList from './components/ProductList'
import { useAuthStore } from './store/useAuthStore'
import SearchPage from './pages/SearchPage'

function App() {
  const {onFetchItems, items} = useProductStore();
  const {initAuth} = useAuthStore();

  useEffect(()=>{
    initAuth();
  },[initAuth]);
  
  useEffect(()=>{
    onFetchItems();
  }, [items]);

  if(!items.length) return <div>로딩중...</div>

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 상세페이지 */}
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/:category/:subCategory' element={<ProductList />}/>
        {/* 전체검색페이지 */}
        <Route path='/searchPage' element={<SearchPage />}/>

        <Route path="/all" element={<All />} />
        <Route path="/men" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />

        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

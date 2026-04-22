import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './scss/Header.scss'
import { useAuthStore } from '../store/useAuthStore'
import { useProductStore } from '../store/useProductStore';

// 메뉴
// const menus = [
//     {key: "all", label: "All"},
//     {key: "man", label: "남자"},
//     {key: "women", label: "여자"},
//     {key: "jewelery", label: "보석"},
//     {key: "electronics", label: "전자제품"}
// ]
export default function Header() {
    const {user, onLogout} = useAuthStore();
    const {menus, cartCount, searchWordAll, onSetSearchWordAll} = useProductStore();
    const navigate = useNavigate();

    // 스크롤 체크할 변수
    const [isScroll, setIsScroll] = useState(false);
    // 현재 위치(페이지)를 채크하는 hook useLocation()
    const location = useLocation();
    const isHome = location.pathname==="/"
    useEffect(()=>{
        // 위치가 홈인지 아닌지(페이지)
        if(!isHome){
            setIsScroll(true)
            return
        }
        const handleScroll = ()=>{
            // 위치가 80이상이면 isScroll true
            setIsScroll(window.scrollY>80)
        }
        window.addEventListener("scroll", handleScroll);
        // 초기값
        handleScroll();

        return()=>window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const handleLogout = ()=>{
        onLogout();
        navigate("/");
    }

    // search 돋보기 클릭하면
    const handleSearch = ()=>{
        navigate("/searchPage");
    }
  return (
    <header className={isScroll ? "active" : ""}>
        <div className="inner">
            <div className="header-left">
                <h1 className="logo"><Link to="/"><img src="./images/logo.svg" alt="logo" /></Link></h1>
                <nav>
                    <ul className="main-menu">
                        {menus.map((menu)=>(
                            <li key={menu.key}>
                                <Link to={`/${menu.key}`}>{menu.label}</Link>
                                {menu.sub?.length>0 && (
                                    <ul className="sub-menu">
                                        {menu.sub.map((s)=>(
                                            <li key={s.key}>
                                                <Link to={`/${menu.key}/${s.key}`}>{s.label}</Link>
                                            </li>
                                        ))}
                                    </ul>  
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <ul className="gnb-list">
                    {user ? (
                        <>
                            <li>
                                <Link to="/userinfo"><img src="./images/loginMember.png" alt="login" /><span>내정보</span></Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}><img src="./images/loginJoin.png" alt="join" /><span>LOGOUT</span></button>
                            </li>
                        </>
                    ):(
                        <>
                            <li>
                                <Link to="/login"><img src="./images/loginMember.png" alt="login" /><span>LOGIN</span></Link>
                            </li>
                            <li>
                                <Link to="/member"><img src="./images/loginJoin.png" alt="join" /><span>JOIN</span></Link>
                            </li>
                        </>
                    )}
                    <li className="cart">
                        <Link to="/cart"><img src="./images/cart.png" alt="cart" /><span className="cart-num">{cartCount}</span></Link>
                    </li>
                </ul>
                <div className="search-wrap">
                    <input type="text" value={searchWordAll} onChange={(e)=>onSetSearchWordAll(e.target.value)}/>
                    <i className="search-icon" onClick={handleSearch}><img src="./images/search.png" alt="search" /></i>
                </div>
            </div>
        </div>
    </header>
  )
}

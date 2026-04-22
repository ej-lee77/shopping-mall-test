import { useProductStore } from "../store/useProductStore"

export default function SearchInput() {
  const {searchWord, onSetSearchWord} = useProductStore();
  return (
    <div className="section-search-wrap">
        <input type="text" placeholder='검색할 상품을 입력하세요'
        value={searchWord} onChange={(e)=>onSetSearchWord(e.target.value)}/>
    </div>
  )
}

import css from './SearchBox.module.css'

function SearchBox({filter, setFilter}) {
  return (
    <div>
        <p className={css.findeContact}>Find contacts by name</p>
        <input type="text" value={filter} onChange={e => setFilter(e.target.value)} className={css.searchPlace} />
    </div>
  )
}

export default SearchBox
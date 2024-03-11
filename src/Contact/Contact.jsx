import css from './Contact.module.css'

function Contact({numberId, numberName, number, onDelete}) {
  return (
    <li key={numberId} className={css.item}>
      <span>
        <p className="name"><b>{numberName}</b></p>
        <p className="number"><b>{number}</b></p>
      </span>
        <button onClick={() => onDelete(numberId)} className={css.delete}>Delete</button>
    </li>
  )
}

export default Contact
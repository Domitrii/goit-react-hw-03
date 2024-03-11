import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

function ContactList({numbers, onDelete}) {
  return (
    <ul className={css.listUl}>
        {numbers.map(number => {
            return(
                <Contact key={number.id} number={number.number} numberId={number.id} numberName={number.name} onDelete={onDelete} />
            )
        })}
    </ul>
  )
}

export default ContactList
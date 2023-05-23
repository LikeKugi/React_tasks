import './Datebox.css'
const Datebox = (props) => {
    const month = props.date.toLocaleString('ru-RU', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('ru-RU', {day: '2-digit'});
  return (
      <div className='datebox'>
          <p className='datebox__month'>{month}</p>
          <p className='datebox__year'>{year}</p>
          <p className='datebox__day'>{day}</p>
      </div>
  );
}
export default Datebox;
import './CostsFilter.css';

const maxYear = new Date().getFullYear();
const years = [...Array(5)].map((el, i) => maxYear - i);

const CostsFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Choose year</label>
                <select value={props.year} onChange={yearChangeHandler} defaultValue={0}>
                    <option value="0" >All</option>
                    {years.map((year, i) => <option value={year.toString()} key={i}>{year}</option>)}
                </select>
            </div>
        </div>
    );
}
export default CostsFilter;
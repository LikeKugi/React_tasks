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
                <select value={props.year} onChange={yearChangeHandler}>
                    <option value="0" selected>All</option>
                    {years.map(year => <option value={year.toString()}>{year}</option>)}
                </select>
            </div>
        </div>
    );
}
export default CostsFilter;
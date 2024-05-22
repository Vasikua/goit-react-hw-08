import css from './SearchBox.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/slice';
import { selectNameFilter } from '../../redux/filter/selectors';

export default function SearchBox() {
    const dispatch = useDispatch();
      const filter = useSelector(selectNameFilter);
    const handleSearch = (e) => {
        const searchRes = e.target.value;
        dispatch(changeFilter(searchRes));
    }
    

   
    return (
        <div className='css.container'>
            <p className = {css.label}> Find contacts by name </p>
            <input 
                className={css.input} 
                type="text"
                 name="filters"
                 value={filter}
                onChange={handleSearch}
            />
        </div>
    );
}
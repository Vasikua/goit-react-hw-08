import css from './SearchBox.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { changeFilter,selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const dispatch = useDispatch();
      const filter = useSelector(selectNameFilter);
    const search = (e) => {
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
                onChange={search}
            />
        </div>
    );
}
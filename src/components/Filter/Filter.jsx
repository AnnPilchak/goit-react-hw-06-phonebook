import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { Input } from "./Filter.styled";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter) ?? '';
    const onChange = e => {
        dispatch(filterContacts(e.target.value));
    };

	return (
		<label>
			Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={onChange} />
		</label>
	);
};
 
export default Filter;
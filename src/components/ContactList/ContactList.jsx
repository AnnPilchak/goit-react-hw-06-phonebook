import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { List, Item, Button } from "./ContactList.styled";

const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	const visibleContacts = Object.values(contacts).filter(({ name }) =>
		name.toLowerCase().includes(filter)
	);

	return (
		<List>
			{visibleContacts.length !== 0 ? (
				visibleContacts.map(({ id, name, number }) => {
					return (
						<Item>
							<p>{name} - {number}</p>
							<Button onClick={() => dispatch(deleteContact({ id }))}>Delete</Button>
						</Item>
					)
				})
			) : (
			<p>There are no contacts :(</p>
			)}
		</List>
	);
};

export default ContactList;
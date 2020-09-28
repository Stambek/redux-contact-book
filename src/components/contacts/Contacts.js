import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Contact from './Contact';
import {selectAllContact, clearAllContact} from '../../actions/contactAction'


const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts);
    const selectedContacts = useSelector((state) => state.selectedContacts);

    useEffect(()=>{
        if(selectAll){
            dispatch(selectAllContact(contacts.map((contact) => contact.id)))
        } else {
            dispatch(clearAllContact());
        }
    }, [selectAll]);

    return (
        <div>
            
            <table className="table shadow">
                <thead>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input 
                                id="selectAll" 
                                type="checkbox"
                                className="custom-control-input"
                                value={selectAll}
                                onClick={() => setSelectAll(!selectAll)}
                                />
                                <label 
                                htmlFor="selectAll" 
                                className="custom-control-label"
                                ></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <Contact contact={contact} key={contact.id} selectAll={selectAll}/>
                ))}   
                </tbody>
            </table>
        </div>
    )
}

export default Contacts;
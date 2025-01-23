import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { peopleReset, personToEditSet, selectPersonToEdit } from "../store/databaseSlice";
import { updatePerson } from "../services/api";

interface CardProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function EditCard( {id, firstName, lastName, email, streetNumber }: CardProps  ){
    
    const dispatch = useAppDispatch();
    const idForNewPerson = useAppSelector(selectPersonToEdit);

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newStreetNumber, setNewStreetNumber] = useState(0);

    function onFirstChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setFName(event.target.value);
        
    }

    function onLastChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setLName(event.target.value);
        
    }

    function onEmailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setNewEmail(event.target.value);
        
    }

    function onStreetChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setNewStreetNumber(Number(event.target.value));
        
    }

    function isEditableHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch(personToEditSet(Number(event.currentTarget.value)));
    }

    async function onSaveHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const response = await updatePerson(Number(idForNewPerson), fName, lName, newEmail, newStreetNumber)
        console.log(response?.headers);
        resetEdit()
    }  
    
    function resetEdit() {
        setFName("");
        setLName("");
        setNewEmail("");
        setNewStreetNumber(0);
        dispatch(peopleReset());
    }

    return (
        <div className="card bg-neutral shadow-xl mt-3.5 text-neutral-content">
            <div className="flex">
                <div className="basis-1/4 text-left pl-20">
                    <input defaultValue={firstName} onChange={onFirstChangeHandler} />
                </div>
                <div className="basis-1/4 text-left pl-6">
                    <input defaultValue={lastName} onChange={onLastChangeHandler} />
                </div>
                <div className="basis-1/4 text-left">
                    <input defaultValue={email} onChange={onEmailChangeHandler} />
                </div>
                <div className="basis-1/4 flex">
                    <div className="basis-1/2">
                        <input className="text-left" defaultValue={streetNumber} onChange={onStreetChangeHandler} />
                    </div>
                    <div className="basis-1/2 flex gap-2">
                            <button value={id} onClick={isEditableHandler}>Edit</button>
                            <button onClick={onSaveHandler}>Save</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { peopleReset, selectPersonToEdit } from "../store/databaseSlice";
import { deletePerson, updatePerson } from "../services/api";

interface CardProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function EditCard( { firstName, lastName, email, streetNumber }: CardProps  ){
    
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

    async function onDeleteHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        try {
            const response = await deletePerson(Number(idForNewPerson), firstName, lastName, email, streetNumber) 
            console.log(`Response Code${response?.status}`);
            dispatch(peopleReset())
            resetEdit();
        } catch (error) {
            console.error(error)
        }
        
    }

    async function onSaveHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        //if all fields remained unchanged
        if (fName === "" &&
            lName === "" &&
            newEmail === "" &&
            newStreetNumber === 0) {
                const response = await updatePerson(Number(idForNewPerson), firstName, lastName, email, streetNumber)
                console.log(response?.headers);
                dispatch(peopleReset())
                resetEdit();
        } 
        //if first name remains unchanged
        if (fName === "" && 
              lName !== "" &&
              newEmail !== "" &&
              newStreetNumber !== 0) {
                const response = await updatePerson(Number(idForNewPerson), firstName, lName, newEmail, newStreetNumber)
                console.log(response?.headers);
                dispatch(peopleReset())
                resetEdit();
        }
        //if last name reamins unchanged
        if (fName !== "" && 
            lName === "" &&
            newEmail !== "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lastName, newEmail, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if email reamins unchanged
        if (fName !== "" && 
            lName !== "" &&
            newEmail === "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lName, email, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if steetNumber remains unchanged
        if (fName !== "" && 
            lName !== "" &&
            newEmail !== "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lName, newEmail, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if first name and last name remain unchanged
        if (fName === "" && 
            lName === "" &&
            newEmail !== "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), firstName, lastName, newEmail, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if first name and email remain unchanged
        if (fName === "" && 
            lName !== "" &&
            newEmail === "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), firstName, lName, email, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if first name and streetnumber remain unchanged
        if (fName === "" && 
            lName !== "" &&
            newEmail !== "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), firstName, lName, newEmail, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if last name and email remain unchanged
        if (fName !== "" && 
            lName === "" &&
            newEmail === "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lastName, email, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if last name and street number remain unchanged
        if (fName !== "" && 
            lName === "" &&
            newEmail !== "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lastName, newEmail, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if email and streeNumber remain unchaged
        if (fName !== "" && 
            lName !== "" &&
            newEmail === "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lName, email, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if first name changes
        if (fName !== "" && 
            lName === "" &&
            newEmail === "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lastName, email, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if last name changes
        if (fName === "" && 
            lName !== "" &&
            newEmail === "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), firstName, lName, email, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if email changes
        if (fName === "" && 
            lName === "" &&
            newEmail !== "" &&
            newStreetNumber === 0) {
            const response = await updatePerson(Number(idForNewPerson), firstName, lastName, newEmail, streetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if steetNumber changes
        if (fName === "" && 
            lName === "" &&
            newEmail === "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), firstName, lastName, email, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
        //if all the feilds change
        if (fName !== "" && 
            lName !== "" &&
            newEmail !== "" &&
            newStreetNumber !== 0) {
            const response = await updatePerson(Number(idForNewPerson), fName, lName, newEmail, newStreetNumber)
            console.log(response?.headers);
            dispatch(peopleReset())
            resetEdit();
        }
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
                    <div className="basis-1/2 flex gap-2 justify-end">
                            <button onClick={onSaveHandler}>Save</button>
                            <button onClick={onDeleteHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}
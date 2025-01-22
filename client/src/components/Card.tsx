import { useState } from "react";

interface CardProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function Card( {id, firstName, lastName, email, streetNumber }: CardProps  ){
    
    const [isEditable, setIsEditable] = useState(false)
    
    function isEditableHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log(event.currentTarget.value);
    }

    return (
        <div className="card bg-neutral shadow-xl mt-3.5 text-neutral-content">
            <div className="flex">
                <div className="basis-1/4 text-left pl-20">
                    <h2>{firstName}</h2>
                </div>
                <div className="basis-1/4 text-left pl-6">
                    <h2>{lastName}</h2>
                </div>
                <div className="basis-1/4 text-left">
                    <h2>{email}</h2>
                </div>
                <div className="basis-1/4 flex">
                    <div className="basis-1/2">
                        <h2 className="text-left">{streetNumber}</h2>
                    </div>
                    <div className="basis-1/2 flex gap-2">
                            <button value={id} onClick={isEditableHandler}>Edit</button>
                            <button>Save</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}
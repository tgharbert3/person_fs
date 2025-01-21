interface CardProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function Card( {id, firstName, lastName, email, streetNumber }: CardProps  ){
    return (
        <div className="card bg-neutral shadow-xl m-3.5 text-neutral-content">
            <div className="flex justify-evenly">
                <p className="">{firstName}</p>
                <p className="">{lastName}</p>
                <p>{email}</p>
                <p>{streetNumber}</p>
            </div>
        </div>
    )
}
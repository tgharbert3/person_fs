import { useEffect, useState } from "react"

import { getPeople, loadPeople, getPeopleByID } from "../services/api"
import data from '../data/MOCK_DATA.json'

interface person {
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    zipode: number;
}

export default function Home() {

    const [people, setPeople] = useState<person[]>([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        async function gotPeople() {
            const peopleFromApi = await getPeople();
            setPeople(peopleFromApi.length);
        }
        gotPeople();
    }, [])

    
    console.log(people);
    return (
       <>
            <form>
                <input />
                
            </form>
       </>
    )
}
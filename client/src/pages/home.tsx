import { useEffect, useState } from "react"

import { getPeople } from "../services/api"
import NavBar from "../components/NavBar";
import Card from "../components/card";
import '../index.css';
import HeaderCard from "../components/HearderCard";


interface person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function Home() {

    const [people, setPeople] = useState<person[]>([]);

    useEffect(() => {
        async function gotPeople() {
            const peopleFromApi = await getPeople();
            setPeople(peopleFromApi);
        }
        gotPeople();
    }, [])

    
    console.log(people);
    return (
       <div>
            <main>
                <NavBar />
                <HeaderCard />
                {people.map((person) => {
                    return <Card 
                        id={0} 
                        firstName={person.firstName} 
                        lastName={person.lastName} 
                        email={person.email} 
                        streetNumber={person.streetNumber} 
                        key={person.id} />

                })}
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </main>        
       </div>
    )
}
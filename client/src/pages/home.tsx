import { useEffect, useState } from "react"

import { fetchPeopleBySize } from "../services/api"
import NavBar from "../components/NavBar";
import Card from '../components/Card'
import '../index.css';
import '../container.css'
import HeaderCard from "../components/HearderCard";

import { useAppSelector } from "../store/hooks";
import { selectLimit } from "../store/pageSizeSlice";
import PageButton from "../components/PageButton";


interface person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function Home() {

    const [people, setPeople] = useState<person[]>([]);

    const pageSize = useAppSelector(selectLimit);

    console.log(pageSize);

    useEffect(() => {
        async function fetchPeople(size: number) {
            const peopleFromApi = await fetchPeopleBySize(String(size));
            setPeople(peopleFromApi);
        }
        fetchPeople(pageSize);
    }, [pageSize])

    
    console.log(people);
    return (
       <div>
            <main className="">
                <NavBar />
                <HeaderCard />
                    <div className="container">
                        {people.map((person) => {
                            return <Card 
                                id={0} 
                                firstName={person.firstName} 
                                lastName={person.lastName} 
                                email={person.email} 
                                streetNumber={person.streetNumber} 
                                key={person.id} />
                        })}
                    </div>  
                <PageButton />
            </main>        
       </div>
    )
}
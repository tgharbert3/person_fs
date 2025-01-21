import { useEffect, useState } from "react"

import { fetchPeopleBySize } from "../services/api"
import NavBar from "../components/NavBar";
import Card from '../components/Card'
import '../styles/index.css';
import '../styles/container.css'
import HeaderCard from "../components/HearderCard";

import { useAppSelector } from "../store/hooks";
import { selectLimit, selectOffset } from "../store/pageSizeSlice";
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
    const pageNum = useAppSelector(selectOffset);

    useEffect(() => {
        async function fetchPeople(pageNum: number, size: number) {
            try {
                const peopleFromApi = await fetchPeopleBySize(String(pageNum), String(size));
                setPeople(peopleFromApi);
            } catch(error) {
                console.error(error);
            };
        }
        fetchPeople(pageNum, pageSize);
    }, [pageSize, pageNum])

    return (
       <div>
            <main className="">
                <NavBar />
                <HeaderCard />
                    <div className="container mb-3.5">
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
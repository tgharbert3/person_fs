import { useEffect, useState } from "react"

import { fetchPeopleBySize } from "../services/api"
import NavBar from "../components/NavBar";
import Card from '../components/Card'
import '../styles/index.css';
import '../styles/container.css'
import HeaderCard from "../components/HearderCard";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectLimit, selectOffset } from "../store/pageSizeSlice";
import PageButton from "../components/PageButton";
import { fetchNumPeople, selectNumPeopleStatus } from "../store/databaseSlice";


interface person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

export default function Home() {

    const [people, setPeople] = useState<person[]>([]);
    const dispatch = useAppDispatch();

    const pageSize = useAppSelector(selectLimit);
    const pageNum = useAppSelector(selectOffset);
    const numPeopleStatus = useAppSelector(selectNumPeopleStatus);

    useEffect(() => {
        async function fetchPeople(pageNum: number, size: number) {
            try {
                const peopleFromApi = await fetchPeopleBySize(String(pageNum), String(size));
                setPeople(peopleFromApi);
                if (numPeopleStatus === 'idle') {
                    dispatch(fetchNumPeople());
                }
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
                        <div>
                        {people.map((person) => {
                            return <Card 
                                id={person.id} 
                                firstName={person.firstName} 
                                lastName={person.lastName} 
                                email={person.email} 
                                streetNumber={person.streetNumber} 
                                key={person.id} />
                        })}
                        </div>
                    </div>  
                <PageButton />
            </main>        
       </div>
    )
}
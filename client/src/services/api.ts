export async function fetchPeopleBySize(pageNum: string, size: string) {

    try {
        const respose = await fetch(`http://localhost:8080/person?offset=${pageNum}&size=${size}`);
        const data = await respose.json();

        return data.content;
    } catch (error) {
        console.error(error);
    }
}

export async function allPeople() {
    try {
        const respose = await fetch('http://localhost:8080/person/all');
        const data = await respose.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}
    

export async function getPeopleByID( id: number ) {
    try {
        const respose = await fetch(`http://localhost:8080/person/${id}`);
        const data = await respose.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}   

export async function loadPeople(firstName: string, lastName: string, email: string, streetNumber: number) {
    try {
        const response = await fetch("http://localhost:8080/person", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                streetNumber: streetNumber,
            })
        })
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

    export async function updatePerson(id: number, firstName: string, lastName: string, email: string, streetNumber: number) {
        try {
            const response = await fetch(`http://localhost:8080/person/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    streetNumber: streetNumber,
                })
            })
            return response;
        } catch (error) {
            console.error(error);
        } 
}
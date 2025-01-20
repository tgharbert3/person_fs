export async function getPeople() {

    const respose = await fetch('http://localhost:8080/person');
    const data = await respose.json();

    return data;
}   

export async function getPeopleByID( id: number ) {

    const respose = await fetch(`http://localhost:8080/person/${id}`);
    const data = await respose.json();

    return data;
}   

export async function loadPeople(firstName: string, lastName: string, email: string, streetNumber: number) {
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
}
export async function fetchPeopleBySize(size: string) {

    const respose = await fetch(`http://localhost:8080/person?offset=0&size=${size}`);
    const data = await respose.json();

    console.log(data);
    return data.content;
}

export async function pageSize10() {
    const respose = await fetch('http://localhost:8080/person?offset=0&size=10');
    const data = await respose.json();

    console.log(data);
    return data.content;
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
    console.log(response);
}
export default function HeaderCard() {
    return (
        <div className="card bg-neutral shadow-xl">
            <div className="flex justify-evenly w-4/5">
                <h2 className="basis-1/4">First Name</h2>
                <h2 className="basis-1/4 ">Last Name</h2>
                <h2 className="basis-1/4 pl-9">Email</h2>
                <h2 className="basis-1/4 text-right">Street Number</h2>
            </div>
        </div>
    )
}
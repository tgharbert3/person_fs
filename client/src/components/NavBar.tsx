import { useAppDispatch } from "../store/hooks"
import { limitSet } from "../store/pageSizeSlice";
import { allPeople } from "../services/api";

export default function NavBar() {
    
    const dispacth = useAppDispatch();

    async function onclickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if (event.currentTarget.value === "all") {
            try {
                const response = await allPeople();
                dispacth(limitSet(response.length));
            } catch (error) {
                console.error(error);
            }
        } else {
            dispacth(limitSet(Number(event.currentTarget.value)));
        }
    }

    return (
        <div className="navbar bg-base-100 mb-3.5">
            <div className="flex-none">
                <details className="dropdown">
                    <summary className="btn m-1">Change Page Size</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <button className="text-left pl-2.5 mb-1.5" value={10} onClick={onclickHandler}>10 People</button>
                        <button className="text-left pl-2.5 mb-1.5" value={100}  onClick={onclickHandler}>100 People</button>
                        <button className="text-left pl-2.5 mb-1.5" value={1000}  onClick={onclickHandler}>1000 People</button>
                        <button className="text-left pl-2.5 mb-1.5" value={"all"}  onClick={onclickHandler}>All People</button>
                    </ul>
                </details>
            </div>
            <div className="flex-1 justify-center">
                <a className="btn btn-ghost text-xl">People Information</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
                </button>
            </div>
        </div>
    )
}
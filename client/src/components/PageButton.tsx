import { useAppDispatch } from "../store/hooks";
import { offsetSet } from "../store/pageSizeSlice";

export default function PageButton() {

    const dispatch = useAppDispatch();

    async function onclickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch(offsetSet(Number(event.currentTarget.value)))
    }

    return (
        <div className="join">
            <button className="join-item btn" value={0} onClick={onclickHandler}>1</button>
            <button className="join-item btn" value={1} onClick={onclickHandler}>2</button>
            <button className="join-item btn btn-disabled">...</button>
            <button className="join-item btn">99</button>
            <button className="join-item btn">100</button>
        </div>
    )
}
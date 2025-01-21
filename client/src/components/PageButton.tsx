import { useState } from "react";
import { selectNumPeople } from "../store/databaseSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { offsetSet, selectLimit } from "../store/pageSizeSlice";

export default function PageButton() {

    const dispatch = useAppDispatch();
    const [middlePage, setMiddlePage] = useState(2);


    const numPeople = useAppSelector(selectNumPeople);
    const pageSize = useAppSelector(selectLimit);
    let numPages = 1;

    if (numPeople !== 0) {
        numPages = numPeople / pageSize;
        if (!Number.isInteger(numPages)) {
            numPages = Math.ceil(numPages);
        }
    }

    async function onclickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch(offsetSet(Number(event.currentTarget.value)))
    }

    async function dynamicHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        
        if (event.currentTarget.value == "0" || event.currentTarget.value == "1" ) {
            setMiddlePage(2);
            dispatch(offsetSet(Number(event.currentTarget.value)))
        } else {
            if (middlePage - Number(event.currentTarget.value) == 2) {
                setMiddlePage(Number(event.currentTarget.value));
                dispatch(offsetSet(Number(event.currentTarget.value)))
            } else if (middlePage - Number(event.currentTarget.value) == 1) {
                setMiddlePage(Number(event.currentTarget.value))
                dispatch(offsetSet(Number(event.currentTarget.value)))
            } else if (middlePage - Number(event.currentTarget.value) == -1) {
                setMiddlePage(Number(event.currentTarget.value))
                dispatch(offsetSet(Number(event.currentTarget.value)))
            }
            else if (middlePage - Number(event.currentTarget.value) == -2) {
                setMiddlePage(Number(event.currentTarget.value))
                dispatch(offsetSet(Number(event.currentTarget.value)))
            }
        }
    }

    if (numPages === 1) {
        return (
            <button className="join-item btn">1</button>
        )
    }
    if (numPages > 1 && numPages <= 6) {
        return (
            <div className="join">
                <button className="join-item btn" value={0} onClick={onclickHandler}>0</button>
                <button className="join-item btn" value={1} onClick={onclickHandler}>1</button>
                <button className="join-item btn" value={2} onClick={onclickHandler}>2</button>
                <button className="join-item btn" value={3} onClick={onclickHandler}>3</button>
                <button className="join-item btn" value={4} onClick={onclickHandler}>4</button>
                <button className="join-item btn" value={5} onClick={onclickHandler}>5</button>
            </div>
        )
    } else {
        return (
            <div className="join">
                <button className="join-item btn" value={middlePage - 2} onClick={dynamicHandler}>{middlePage - 2}</button>
                <button className="join-item btn" value={middlePage - 1} onClick={dynamicHandler}>{middlePage - 1}</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn" value={middlePage + 1} onClick={dynamicHandler}>{middlePage + 1}</button>
                <button className="join-item btn" value={middlePage+ 1} onClick={dynamicHandler}>{middlePage + 2}</button>
            </div>
        )
    }
}
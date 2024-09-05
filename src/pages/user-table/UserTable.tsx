import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltered, setData } from "../../store/usersSlice";
import { UserType } from "../../types/UserTypes";

import { FaAddressCard, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import TableMessage from "../../components/table-message/TableMessage";
import Section from "../../components/section/Section";
import SearchBar from "../../components/search-bar/SearchBar";
import TableRow from "../../components/table-row/TableRow";



export default function UserTable(){

    const filteredData = useSelector(selectFiltered);
    const dispatch = useDispatch();

    useEffect(function(){
        async function getUsers(){
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const fakeUsers = await res.json();
                dispatch(setData(fakeUsers));
            } catch(error) {
                const errorCasted = error as Error;
                console.log(errorCasted.message);
            }
        };
        getUsers();
    }, []);

    return (
        <Section>
            <div className="user-table__table">
                <div className="user-table__header">
                    <h1 className="user-table__heading">User Table</h1>
                    <SearchBar/>
                </div>
                <TableRow 
                    head={true} 
                    dataCol1={<><FaAddressCard /><p>Name</p></>}
                    dataCol2={<><FaUser /><p>Username</p></>}
                    dataCol3={<><IoIosMail /><p>E-mail</p></>}
                    dataCol4={<><FaPhoneAlt /><p>Phone</p></>}
                />
                <div className="user-table__content">
                    {filteredData.length < 1 && <TableMessage message="No entry was found. Try different query, or another filter."/>}
                    {filteredData.length > 0 && filteredData.map((user: UserType)=>{
                        return (
                            <TableRow
                                key={user.id}
                                head={false} 
                                dataCol1={user.name}
                                dataCol2={user.username}
                                dataCol3={user.email}
                                dataCol4={user.phone}
                            />
                            )
                    })}
                </div>
            </div>
        </Section>

    )
}

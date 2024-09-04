import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltered, setData } from "../../store/usersSlice";
import { UserType } from "../../types/UserType";

import Section from "../../components/section/Section";
import Table4Cols from "../../components/table/Table4Cols";
import Row4Cols from "../../components/row/Row4Cols";
import SearchBar from "../../components/search-bar/SearchBar";



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
            <SearchBar/>
            <Table4Cols
                caption="User Information" 
                head1="Name"
                head2="Username"
                head3="Email"
                head4="Phone" 
            >
                {filteredData.map((user: UserType)=>{
                    return (
                        <Row4Cols
                            key={user.id} 
                            dataCol1={user.name}
                            dataCol2={user.username}
                            dataCol3={user.email}
                            dataCol4={user.phone}
                        />
                    )
                })}

            </Table4Cols>

        </Section>

    )
}
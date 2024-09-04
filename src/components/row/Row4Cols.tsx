interface Row4ColsProps {
    dataCol1: string | number, 
    dataCol2: string | number, 
    dataCol3: string | number, 
    dataCol4: string | number, 
}

export default function Row4Cols({ 
    dataCol1 = "No data provided", 
    dataCol2 = "No data provided", 
    dataCol3 = "No data provided", 
    dataCol4 = "No data provided" 
}: Row4ColsProps){
    
    return (
        <tr>
            <td>{dataCol1}</td>
            <td>{dataCol2}</td>
            <td>{dataCol3}</td>
            <td>{dataCol4}</td>
        </tr>
    )
}
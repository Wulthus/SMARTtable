interface Row4ColsProps {
    head: boolean;
    dataCol1: string | React.ReactNode, 
    dataCol2: string | React.ReactNode, 
    dataCol3: string | React.ReactNode, 
    dataCol4: string | React.ReactNode, 
}

export default function TableRow({ 
    head = false,
    dataCol1 = "No data provided", 
    dataCol2 = "No data provided", 
    dataCol3 = "No data provided", 
    dataCol4 = "No data provided" 
}: Row4ColsProps){
    
    return (
        <div className={`table__row ${head && 'table__head'}`}>
            <div className={head? "table__head-cell" : "table__cell"}>{dataCol1}</div>
            <div className={head? "table__head-cell" : "table__cell"}>{dataCol2}</div>
            <div className={head? "table__head-cell" : "table__cell"}>{dataCol3}</div>
            <div className={head? "table__head-cell" : "table__cell"}>{dataCol4}</div>
        </div>
    )
}
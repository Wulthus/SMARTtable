interface TableMessageProps {
    message: string;
}

export default function TableMessage({ message }: TableMessageProps){
    return (
        <div className="table__message">
            {message}
        </div>
    )
}
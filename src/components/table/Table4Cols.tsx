interface TableProps {
    caption: string,
    head1: string,
    head2: string,
    head3: string,
    head4: string,
    children: React.ReactNode,
}

export default function Table({ caption, head1, head2, head3, head4, children }:TableProps){
    return (
        <table className="table">
            <caption className="table__caption">
                {caption}
            </caption>
            <thead className="table__head">
                <tr>
                    <th scope='col'>{head1}</th>
                    <th scope='col'>{head2}</th>
                    <th scope='col'>{head3}</th>
                    <th scope='col'>{head4}</th>
                </tr>
            </thead>
            <tbody className="table__body">
                {children}
            </tbody>

        </table>
    )
}
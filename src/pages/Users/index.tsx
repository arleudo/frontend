import { UserDialog } from "./UserDialog"
import { UsersTable } from "./UsersTable"

export function Users() {
    return (
        <div className="container mx-auto py-10">
            <UsersTable />
            <UserDialog/>
        </div>
    )
}

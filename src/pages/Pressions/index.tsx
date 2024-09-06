import { PressionChart } from "./PressionChart";
import { PressionDialog } from "./PressionDialog";
import { PressionsTable } from "./PressionsTable";

export function Pressions() {
    return (
        <div className="container mx-auto py-10">
            <PressionsTable />
            <PressionChart />
            <PressionDialog />
        </div>
    )
}

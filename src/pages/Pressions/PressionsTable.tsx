import { FullStackTooltip } from "@/components";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { toast } from "@/hooks/use-toast";
import { IPression } from "@/models";
import { PressionService } from "@/services";
import { dialogStore, pressionStore } from "@/store";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";

export function PressionsTable() {
    useEffect(() => {
        new PressionService().list();
    }, []);

    const { pressions, setPression } = pressionStore();
    const { open } = dialogStore();

    const handleSave = () => {
        setPression({} as IPression);
        open();
    }

    return (
        <div className="pl-4 pr-4 rounded-md flex items-center justify-center mx-auto max-w-6xl w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Sistólica</TableHead>
                        <TableHead>Diastólica</TableHead>
                        <TableHead>Data de Criação</TableHead>
                        <TableHead />
                    </TableRow>
                </TableHeader>
                <TableBody>{
                    pressions.map(item =>
                        <TableRow key={item.id} className="odd:bg-primary/10">
                            <TableCell>{item.sistolic}</TableCell>
                            <TableCell>{item.diastolic}</TableCell>
                            <TableCell>{item.created_at}</TableCell>
                            <TableCell className="flex flex-row gap-4 justify-end">
                                <FullStackTooltip children={< Trash2 className="hover:cursor-pointer text-accent-foreground/60" onClick={() => {
                                    new PressionService().delete(item.id, toast);
                                }} />} content="Clique para deletar a pressão." />
                                <FullStackTooltip children={< Pencil className="hover:cursor-pointer text-accent-foreground/60" onClick={() => {
                                    setPression(item);
                                    open();
                                }} />} content="Clique para editar a pressão." />
                            </TableCell>
                        </TableRow>
                    )
                }
                </TableBody>
            </Table>
            <FullStackTooltip children={<Button className="fixed bottom-4 right-4 rounded-full h-14" onClick={handleSave}
            ><Plus /></Button>} content="Clique para registrar uma nova pressão." />

        </div>
    )
}

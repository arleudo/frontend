
import { Save } from "lucide-react"
import { FullStackTooltip } from "@/components";
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { PressionService } from "@/services";
import { dialogStore, pressionStore } from "@/store";
import { IPressionInput } from "@/models";

export function PressionDialog() {
    const { opened, close } = dialogStore();
    const { pression, setPression } = pressionStore();
    const { toast } = useToast();

    const handleCreate = () => {
        if (!pression.id) {
            new PressionService().create(pression as IPressionInput, toast);
        }
        else {
            new PressionService().update(pression, toast)
        }
        close();
    }

    return (
        <Dialog open={opened} onOpenChange={close}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Pressão Arterial</DialogTitle>
                    <DialogDescription>
                        Insira os dados nos campos abaixo. Clique no botão salvar para finalizar.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Label>Pressão Sistólica</Label>
                    <Input id="sistolic" type="number" className="col-span-3" defaultValue={pression.sistolic} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const sistolic = +e.target.value;
                        setPression({ ...pression, sistolic });
                    }} />
                    <Label>Pressão Diastólica</Label>
                    <Input type="number" id="diastolic" className="col-span-3" defaultValue={pression.diastolic} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const diastolic = +e.target.value;
                        setPression({ ...pression, diastolic });
                    }} />
                </div>
                <DialogFooter>
                    <FullStackTooltip
                        children={<Button onClick={handleCreate} onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleCreate();
                            }
                        }}><Save /></Button>}
                        content="Clique para salvar a pressão" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

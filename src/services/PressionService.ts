import { IPression, IPressionInput } from "@/models";
import { pressionStore } from "@/store";
import axios from "axios";

export class PressionService {
    private url: string;

    constructor(){
        this.url = import.meta.env.VITE_URL_BACK_END + "/pression";
    }
    public list = async () => {
        const { setPressions } = pressionStore.getState();      

        const pressions = (await axios.get(this.url)).data;      
        setPressions(pressions);
    }

    public create = async (pression: IPressionInput, toast: ({ }) => void) => {
        const { pressions, setPressions } = pressionStore.getState();
        try {
            const ret = (await axios.post(this.url, pression)).data as IPression;
            setPressions([...pressions, ret]);
            toast({
                title: "Sucesso",
                description: "Pressão cadastrada com sucesso!",
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
        }
    }

    public update = async (pression: IPression, toast: ({ }) => void) => {
        const { pressions, setPressions } = pressionStore.getState();
        try {
            const ret = (await axios.put(this.url, pression)).data as IPression;
            const index = pressions.findIndex((p: IPression) => p.id === pression.id);

            if (index !== -1) {
                const updated = [...pressions];
                updated[index] = ret;
                setPressions(updated);
            }
            toast({
                title: "Sucesso",
                description: "Pressão atualizada com sucesso!",
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
        }
    }

    public delete = async (id: string, toast: ({ }) => void) => {
        const { removePression } = pressionStore.getState();

        try {
            await axios.delete(this.url + "/" + id);
            removePression(id);
            toast({
                title: "Sucesso",
                description: "Pressão removida com sucesso!",
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro",
                    variant: "destructive",
                    description: error.response?.data.message,
                });
            }
        }
    }
}
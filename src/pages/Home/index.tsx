import { Button } from "@/components/ui";
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-center gap-10 mt-10">
            <Button onClick={() => {
                navigate('/pressions');
            }} >Controle de Pressão Arterial</Button>
            <Button onClick={() => {
                navigate('/users');
            }}>Controle de Usuários</Button>
        </div>
    );
}
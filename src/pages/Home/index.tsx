import { Button } from "@/components/ui";
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const cardContent = [
    { id: 1, title: "Usuários", description: "Parte responsável por gerenciar os usuários da aplicação", content: "Aqui voce pode criar, editar e remover os usuários da aplicação", route: '/users' },
    { id: 2, title: "Pressão Arterial", description: "Parte responsável por gerenciar minha pressão arterial", content: "Aqui voce pode criar, editar e remover o meu histórico de pressão arterial, além de uma visualição de um gráfico do tipo histograma", route: '/pressions' }
]


export function Home() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {cardContent.map((card) =>
                <Card key={card.id} className="bg-transparent shadow-md rounded-lg p-6 h-full flex flex-col hover:shadow-xl transition-transform transform hover:scale-101 duration-75">
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p>{card.content}</p>
                    </CardContent>
                    <CardFooter >
                        <Button className="w-full" onClick={() => {
                            navigate(card.route);
                        }}>
                            Navegar
                        </Button>
                    </CardFooter>
                </Card>)}

        </div>
    );
}
import { Bar, BarChart, CartesianGrid } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { pressionStore } from "@/store";

export function PressionChart() {
    const { pressions } = pressionStore();
    const chartConfig = {
        sistolic: {
            label: "Sistólica",
            color: "#2563eb",
        },
        diastolic: {
            label: "Diastólica",
            color: "#99a5fa",
        },
        labelkey: {
            label: "Pressão Selecionada"
        }
    } satisfies ChartConfig;

    return (        <>
            <ChartContainer config={chartConfig} className="min-h-[400px] pl-4 pr-4 rounded-md flex items-center justify-center mx-auto max-w-6xl w-full">
                <BarChart accessibilityLayer data={pressions}>
                    <CartesianGrid vertical={false} />
                    <ChartTooltip content={<ChartTooltipContent labelKey="labelkey"/>} />
                    <ChartLegend content={<ChartLegendContent  />} />
                    <Bar dataKey="sistolic" fill="var(--color-sistolic)" radius={4} />
                    <Bar dataKey="diastolic" fill="var(--color-diastolic)" radius={4} />
                </BarChart>
            </ChartContainer>
        </>
    );
}
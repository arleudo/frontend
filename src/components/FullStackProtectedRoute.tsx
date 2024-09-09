import { usersStore } from "@/store";
import { Navigate } from "react-router-dom";

export const FullStackProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = usersStore();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

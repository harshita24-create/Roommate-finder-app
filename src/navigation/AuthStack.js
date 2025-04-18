import { BrowserRouter } from "react-router-dom";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./Appstack";
import { useAuth } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import { Routes, Route } from "react-router-dom";

export const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {isAuthenticated ? (
          <Route path="/*" element={<AppStack />} />
        ) : (
          <Route path="/*" element={<AuthStack />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};


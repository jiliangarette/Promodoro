import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import AppRouter from "./router";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <AppRouter />
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;

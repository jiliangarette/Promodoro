import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "./components/Spinner";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Test = lazy(() => import("./mock/Test"));

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

import LoadingComponent from "./components/LoadingComponent";
import { lazy, Suspense } from "react";
const MovieList = lazy(() => import("./components/MovieList"));
const FormComponent = lazy(() => import("./components/FormComponent"));

export function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<LoadingComponent/>}>
        <FormComponent />
        <MovieList />
      </Suspense>
    </div>
  )
}
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import PoetryPage from './Pages/Poetry/PoetryPage'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
                <Route path="Home" element={<HomePage />} />
				<Route path="/About" element={<AboutPage />} />
                <Route path="/Poetry" element={<PoetryPage />} />
			</Route>
		)
	);

    return (
        <RouterProvider  router={router}/>
    )
}

export default App;

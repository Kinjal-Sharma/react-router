import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import "./App.css"
import { GetMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { GetMoviesDetails } from "./api/GetMovieDetails";

const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: GetMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ]
    },
  ]);


  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/movie" element={<Movie/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //     </Routes>
  //     </BrowserRouter>
  //   )
  // )


  return <RouterProvider router={router} />
}
export default App;
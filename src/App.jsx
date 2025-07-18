import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import "./App.css"
import { GetMoviesData } from "./api/GetAPIData";

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
          path: "/contact",
          element: <Contact />,
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
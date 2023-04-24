import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'category/:categoryId',
        element: <Category/>
      }
    ],
  },
  {
    path: 'news',
    element: <NewsLayout />,
    children: [
      {
        path: ':newsId',
        element: <News />
      }
    ]
  }
]);

export default router;

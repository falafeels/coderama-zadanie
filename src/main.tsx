import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './routes/layout.tsx';
import ErrorPage from './error-page.tsx';

const MovieSearch = React.lazy(() => import('./routes/movie-search'));
const Detail = React.lazy(() => import('./routes/detail'));
const Favourites = React.lazy(() => import('./routes/favourites'));

const queryClient = new QueryClient()
const Loading = () => <p>Loading ...</p>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MovieSearch /> },
      {
        path: 'detail/:movieId',
        element: <Detail />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.Suspense>
  </React.StrictMode>,
)

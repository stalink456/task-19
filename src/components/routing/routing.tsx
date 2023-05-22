import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Auth } from 'pages/auth';
import { Loading } from 'components/ui-components/loading';

const Main = React.lazy(
  () => import(/* webpackChunkName: "MainPage" */ '../../pages/main')
);

const Quiz = React.lazy(
  () => import(/* webpackChunkName: "Quiz" */ '../../pages/quiz')
);

const SearchActivities = React.lazy(
  () =>
    import(
      /* webpackChunkName: "SearchActivities" */ '../../pages/search-activities'
    )
);

export const Routing: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route
            path='/main'
            element={
              <Suspense fallback={<Loading />}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path='/quiz'
            element={
              <Suspense fallback={<Loading />}>
                <Quiz />
              </Suspense>
            }
          />
          <Route
            path='/search-activities'
            element={
              <Suspense fallback={<Loading />}>
                <SearchActivities />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

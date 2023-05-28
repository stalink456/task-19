import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Auth } from 'pages/auth';
import { Loading } from 'components/ui-components/loading';

const Main = React.lazy(
  () => import(/* webpackChunkName: "MainPage" */ '../../pages/main')
);

const Survey = React.lazy(
  () => import(/* webpackChunkName: "Survey" */ '../../pages/survey')
);

const SearchActivities = React.lazy(
  () =>
    import(
      /* webpackChunkName: "SearchActivities" */ '../../pages/search-activities'
    )
);

const RecomendedActivities = React.lazy(
  () =>
    import(
      /* webpackChunkName: "RecomendedActivities" */ '../../pages/recomended-activities'
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
            path='/survey'
            element={
              <Suspense fallback={<Loading />}>
                <Survey />
              </Suspense>
            }
          />
          <Route
            path='/recomended-activities'
            element={
              <Suspense fallback={<Loading />}>
                <RecomendedActivities />
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

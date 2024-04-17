import {useRoutes} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import { path } from '../common/path';

const useRouteCustom = () => {
    const route = useRoutes([
        {
            path: path.trangChu,
            element: <HomeTemplate />,
            children: [
              {
                index: true,
                element: <HomePage />,
              },
            ],
          },
    ]);
    return route;
  
}

export default useRouteCustom

import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import { Navigate } from 'react-router-dom';
import { Context } from '..';

const AppRouter = () => {
    const {user}= useContext(Context);

    return (
            <Routes>
                {user.isAuth && privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                />
                )}
                <Route path="*" element={<Navigate to="/gallery" replace />} />
            </Routes>
    );
};

export default AppRouter;

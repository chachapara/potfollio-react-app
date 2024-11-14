import React from "react";
import Brand from './pages/Brand/index';
import RBSheet from './pages/RBSheet/index';
import Video from './pages/Video/index'

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
export default function link() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Brand />} ></Route>
                <Route path='/Brand'element={<Brand/>}>
                </Route>
                <Route path='/RBSheet' element={<RBSheet />} ></Route>
                <Route path='/Video' element={<Video />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}
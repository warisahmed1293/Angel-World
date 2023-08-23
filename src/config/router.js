import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Aboutus from '../pages/Aboutus'
import Product from '../pages/Product'
import Layout from './Layout'

function router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default router
import React from 'react'
import {Routes, Route, useParams} from 'react-router-dom'
// import { TestComponent } from './components';
import { IndexPage, AboutPage, UsersPage } from './pages'
import Layout from './layouts'

const App = () => {
    return(
        <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<IndexPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/users" element={<UsersPage/>}></Route>
        </Route>
    </Routes>
    )
}

export default App;

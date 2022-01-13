import React from "react"
import {
    Routes,
    Route,
    Outlet,
    Link 
} from 'react-router-dom'

const Info = React.lazy(()=> import("./about/info"))
const Contact = React.lazy(()=> import("./about/contact")) 
export function Home(){
    return (
        <>
            <h1>Welcome to Home</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, modi laborum ab, ipsam delectus minima vitae dolorem nesciunt tempora placeat ratione! Labore dolore quidem illum laudantium quibusdam aliquam dolor officiis.</p>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="info" element={
                        <React.Suspense fallback={<>...</>}>
                            <Info />
                        </React.Suspense>
                    }/>
                    <Route path="contact" element={
                        <React.Suspense fallback={<>...</>}>
                            <Contact />
                        </React.Suspense>
                    }/>
                    <Route path="*" element={<NoMatch />}/>
                </Route>
            </Routes>
        </>
    )
}

function Layout(){
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/home/info'>Info</Link>
                <Link to='/home/contact'>Contact</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

function NoMatch(){
    return (
        <>
            <div>
                <h2>Error 404 - file not found</h2>
                <Link to="/home">go to home</Link>
                <Link to ="/info">go to info</Link>
            </div>
        </>
    )
}
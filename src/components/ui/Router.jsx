const { BrowserRouter, Routes, Route } = require("react-router-dom")
import App from '../../App'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/' />

            <Route path='*' element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>
}

export default Router;
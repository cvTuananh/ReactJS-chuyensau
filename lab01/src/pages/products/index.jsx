import { Route, Routes } from "react-router-dom";
import { Product } from "./product";
import { NewProductForm } from "./newProductForm";
import { List } from "./list";
export function Products(){
return(
    <>
    <Routes>
    <Route>
        <Route path=":productID" element={<Product />}/>
        <Route path="new" element={<NewProductForm />}/>
        <Route index element={<List/>}/>
    </Route>
    </Routes>
    </>
)
}
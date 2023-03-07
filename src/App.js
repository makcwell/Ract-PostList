// import { Card, CardContent, CardHeader } from "@mui/material";
import { useSlotProps } from "@mui/base";
import { Container } from "@mui/system";
import React, { createContext, useEffect, useState } from "react";
import s from './app.css';
import MainList from "./Components/MainList/mainList";
import Card from "./Components/MainList/PostList/Card/myCard";
import { PostList } from "./Components/MainList/PostList/PostList";
import ResponsiveAppBar from "./Components/Header/appHeader";
import MainHead from "./Components/MainList/MainHead/mainHead";
import Footer from "./Components/Footer/footer";
import ElementPagination from "./Components/MainList/Pagination/pagination";
import { RenderConditionCard } from "./Components/MainList/PostList/RenderConditionCard/RenderConditionCard";
// Инизиализация приложения 

export const LocalStorageContext = createContext({ token: '', setToken: () => void 0 })

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))



    return (
        <LocalStorageContext.Provider value={{ token, setToken }}>

            <ResponsiveAppBar />
            <MainList>
                <Container
                    sx={{ mt: '1rem', mb: '1rem' }}>
                    <MainHead />
                    {/* <PostList /> */}
                    <RenderConditionCard />
                    <ElementPagination />
                </Container>
            </MainList>
            <Footer />

        </LocalStorageContext.Provider>
    );
}

export default App;

// import { Card, CardContent, CardHeader } from "@mui/material";
import { useSlotProps } from "@mui/base";
import { Container } from "@mui/system";
import React from "react";
import s from './app.css';
import Header from './Components/Header/header'
import MainList from "./Components/MainList/mainList";
import Card from "./Components/MainList/PostList/Card/myCard";
import PostList from "./Components/MainList/PostList/postList";

// Инизиализация приложения 
function App() {
    return (
        <>
            <Header />
            <MainList>
                <Container
                    sx={{ mt: '1rem', mb: '1rem' }}
                >
                    <PostList>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </PostList>

                </Container>

            </MainList>



        </>
    );
}

export default App;

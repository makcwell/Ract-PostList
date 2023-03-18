// import { Card, CardContent, CardHeader } from "@mui/material";
import { Container } from "@mui/system";
import { createContext, useCallback, useEffect, useState } from "react";
import MainList from "./Components/MainList/mainList";
import ResponsiveAppBar from "./Components/Header/appHeader";
import MainHead from "./Components/MainList/MainHead/mainHead";
import Footer from "./Components/Footer/footer";
import ElementPagination from "./Components/MainList/Pagination/pagination";
import { CardNotAuth } from "./Components/MainList/PostList/CardNotAuth/CardNotAuth";
import { PostList } from "./Components/MainList/PostList/postList";
import apiPosts from "./API/PostsApi";
// Инизиализация приложения 

export const LocalStorageContext = createContext({ token: '', setToken: () => void 0 })

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))

    const [cards, setCards] = useState([]);

    const [isUpdateCards, setUpdateCards] = useState(false)

    useEffect(() => {
        apiPosts.getAllPosts()
            .then((dataPosts) => {
                setCards(dataPosts)
            })
    }, [isUpdateCards, token])

    const handleRepeatReq = useCallback(() => setUpdateCards(!isUpdateCards), [isUpdateCards])

    return (
        <LocalStorageContext.Provider value={{ token, setToken }}>
            <ResponsiveAppBar />
            <MainList>
                <Container
                    sx={{ mt: '1rem', mb: '1rem' }}>
                    <MainHead handleRepeatReq={handleRepeatReq} />
                    {/* <PostList /> */}
                    {(token && <PostList cards={cards} />) || <CardNotAuth />}
                    <ElementPagination />
                </Container>
            </MainList>
            <Footer />
        </LocalStorageContext.Provider >
    );
}

export default App;

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
import { getPostPagination } from "./API/PostsApi";
import apiPosts from "./API/PostsApi";
// Инизиализация приложения 

export const LocalStorageContext = createContext({ token: '', setToken: () => void 0 })

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState('')
    const [isUpdateCards, setUpdateCards] = useState(false)
    const [userInfData, setUserInfData] = useState('')
    const [limit] = useState(9)
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
        (async () => {
            const answer = await getPostPagination(page, limit)
            setPageQty(Math.ceil(answer?.total / 10))
            setCards(answer?.posts)
        })()

    }, [limit, page, setCards, isUpdateCards, token])
    // useEffect(() => {
    //     apiPosts.getAllPosts()
    //         .then((dataPosts) => {
    //             setCards(dataPosts)
    //         })
    // }, [isUpdateCards, token])

    const handleFirstRender = useCallback(() => {
        setUpdateCards(!isUpdateCards)
        setPage(1)
    }, [isUpdateCards])

    return (
        <LocalStorageContext.Provider value={{
            token,
            setToken,
            message,
            setMessage,
            handleFirstRender,
            userInfData,
            setUserInfData,
            page,
            setPage,
            pageQty
        }}>
            <ResponsiveAppBar />
            <MainList>
                <Container
                    sx={{ mt: '1rem', mb: '1rem' }}>
                    <MainHead />
                    {(token && <PostList cards={cards} />) || <CardNotAuth />}
                    <ElementPagination />
                </Container>
            </MainList>
            <Footer />
        </LocalStorageContext.Provider >
    );
}

export default App;

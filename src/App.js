// import { Card, CardContent, CardHeader } from "@mui/material";
import { Container } from "@mui/system";
import { createContext, useEffect, useState, useCallback } from "react";
import MainList from "./Components/MainList/mainList";
import ResponsiveAppBar from "./Components/Header/appHeader";
import MainHead from "./Components/MainList/MainHead/mainHead";
import Footer from "./Components/Footer/footer";
import ElementPagination from "./Components/MainList/Pagination/pagination";
import { CardNotAuth } from "./Components/MainList/PostList/CardNotAuth/CardNotAuth";
import { PostList } from "./Components/MainList/PostList/postList";
import { CardInfo } from "./Components/MainList/PostList/CardInfo/CardInfo";
import { Routes, Route } from "react-router-dom";
import { getPostPagination, setLikeOnCard } from "./API/PostsApi";
import useDebounce from "./hooks/useDebounce";
import { LIMIT } from "./constants/constants";
import { MyPostList } from "./Components/MainList/MyPostList/MyPostList";
import { EditPost } from "./Components/MainList/PostList/EditPost/EditPost";
// Инизиализация приложения 

export const LocalStorageContext = createContext({ token: '', setToken: () => void 0 })

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [cards, setCards] = useState([])
    const [message, setMessage] = useState('')
    const [isUpdateCards, setUpdateCards] = useState(false)
    const [userInfData, setUserInfData] = useState('')
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const debounceSearchQuery = useDebounce(searchQuery, 700)


    useEffect(() => {
        if (token) {
            const getPaginationData = async () => {
                const answer = await getPostPagination(page, LIMIT, debounceSearchQuery)
                setPageQty(parseInt(Math.ceil(answer?.total / LIMIT)))
                setCards(answer?.posts)
                if (answer?.postLength === 0) {
                    setPage(1)
                }
            }
            getPaginationData()

        }
    }, [token, isUpdateCards, debounceSearchQuery, page])

    const handleFirstRender = () => {
        setUpdateCards(!isUpdateCards)
    }

    const handleSetLike = useCallback(async (card) => {
        const isLike = card.likes.some((id) => id === userInfData._id)
        const likedCard = await setLikeOnCard(card._id, isLike)
        const newCards = cards.map(card => card._id === likedCard._id ? likedCard : card)
        setCards(newCards)
    }, [cards, userInfData._id])



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
            pageQty,
            searchQuery,
            setSearchQuery,
            handleSetLike,
        }}>

            <ResponsiveAppBar />
            <MainList>

                <Container sx={{ mt: '1rem', mb: '1rem' }}>

                    <Routes>
                        <Route path={'/'} element={
                            <>

                                <MainHead />
                                {(token &&
                                    <>
                                        <PostList cards={cards} />
                                        <ElementPagination />
                                    </>) || <CardNotAuth />}

                            </>
                        } />
                        <Route path={'post/:id'} element={<CardInfo cards={cards} />} />
                        <Route path={'mypostlist'} element={
                            <>
                                <MainHead />
                                <MyPostList />
                            </>
                        } />
                        <Route path={'post/:id/edit'} element={<EditPost />} />
                        <Route path={'*'} element={<h1>404</h1>} />
                    </Routes>

                </Container>

            </MainList>
            <Footer />
        </LocalStorageContext.Provider>
    );
}

export default App;
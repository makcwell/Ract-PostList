import {Container} from "@mui/system";
import {createContext, useCallback, useEffect, useState} from "react";
import MainList from "./Components/MainList/mainList";
import ResponsiveAppBar from "./Components/Header/appHeader";
import MainHead from "./Components/MainList/MainHead/mainHead";
import Footer from "./Components/Footer/footer";
import ElementPagination from "./Components/MainList/Pagination/pagination";
import {CardNotAuth} from "./Components/MainList/PostList/CardNotAuth/CardNotAuth";
import {PostList} from "./Components/MainList/PostList/postList";
import {Routes, Route} from "react-router-dom";

import apiPosts from "./API/PostsApi";
import PostInfo from "./Components/MainList/PostInfo/PostInfo";


// Инизиализация приложения 

export const LocalStorageContext = createContext({token: '', setToken: () => void 0})

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState('')
    const [isUpdateCards, setUpdateCards] = useState(false)
    const [userInfData, setUserInfData] = useState('')


    useEffect(() => {
        apiPosts.getAllPosts()
            .then((dataPosts) => {
                setCards(dataPosts)
            })
    }, [isUpdateCards, token])

    const handleFirstRender = useCallback(() => setUpdateCards(!isUpdateCards), [isUpdateCards])

    return (
        <LocalStorageContext.Provider
            value={{token, setToken, message, setMessage, handleFirstRender, userInfData, setUserInfData}}>
            <ResponsiveAppBar/>
            <MainList>

                <Container sx={{mt: '1rem', mb: '1rem'}}>
                    <Routes>
                        <Route path={'/'} element={
                            <>
                                <MainHead/>
                                {(token && <PostList cards={cards}/>) || <CardNotAuth/>}
                                <ElementPagination/>

                            </>
                        }/>
                        <Route path={'/post/:id'} element={<PostInfo cards={cards}/>}/>
                    </Routes>

                </Container>
            </MainList>
            <Footer/>
        </LocalStorageContext.Provider>
    );
}

export default App;

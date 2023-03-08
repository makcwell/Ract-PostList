import { useContext } from "react";
import { LocalStorageContext } from "../../../../App";
import { CardNotAuth } from "../CardNotAuth/CardNotAuth";
import { PostList } from "../postList";



export function RenderConditionCard() {

    const { token = '' } = useContext(LocalStorageContext);

    console.log('Токен из RenderConditionCard >>', token)

    if (token) {

        return (
            <PostList />
        )

    } return (

        <CardNotAuth />
    )
}
import React from 'react';
import s from './currentUser.module.css'
import {Avatar, Button} from "@mui/material";

function CurrentUser(props) {
    return (
        <div className={s.container}>
            <Avatar
                alt="Travis Howard"
                src="https://nationaltoday.com/wp-content/uploads/2020/05/Yoda.jpg"
                sx={{ width: 55, height: 55 }}
            />
            {/*<span className={s.avatar}>*/}
            {/*    <img src={'https://nationaltoday.com/wp-content/uploads/2020/05/Yoda.jpg'}/>*/}
            {/*</span>*/}
            <div>
                <div className={"userName"}>Test</div>
                <div className={'mail'}>test@test.com
                    <Button variant="contained" size="small">Изменить</Button>
                    {/*<button type={'button'} className={s.btn}>*/}
                    {/*    <span>Изменить</span>*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
}

export default CurrentUser;

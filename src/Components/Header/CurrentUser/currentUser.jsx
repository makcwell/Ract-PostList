import React from 'react';
import s from './currentUser.module.css'
function CurrentUser(props) {
    return (
        <div className={s.container}>
            <span className={s.avatar}>
                <img src={'https://nationaltoday.com/wp-content/uploads/2020/05/Yoda.jpg'}/>
            </span>
            <div>
                <div className={"userName"}>Test</div>
                <div className={'mail'}>test@test.com
                    <button type={'button'} className={s.btn}>
                        <span>Изменить</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CurrentUser;

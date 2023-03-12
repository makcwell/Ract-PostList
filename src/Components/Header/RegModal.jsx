import styles from './RegModal.module.css'

function Modal({ active, setActive, children }) {
    return (
        <div className={`${styles.modal} ${active && styles.active}`}
            onClick={() => setActive(false)}>

            <div className={`${styles.modal_content} ${active && styles.modal_content_active}`}
                onClick={e => e.stopPropagation()}>

                {children}
            </div>
        </div>
    );
};

export default Modal;
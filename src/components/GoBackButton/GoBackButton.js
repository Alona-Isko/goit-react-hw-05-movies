import s from './GoBackButton.module.css';

const GoBackButton = ({ onGoBack }) => {
    return (
        <>
            <button
                type="button"
                onClick={onGoBack}
                className={s.btn__goback}
            >
                &#x027F5; Go back
            </button>
        </>
    )
};

export default GoBackButton;
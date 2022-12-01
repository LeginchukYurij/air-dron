import styled, {keyframes} from "styled-components";
import { useContext } from "react";
import { NotificationContext } from "../context/notification/notificationContext";

const shiftRightAnimation = keyframes`
    0% {
        opacity: 0;
        transform:  translateX(calc(-100% - 20px));
    }
    100% {
        opacity: 1;
        transform:  translateX(0);
    }
`

const NotificationWrapper = styled.div`
    position: fixed;
    transform: translateX(calc(-100% - 20px));
    left: 20px;
    bottom: 50px;
    background-color: green;
    border-radius: 5px;
    padding: 10px;
    max-width: 200px;
    width: 100%;
    color: #fff;
    
    &.active {
        animation: ${shiftRightAnimation};
        animation-duration: .3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    }


    @keyframes shiftRight {
        
    }
`;



const Notification = () => {
    const {notification} = useContext(NotificationContext);
    
    // if(!notification.visible) {
    //     return null;
    // }

    return (
        <NotificationWrapper className={notification.visible ? 'active' : null}>
            {notification.text}
        </NotificationWrapper>
    )
};


export default Notification;
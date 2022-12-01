import styled from "styled-components";
import { useContext } from "react";
import { NotificationContext } from "../context/notification/notificationContext";

const NotificationWrapper = styled.div`
    position: fixed;
    left: 20px;
    bottom: 50px;
    background-color: green;
    border-radius: 5px;
    padding: 10px;
    max-width: 200px;
    color: #fff;
    
    &.active {
        animation: shiftRight 5s linear 0s infinite normal none
    }


    @keyframes shiftRight {
        0% {
            transform:  translate(0 -100%) skew(0) rotate(0);
        }
        70% {
            transform:  translate(0 100%);
        }
        100% {
            transform:  translate(0 -100%) skew(0) rotate(0);
        }
    }
`;

const Notification = () => {
    const {notification} = useContext(NotificationContext);
    
    if(!notification.visible) {
        return null;
    }

    return (
        <NotificationWrapper className={notification.visible ? 'active' : null}>
            {notification.text}
        </NotificationWrapper>
    )
};


export default Notification;
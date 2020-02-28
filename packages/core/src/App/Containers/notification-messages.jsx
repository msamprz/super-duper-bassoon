import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'Stores/connect';
import Notification, { max_display_notifications } from '../Components/Elements/NotificationMessage';
import 'Sass/app/_common/components/notification-message.scss';

class NotificationMessages extends React.Component {
    state = {};
    setRef = el => {
        if (el && el.parentElement) {
            this.setState({
                bounds: el.parentElement.getBoundingClientRect(),
            });
        }
    };

    render() {
        const { marked_notifications, notification_messages, removeNotificationMessage } = this.props;
        const { bounds } = this.state;
        const style = {
            top: bounds && bounds.top + 8,
        };

        const portal = ReactDOM.createPortal(
            <div className='notification-messages' style={style}>
                <TransitionGroup component='div'>
                    {notification_messages
                        .filter(message => !marked_notifications.includes(message.key))
                        .slice(0, max_display_notifications)
                        .map((notification, idx) => (
                            <CSSTransition
                                appear
                                key={idx}
                                in={!!notification.header}
                                timeout={150}
                                classNames={{
                                    appear: 'notification--enter',
                                    enter: 'notification--enter',
                                    enterDone: 'notification--enter-done',
                                    exit: 'notification--exit',
                                }}
                                unmountOnExit
                            >
                                <Notification
                                    data={notification}
                                    removeNotificationMessage={removeNotificationMessage}
                                />
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            </div>,
            document.getElementById('popup_root')
        );

        return (
            <div ref={this.setRef} className='notification-messages-bounds'>
                {portal}
            </div>
        );
    }
}

NotificationMessages.propTypes = {
    notification_messages: PropTypes.arrayOf(
        PropTypes.shape({
            closeOnClick: PropTypes.func,
            delay: PropTypes.number,
            header: PropTypes.string,
            is_auto_close: PropTypes.bool,
            message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            size: PropTypes.oneOf(['small']),
            type: PropTypes.oneOf(['warning', 'info', 'success', 'danger', 'contract_sold']),
        })
    ),
    removeNotificationMessage: PropTypes.func,
};

export default connect(({ ui }) => ({
    marked_notifications: ui.marked_notifications,
    notification_messages: ui.notification_messages,
    removeNotificationMessage: ui.removeNotificationMessage,
}))(NotificationMessages);

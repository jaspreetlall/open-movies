import React from 'react';
import './NotificationModal.scss';

function NotificationModal({ notificationVisibility, setNeedNotification }) {

  const isNotificationVisible = notificationVisibility
    ? "notification notification--visible"
    : "notification notification--hidden";

  return (
    <section className={isNotificationVisible}>
      <div className="notification__block container">
        <h4 className="notification__block-title">Complete!</h4>
        <p className="notification__block-desc">You have successfully nominated your favourite movies.</p>
        <button className="notification__block-button" onClick={() => setNeedNotification(false)}>Go Back</button>
      </div>
    </section>
  )
}

export default NotificationModal

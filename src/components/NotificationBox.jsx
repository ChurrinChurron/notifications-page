import { useState } from "react"
import socialData from "../data/social-data"
import Notifications from "./Notifications"

const NotificationBox = () => {

  const [read, setRead] = useState(false);

  return (
    <section className="px-4 pt-6 pb-0 bg-white max-w-[45em] sm:px-8 sm:rounded-md">
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
                <h3 className="font-bold text-xl">Notifications</h3>
                <span className="px-3 py-[.1em] bg-blue-900 text-white font-bold rounded-md">{!read ? socialData[0].notificationsNumber : '0'}</span>
            </div>
            <button onClick={() => setRead(true)} className="font-medium text-gray-600 hover:text-blue-900">Mark all as read</button>
        </div>
        <div>
            <Notifications read={read} />
        </div>
    </section>
  )
}

export default NotificationBox
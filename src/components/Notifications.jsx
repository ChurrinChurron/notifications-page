import socialData from "../data/social-data"

const Notifications = ({read}) => {

  return (
    <>
        {socialData[1].notificationsHistory.map(social => {
            return <div key={social.id} className={`${social.newNotif && !read ? 'bg-gray-100' : ''} my-2 rounded-md p-5 flex items-start gap-4`}>
                <img src={social.followerProfile} className="h-12" alt={social.followerFirstName} />
                <div className="flex flex-col">
                    <span className={`${social.newNotif && !read ? "after:content-[''] after:w-2 after:h-2 after:absolute after:bg-red-500 after:rounded-full after:ml-2 after:mt-2" : ''} relative text-gray-600 text-[.950em]`}><a href="#" className="text-black font-bold text-[.980em] hover:text-blue-900">{social.followerFirstName} {social.followerLastName}</a> {social.followerActivity} <a href="#" className="text-gray-700 font-bold hover:text-blue-900">{social.followerActivity.includes("group") ? social.userGroup : social.followerActivity.includes("post") ? social.userPost : ""}</a></span>
                    <span className="text-gray-400 text-[.950em]">{social.notifTime}{social.notifLapse === "minute" ? "m" : (social.notifLapse === "day" || social.notifLapse === "week") && social.notifTime < 2 ? ` ${social.notifLapse}` : ` ${social.notifLapse}s`} ago</span>
                    {social.followerActivity.includes("private message") ? <a href="#" className="mt-3 border border-gray-300 rounded-md p-4 hover:bg-blue-50 hover:border-blue-50"><p className="text-[.9em] text-gray-600 leading-5 sm:text-[.960em]">{social.followerMessage}</p></a> : ""}
                </div>
                {social.followerActivity.includes("picture") ? <a href="#" className="ml-auto rounded-lg border-2 border-transparent hover:border-gray-300"><img src={social.userPostPicture} className="w-full h-10" alt="picture" /></a> : ""}
            </div>
        })}
    </>
  )
}

export default Notifications
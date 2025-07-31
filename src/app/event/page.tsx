

import { Metadata } from "next"
import Events from "../pages/events"


export const metadata:Metadata = {
  title: "Event Details",
  description: "Join top military leaders from across Africa at the African Chiefs of Defense Summit in Abuja, August 27–28, 2025. ",
  openGraph: {
    title: "Event Details | ACDS 2025",
    description: "Join top military leaders from across Africa at the African Chiefs of Defense Summit in Abuja, August 27–28, 2025.",
    url: "https://acdss.com/events",
    siteName: "ACDS 2025",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Details | ACDS 2025",
    description: "Join top military leaders from across Africa at the African Chiefs of Defense Summit in Abuja, August 27–28, 2025."
  },
  alternates: {
    canonical: "https://acdss.com.ng/events"
  }
};



const EventsPage = () => {
  return(
    <Events/>
  )
}

export default EventsPage



import { Metadata } from "next";
import News from "../pages/news";

export const metadata:Metadata = {
  title: "Summit News",
  description: "Stay updated with the latest news and developments from the African Chiefs of Defense Summit 2025. Discover key announcements, strategic insights, and collaborative efforts shaping Africa’s defense future. ",
  openGraph: {
    title: "Summit News | ACDS 2025",
    description: "Stay updated with the latest news and developments from the African Chiefs of Defense Summit 2025. Discover key announcements, strategic insights, and collaborative efforts shaping Africa’s defense future.",
    url: "https://acdss.com/news",
    siteName: "ACDS 2025",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit News | ACDS 2025",
    description: "Stay updated with the latest news and developments from the African Chiefs of Defense Summit 2025. Discover key announcements, strategic insights, and collaborative efforts shaping Africa’s defense future."
  },
  alternates: {
    canonical: "https://acdss.com.ng/news"
  }
};

const NewsPage = () =>{
  return(
    <News/>
  )
}

export default NewsPage
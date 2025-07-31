
import { Metadata } from "next";
import Gallery from "../pages/gallery";

export const metadata:Metadata = {
  title: "Summit Gallery",
  description: "Browse official photos from the African Chiefs of Defense Summit 2025, featuring key moments, distinguished military leaders. ",
  openGraph: {
    title: "Summit Gallery | ACDS 2025",
    description: "Browse official photos from the African Chiefs of Defense Summit 2025, featuring key moments, distinguished military leaders.",
    url: "https://acdss.com/gallery",
    siteName: "ACDS 2025",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Gallery | ACDS 2025",
    description: "Browse official photos from the African Chiefs of Defense Summit 2025, featuring key moments, distinguished military leaders."
  },
  alternates: {
    canonical: "https://acdss.com.ng/gallery"
  }
};

const GalleryPage = () =>{
  return(
    <Gallery/>
  )
}

export default GalleryPage
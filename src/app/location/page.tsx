import { Metadata } from "next";
import Location from "../pages/location";

export const metadata:Metadata = {
  title: "Summit Location",
  description: "Explore details about the venue for the African Chiefs of Defense Summit 2025 in Bola Ahmed Tinubu International Conference Centre Abuja, Nigeria. ",
  openGraph: {
    title: "Summit Location | ACDS 2025",
    description: "Explore details about the venue for the African Chiefs of Defense Summit 2025 in Bola Ahmed Tinubu International Conference Centre Abuja, Nigeria. ",
    url: "https://acdss.com/location",
    siteName: "ACDS 2025",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Location | ACDS 2025",
    description: "Explore details about the venue for the African Chiefs of Defense Summit 2025 in Bola Ahmed Tinubu International Conference Centre Abuja, Nigeria. "
  },
  alternates: {
    canonical: "https://acdss.com.ng/location"
  }
};




const VenuePage = () => {
  return(
    <div>
      <Location/>
    </div>
  )
}

export default VenuePage;
import { Metadata } from "next";
import Consultants from "../pages/consultants";

export const metadata:Metadata = {
  title: "Our Consultants",
  description: "Explore the list of top consultancy companies responsible for planning and executing our event. Learn more about their roles, expertise, and contributions to its success.",
  openGraph: {
    title: "Summit Consultants",
    description: "Explore the list of top consultancy companies responsible for planning and executing our event. Learn more about their roles, expertise, and contributions to its success.",
    url: "https://acdss.com.ng/consultants",
    siteName: "ACDS",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Consultants",
    description: "Explore the list of top consultancy companies responsible for planning and executing our event. Learn more about their roles, expertise, and contributions to its success."
  },
  alternates: {
    canonical: "https://acdss.com.ng/consultants"
  }
};

const ConsultantsPage = () => {
  return(
    <Consultants/>
  )
}

export default ConsultantsPage
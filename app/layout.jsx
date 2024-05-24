import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your Dream Rental Property",
  keywords: "rental, find rentals, find properties"
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
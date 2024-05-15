import Footer from "../(auth)/Footer"
import Header from "./Header"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
    <section>
       <div> <Header/></div>
        {children}
        {/* <Header/> */}
        {/* <Footer/> */}
        </section>)
  }
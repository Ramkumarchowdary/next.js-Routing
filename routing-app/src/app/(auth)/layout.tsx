import Footer from "./Footer"
import Header from "./Header"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
    <section>
        <div><Header/></div>
        {children}
        <div style={{margin:"20px"}}><Footer/></div>
        {/* <footer>footer</footer> */}
        </section>)
  }
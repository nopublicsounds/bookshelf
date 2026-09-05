export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <p className="text-center text-black m-4">©{currentYear} chan</p>
        </footer>
    )
}
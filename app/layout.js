import './globals.scss'

export const metadata = {
    title: 'Chronos Chronicles – 3D New Year Countdown',
    description: 'Dive into the New Year with Chronos Chronicles, an immersive 3D countdown experience. Watch as time unwinds with a beautifully animated clock, showcasing the magical tale of Aeon the Phoenix. Join us as we countdown to 2024 with style and story!',
}


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
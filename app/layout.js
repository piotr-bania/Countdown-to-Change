import './globals.scss'

export const metadata = {
    title: 'Sculpting Time: The 3D Clock Project',
    description: "Step into the realm of interactive art where code meets craftsmanship. This video unveils the creation of a stunning 3D digital clock, meticulously crafted and brought to life through the synergy of Blender's modeling, the power of Next.js, and the magic of React Three Fiber. Discover how every component harmonizes to measure moments in a spectacle of shadows and light.",
    keywords: '3D clock, Blender modeling, Next.js, React Three Fiber, drei, framer-motion, interactive 3D, coding journey, JavaScript animation, web development',
    author: 'SilentCoder Stories',
    // image: 'url_to_thumbnail_image_representing_project',
    // url: 'https://www.youtube.com/channel/UCxMB2O-zPR94AjN8tGG7FKw'
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
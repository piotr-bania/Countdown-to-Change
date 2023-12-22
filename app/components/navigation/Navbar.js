
import './navbar.scss'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='logo'>
            <Image
                className='img'
                src='./svg/logo.svg'
                width={200}
                height={200}
                alt='Chronos Chronicles Logo'
            />
            <p>Chronos<br /> Chronicles</p>
        </div>
    )
}

export default Navbar
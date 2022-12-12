import Link from "next/link";

const Sidenavbar = ({ toggle }) => {
    return (
        <div className="" style={toggle ? { display: 'block' } : { display: 'none' }}>
            <div className="links">
                <Link href='/profile'>Profile</Link>
                <Link href='/contribute'>Contribute</Link>
                <Link href='/login'>Login / SignUp</Link>
                <p>Theme</p>
            </div>
        </div>
    );
}

export default Sidenavbar;
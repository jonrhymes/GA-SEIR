import Link from 'next/link';

const Nav = () => {
    return (
        <nav
            style={{ height: "60px", display: "flex", background: "yellow", justifyContent: "space-evenly", padding: "20px"}}
        >
            <Link href={'/index'}><a style={{ fontSize: "20px", color: "black"}}>Home</a></Link>
            <Link href={'/details'}><a style={{ fontSize: "20px", color: "black"}}>Skill Details</a></Link>
            <Link href={'/add'}><a style={{ fontSize: "20px", color: "black"}}>Add a Skill<a></a></a></Link>
        </nav>

    )
};

export default Nav;
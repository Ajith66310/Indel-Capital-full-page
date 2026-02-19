import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImg }) {
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${breadcrumbImg})` }}>
                <div className="pattern-layer">
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div  className="content-box centred">
                        <h1 style={{color:"#17479d"}} >{breadcrumbTitle}</h1>
                        <ul  className="bread-crumb clearfix">
                            <li style={{color:"#17479d"}} ><Link  style={{color:"#17479d"}} href="/">Home</Link></li>
                            <li style={{color:"#17479d"}}>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImg }) {
    return (
        <>
            <style jsx>{`
                .page-title {
                    position: relative;
                    padding: 100px 0; 
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .auto-container {
                    position: relative;
                    z-index: 2;
                }
                .pattern-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }
            `}</style>

            <section 
                className="page-title centred" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${breadcrumbImg})` 
                }}
            >
                <div className="pattern-layer">
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="content-box centred">
                        <h1  >{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li  ><Link  href="/">Home</Link></li>
                            <li >{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
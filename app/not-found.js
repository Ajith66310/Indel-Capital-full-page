'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import LiquidButton from '@/components/LiquidButton.js'

export default function Error404() {

    return (
        <>
            <style jsx>{`
                /* Container to center and size the liquid button */
                .btn-wrapper {
                    width: 220px;
                    height: 60px;
                    margin: 30px auto 0; /* Center horizontally */
                }

                .inner-box h2 {
                    margin-bottom: 20px;
                    font-size: 32px;
                    font-weight: 700;
                }

                .error-image {
                    margin-bottom: 40px;
                }
            `}</style>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error" breadcrumbImg='assets/images/background/page-title.jpg' >
                <section className="error-section centred pt_120 pb_120">
                    <div className="auto-container">
                        <div className="inner-box">
                            <figure className="error-image">
                                <img src="assets/images/icons/error-1.png" alt="404 Error" />
                            </figure>
                            <h2>Sorry, Something Went Wrong.</h2>
                            
                            {/* Integrated Liquid Button */}
                            <div className="btn-wrapper">
                                <Link href="/" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
                                    <LiquidButton text="Back to Homepage" bgcolor="#17479e" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
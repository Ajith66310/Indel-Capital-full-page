'use client'
import Link from "next/link"
import { insightsData } from '@/public/assets/assest.js'
import LiquidButton from '@/components/LiquidButton.js'

export default function Insights() {
    const data = insightsData;

    return (
        <>
            <style jsx>{`
                .btn-wrapper {
                    width: 160px;
                    height: 45px;
                    position: relative;
                    margin-top: 15px;
                }
                
                .liquid-link {
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                }
            `}</style>

            <section className="news-section pb_20">
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                        <h6>{data.subTitle}</h6>
                        <h2>{data.mainTitle}</h2>
                    </div>
                    <div className="row clearfix">
                        {data.posts.map((post) => (
                            <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div 
                                    className="news-block-one wow fadeInUp animated" 
                                    data-wow-delay={post.delay} 
                                    data-wow-duration="1500ms"
                                >
                                    <div 
                                        className="inner-box" 
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    >
                                        <div className="content-box">
                                            <span className="post-date">
                                                <i className="icon-27"></i>{post.date}
                                            </span>
                                            <h3>
                                                <Link href={post.link}>{post.title}</Link>
                                            </h3>
                                            
                                            <div className="btn-box">
                                                <div className="btn-wrapper">
                                                    <Link href={post.link} className="liquid-link">
                                                        <LiquidButton 
                                                            text="Read More" 
                                                            bgcolor="#eb2525" 
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
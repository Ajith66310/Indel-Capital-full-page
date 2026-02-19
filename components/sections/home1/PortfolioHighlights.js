'use client'
import Link from "next/link"
import { portfolioHighlightsData } from '@/public/assets/assest.js'

export default function PortfolioHighlights() {
    const data = portfolioHighlightsData;

    return (
        <>
            <style jsx>{`
                .portfolio-section {
                    padding-bottom: 60px ;
                    background-color: #fff;
                }

                .highlight-card {
                    padding: 35px;
                    border-radius: 16px;
                    background: #ffffff;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    position: relative;
                    border: 1px solid transparent;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
                }

                .highlight-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
                    border-color: #f0f0f0;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 25px;
                }

                .icon-box {
                    font-size: 28px;
                    color: #eb2525;
                    background: #fff5f5;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    transition: 0.3s;
                }

                .highlight-card:hover .icon-box {
                    background: #eb2525;
                    color: #fff;
                }

                .highlight-card h4 {
                    font-size: 19px;
                    font-weight: 700;
                    color: #17479d;
                    margin: 0;
                    letter-spacing: -0.5px;
                }

                .item-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 30px 0;
                    flex-grow: 1;
                }

                .item-list li {
                    font-size: 14.5px;
                    color: #666;
                    padding: 6px 0;
                    border-bottom: 1px solid #f9f9f9;
                }

                .item-list li:last-child {
                    border-bottom: none;
                }

                .learn-more-link {
                    font-size: 14px;
                    font-weight: 700;
                    color: #eb2525;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: gap 0.3s ease;
                }

                .learn-more-link:hover {
                    gap: 12px;
                    text-decoration: underline;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .section-header h2 {
                    font-size: 38px;
                    font-weight: 800;
                    color: #17479d;
                    margin-top: 10px;
                }
            `}</style>

            <section className="portfolio-section">
                <div className="auto-container">
                    <div className="section-header">
                        <span style={{ color: '#eb2525', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>
                            {data.subTitle}
                        </span>
                        <h2>{data.title}</h2>
                    </div>

                    <div className="row">
                        {data.services.map((service, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb_30">
                                <div className="highlight-card">
                                    <div className="card-header">
                                        <div className="icon-box">
                                            <i className={service.icon}></i>
                                        </div>
                                        <h4>{service.title}</h4>
                                    </div>

                                    <ul className="item-list">
                                        {service.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                    <Link href={service.link} className="learn-more-link">
                                        Explore Details 
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
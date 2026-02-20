"use client";
import { featuredStrategiesData } from '@/public/assets/assest.js';

export default function FeaturedStrategies() {
    const data = featuredStrategiesData;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <section className="indel-bento-section">
                <div className="container-compact">
                    <div className="header-wrapper">
                        <span className="badge-modern">{data.subTitle}</span>
                        <h2 className="title-bold">{data.mainTitle}</h2>
                        <p className="description-text">{data.description}</p>
                    </div>

                    <div className="bento-layout">
                        {/* Gold Backed Card */}
                        <div className="bento-card card-red card-wide">
                            <div className="card-inner">
                                <div className="label-group">
                                    <span className="indicator">ASSET PROTECTION</span>
                                </div>
                                <div className="content-mid">
                                    <h3 className="card-big-stat">94%</h3>
                                </div>
                                <div className="card-footer">
                                    <h4 className="white-text">Gold-Backed Security Infrastructure</h4>
                                    <p className="white-text-dim">Our capital preservation strategy anchors investor assets in high-purity physical gold reserves, ensuring maximum principal protection.</p>
                                </div>
                            </div>
                        </div>

                        {/* AUM Target Card */}
                        <div className="bento-card card-blue">
                            <div className="card-inner">
                                <span className="pill-outline">AUM TARGET</span>
                                <div className="center-content">
                                    <span className="scaling-label">Projected AUM</span>
                                    <div className="scaling-value">₹4,000<span>Cr</span></div>
                                    <p className="mini-desc">Aggressive growth for FY 2026.</p>
                                </div>
                                <div className="growth-viz">
                                    <div className="viz-bar" style={{height: '30%'}}></div>
                                    <div className="viz-bar" style={{height: '50%'}}></div>
                                    <div className="viz-bar" style={{height: '75%'}}></div>
                                    <div className="viz-bar active" style={{height: '100%'}}></div>
                                </div>
                            </div>
                        </div>

                        {/* Yield Card */}
                        <div className="bento-card card-white">
                            <div className="card-inner">
                                <div className="header-small">
                                    <div className="icon-box blue">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a4.5 4.5 0 000 9h5a4.5 4.5 0 010 9H7"/></svg>
                                    </div>
                                    <h5>Max Yield Optimization</h5>
                                </div>
                                <div className="yield-content">
                                    <span className="yield-value">12.25%</span>
                                    <span className="yield-sub">Effective Annualized Yield</span>
                                    <p className="reach-text">Optimized returns through diversified NCD instruments and smart liquidity.</p>
                                </div>
                            </div>
                        </div>

                        {/* Tech Card */}
                        <div className="bento-card card-white">
                            <div className="card-inner">
                                <div className="header-small">
                                    <div className="icon-box red">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                    </div>
                                    <h5>Phygital Reach & Tech</h5>
                                </div>
                                <p className="reach-text">Integrating AI-driven gold valuation with instant doorstep service for borrowers.</p>
                                <div className="tag-group">
                                    <span className="tag blue">Smart-KYC</span>
                                    <span className="tag red">AI-Appraisal</span>
                                </div>
                            </div>
                        </div>

                        {/* Expansion Card */}
                        <div className="bento-card card-blue">
                            <div className="card-inner">
                                <span className="pill-outline">EXPANSION</span>
                                <div className="footer-content">
                                    <h4 className="white-text">370+ Branches</h4>
                                    <p className="white-text-dim">Expanding our pan-India footprint with tech-enabled physical hubs.</p>
                                </div>
                                <div className="network-map">
                                    <div className="map-dot" style={{top:'20%', left:'30%'}}></div>
                                    <div className="map-dot" style={{top:'50%', left:'60%'}}></div>
                                    <div className="map-dot" style={{top:'80%', left:'40%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = `
    .indel-bento-section {
        padding: 80px 0;
        background-color: #ffffff;
    }

    .container-compact {
        max-width: 1200px; 
        margin: 0 auto;
        padding: 0 24px;
    }

    .header-wrapper {
        margin-bottom: 50px;
        text-align: left;
    }

    .badge-modern {
        color: #ee3824;
        font-weight: 800;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 2px;
        display: block;
        margin-bottom: 12px;
    }

    .title-bold {
        font-size: 44px;
        font-weight: 800;
        color: #17479e;
        letter-spacing: -1.5px;
        margin-bottom: 20px;
        line-height: 1.1;
    }

    .description-text {
        color: #475569;
        font-size: 18px;
        max-width: 700px;
        line-height: 1.6;
    }

    .bento-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 300px; 
        gap: 20px;
    }

    .bento-card {
        border-radius: 32px;
        position: relative;
        overflow: hidden;
        border: 1px solid #f1f5f9;
        transition: all 0.4s ease;
    }

    .bento-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    }

    .card-inner {
        height: 100%;
        padding: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        z-index: 2;
    }

    .card-wide { grid-column: span 2; }

    .card-red { background: linear-gradient(135deg, #ee3824 0%, #b91c1c 100%); color: white; border: none; }
    .card-blue { background: linear-gradient(135deg, #17479e 0%, #0f2e6b 100%); color: white; border: none; }
    .card-white { background: #f8fafc; color: #0f172a; }

    .white-text { color: #ffffff !important; font-size: 22px; font-weight: 800; margin-bottom: 8px; }
    .white-text-dim { color: rgba(255,255,255,0.85) !important; font-size: 14px; line-height: 1.5; }

    .card-big-stat { font-size: 110px; font-weight: 900; line-height: 0.8; letter-spacing: -5px; margin-top: 10px; }

    .scaling-label { font-size: 14px; opacity: 0.8; font-weight: 600; }
    .scaling-value { font-size: 60px; font-weight: 900; margin-top: 5px; line-height: 1; }
    .scaling-value span { font-size: 20px; opacity: 0.6; margin-left: 4px; }
    .mini-desc { font-size: 13px; opacity: 0.7; margin-top: 8px; color: white; }

    .pill-outline { border: 1px solid rgba(255,255,255,0.3); padding: 6px 16px; border-radius: 100px; font-size: 11px; font-weight: 700; align-self: flex-start; }

    .header-small { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .header-small h5 { font-weight: 800; font-size: 18px; color: #1e293b; margin: 0; }
    
    .icon-box { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
    .icon-box.blue { background: rgba(23, 71, 158, 0.1); color: #17479e; }
    .icon-box.red { background: rgba(238, 56, 36, 0.1); color: #ee3824; }

    .yield-value { font-size: 50px; font-weight: 900; color: #17479e; display: block; line-height: 1; }
    .yield-sub { font-size: 13px; color: #ee3824; font-weight: 800; margin: 8px 0; display: block; }
    .reach-text { font-size: 14px; color: #64748b; line-height: 1.5; }

    .tag-group { display: flex; gap: 8px; margin-top: 15px; }
    .tag { padding: 5px 12px; border-radius: 6px; font-size: 11px; font-weight: 800; }
    .tag.blue { background: #e0e7ff; color: #17479e; }
    .tag.red { background: #fee2e2; color: #ee3824; }

    .growth-viz { display: flex; align-items: flex-end; gap: 6px; height: 50px; margin-top: 20px; }
    .viz-bar { flex: 1; background: rgba(255,255,255,0.2); border-radius: 4px; }
    .viz-bar.active { background: #ee3824; }

    .network-map { position: absolute; right: -10px; bottom: -10px; width: 120px; height: 120px; opacity: 0.5; }
    .map-dot { position: absolute; width: 5px; height: 5px; background: #ee3824; border-radius: 50%; box-shadow: 0 0 8px #ee3824; }

    @media (max-width: 1024px) {
        .title-bold { font-size: 36px; }
        .bento-layout { grid-auto-rows: 280px; }
    }

    @media (max-width: 768px) {
        .bento-layout { grid-template-columns: 1fr; grid-auto-rows: auto; }
        .card-wide { grid-column: span 1; }
        .bento-card { min-height: 280px; }
        .card-big-stat { font-size: 90px; }
    }
`;
import { featuredStrategiesData } from '@/public/assets/assest.js';

export default function FeaturedStrategies() {
    const data = featuredStrategiesData;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <section className="indel-bento-section">
                <div className="container-wide">
                    <div className="header-wrapper">
                        <span className="badge-modern">{data.subTitle}</span>
                        <h2 className="title-bold">{data.mainTitle}</h2>
                        <p className="description-text">{data.description}</p>
                    </div>

                    <div className="bento-layout">
                        <div className="bento-card card-red card-wide">
                            <div className="card-inner">
                                <div className="label-group">
                                    <span className="dot pulse"></span>
                                    <span className="indicator">ASSET PROTECTION</span>
                                </div>
                                <div className="content-mid">
                                    <h3 className="card-big-stat">94%</h3>
                                    <p className="stat-sub-text">Total Portfolio Security Ratio</p>
                                </div>
                                <div className="card-footer">
                                    <h4 className="white-text">Gold-Backed Security Infrastructure</h4>
                                    <p className="white-text-dim">Our capital preservation strategy anchors investor assets in high-purity physical gold reserves, ensuring maximum principal protection against market volatility.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card card-blue">
                            <div className="card-inner">
                                <span className="pill-outline">AUM TARGET</span>
                                <div className="center-content">
                                    <span className="scaling-label">Projected AUM</span>
                                    <div className="scaling-value">₹4,000<span>Cr</span></div>
                                    <p className="mini-desc">Aggressive growth trajectory for FY 2026.</p>
                                </div>
                                <div className="growth-viz">
                                    <div className="viz-bar" style={{height: '30%'}}></div>
                                    <div className="viz-bar" style={{height: '50%'}}></div>
                                    <div className="viz-bar" style={{height: '75%'}}></div>
                                    <div className="viz-bar active" style={{height: '100%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card card-white">
                            <div className="card-inner">
                                <div className="header-small">
                                    <div className="icon-box blue">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a4.5 4.5 0 000 9h5a4.5 4.5 0 010 9H7"/></svg>
                                    </div>
                                    <h5>Max Yield Optimization</h5>
                                </div>
                                <div className="yield-content">
                                    <span className="yield-value">12.25%</span>
                                    <span className="yield-sub">Effective Annualized Yield</span>
                                    <p className="reach-text">Optimized returns through diversified NCD instruments and smart liquidity management.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card card-white">
                            <div className="card-inner">
                                <div className="header-small">
                                    <div className="icon-box red">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                    </div>
                                    <h5>Phygital Reach & Tech</h5>
                                </div>
                                <p className="reach-text">Integrating AI-driven gold valuation with instant doorstep service for a seamless borrower experience.</p>
                                <div className="tag-group">
                                    <span className="tag blue">Smart-KYC</span>
                                    <span className="tag red">AI-Appraisal</span>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card card-blue">
                            <div className="card-inner">
                                <span className="pill-outline">EXPANSION</span>
                                <div className="footer-content">
                                    <h4 className="white-text">370+ Branches</h4>
                                    <p className="white-text-dim">Expanding our pan-India footprint with tech-enabled physical hubs and AI-driven micro-fulfillment centers.</p>
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
        padding: 80px 0 150px 0;
        background-color: #ffffff;
    }

    .container-wide {
        max-width: 1440px; 
        margin: 0 auto;
        padding: 0 60px;
    }

    .header-wrapper {
        margin-bottom: 70px;
    }

    .badge-modern {
        color: #ee3824;
        font-weight: 800;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 3px;
        display: block;
        margin-bottom: 15px;
    }

    .title-bold {
        font-size: 56px;
        font-weight: 800;
        color: #17479e;
        letter-spacing: -2.5px;
        margin-bottom: 25px;
    }

    .description-text {
        color: #475569;
        font-size: 20px;
        max-width: 850px;
        line-height: 1.7;
    }

    .bento-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 340px; 
        gap: 30px;
    }

    .bento-card {
        border-radius: 40px;
        position: relative;
        overflow: hidden;
        border: 1px solid #f1f5f9;
        transition: transform 0.4s ease;
    }

    .bento-card:hover {
        transform: translateY(-10px);
    }

    .card-inner {
        height: 100%;
        padding: 45px;
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

    .white-text { color: #ffffff !important; font-size: 26px; font-weight: 800; margin-bottom: 12px; }
    .white-text-dim { color: rgba(255,255,255,0.85) !important; font-size: 16px; line-height: 1.5; }

    .card-big-stat { font-size: 150px; font-weight: 900; line-height: 0.8; letter-spacing: -8px; margin-top: 20px; }
    .stat-sub-text { font-size: 14px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.7; font-weight: 700; }

    .scaling-label { font-size: 16px; opacity: 0.8; font-weight: 600; }
    .scaling-value { font-size: 80px; font-weight: 900; margin-top: 10px; line-height: 1; }
    .scaling-value span { font-size: 28px; opacity: 0.6; margin-left: 5px; }
    .mini-desc { font-size: 14px; opacity: 0.7; margin-top: 10px; }

    .pill-outline { border: 1px solid rgba(255,255,255,0.3); padding: 8px 20px; border-radius: 100px; font-size: 12px; font-weight: 700; align-self: flex-start; }

    .header-small { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
    .header-small h5 { font-weight: 800; font-size: 20px; color: #1e293b; margin: 0; }
    
    .icon-box { width: 50px; height: 50px; border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .icon-box.blue { background: rgba(23, 71, 158, 0.1); color: #17479e; }
    .icon-box.red { background: rgba(238, 56, 36, 0.1); color: #ee3824; }

    .yield-value { font-size: 60px; font-weight: 900; color: #17479e; display: block; line-height: 1; }
    .yield-sub { font-size: 14px; color: #ee3824; font-weight: 800; margin: 10px 0; display: block; }
    .reach-text { font-size: 16px; color: #64748b; line-height: 1.6; }

    .tag-group { display: flex; gap: 10px; margin-top: 20px; }
    .tag { padding: 6px 16px; border-radius: 8px; font-size: 12px; font-weight: 800; }
    .tag.blue { background: #e0e7ff; color: #17479e; }
    .tag.red { background: #fee2e2; color: #ee3824; }

    .growth-viz { display: flex; align-items: flex-end; gap: 8px; height: 60px; margin-top: 30px; }
    .viz-bar { flex: 1; background: rgba(255,255,255,0.2); border-radius: 6px; }
    .viz-bar.active { background: #ee3824; }

    .network-map { position: absolute; right: -20px; bottom: -20px; width: 150px; height: 150px; background: radial-gradient(circle, rgba(238,56,36,0.1) 0%, transparent 70%); z-index: 1; }
    .map-dot { position: absolute; width: 6px; height: 6px; background: #ee3824; border-radius: 50%; box-shadow: 0 0 10px #ee3824; }

    .pulse { animation: pulse-red 2s infinite; }
    @keyframes pulse-red {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
    }

    @media (max-width: 1200px) {
        .container-wide { padding: 0 30px; }
        .title-bold { font-size: 42px; }
        .card-big-stat { font-size: 110px; }
    }

    @media (max-width: 768px) {
        .bento-layout { grid-template-columns: 1fr; grid-auto-rows: auto; }
        .card-wide { grid-column: span 1; }
        .bento-card { min-height: 320px; }
    }
`;
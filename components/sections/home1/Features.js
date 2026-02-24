'use client'
import Link from "next/link"
// Import Lucide icons
import { ShieldCheck, Headphones, TrendingUp, Timer } from "lucide-react"

export default function Features() {
    const featureData = [
        {
            icon: <ShieldCheck size={35} />,
            title: "Secure Investment Solutions",
            desc: "Your capital is protected with robust risk-managed strategies and disciplined financial oversight.",
            delay: "0ms"
        },
        {
            icon: <Headphones size={35} />,
            title: "Expert Advisory Support",
            desc: "Our financial specialists guide you with data-driven insights for smarter wealth decisions.",
            delay: "200ms"
        },
   {
            icon: <TrendingUp size={35} strokeWidth={1.5} />,
            title: "Competitive Returns Strategy",
            desc: "Optimised investment models designed to deliver strong, stable, and long-term performance.",
            delay: "400ms"
        },
        {
            icon: <Timer size={35} strokeWidth={1.5} />,
            title: "Fast & Hassle-Free Execution",
            desc: "Streamlined digital processes ensure quick onboarding and seamless strategy deployment.",
            delay: "600ms"
        }
    ];

    return (
        <>
            <style jsx>{`
                .feature-section-custom {
                    position: relative;
                    padding: 0;
                    margin-top: -60px;
                    z-index: 10;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0; 
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .feature-item {
                    padding: 50px 35px;
                    border-right: 1px solid #f0f0f0;
                    position: relative;
                    background: #fff;
                }

                .feature-item:last-child {
                    border-right: none;
                }

                .icon-box-new {
                    width: 70px;
                    height: 70px;
                    background: #fdf2f2;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 30px;
                    transition: all 0.4s ease;
                    color: #eb2525; /* Icon color */
                }

                /* Target the SVG specifically for Lucide */
                .icon-box-new :global(svg) {
                    transition: color 0.4s ease;
                }

                .feature-item:hover .icon-box-new {
                    background: #eb2525;
                    color: #fff; /* Changes Lucide icon color on hover */
                }

                .feature-item h4 {
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin-bottom: 15px;
                    color: #1a1a1a;
                }

                .feature-item p {
                    font-size: 15px;
                    color: #666;
                    margin-bottom: 0;
                }

                @media (max-width: 1200px) {
                    .features-grid { grid-template-columns: repeat(2, 1fr); }
                    .feature-item { border-bottom: 1px solid #f0f0f0; }
                }

                @media (max-width: 768px) {
                    .features-grid { grid-template-columns: 1fr; }
                    .feature-section-custom { margin-top: 20px; padding: 0 15px; }
                }
            `}</style>

            <section className="feature-section-custom">
                <div className="auto-container">
                    <div className="features-grid">
                        {featureData.map((item, index) => (
                            <div 
                                key={index} 
                                className="feature-item wow fadeInUp" 
                                data-wow-delay={item.delay}
                            >
                                <div className="icon-box-new">
                                    {item.icon}
                                </div>
                                <h4>
                                    <Link href="/service" style={{ color: 'inherit' }}>
                                        {item.title}
                                    </Link>
                                </h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
'use client'
import React from 'react';
import LiquidButton from '@/components/LiquidButton.js';

export default function Subscribe() {
    return (
        <>
            <style jsx>{`
                .form-group {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .btn-wrapper {
                    width: 180px;
                    height: 60px;
                    margin-left: 10px; 
                }

                .submit-trigger {
                    padding: 0;
                    border: none;
                    background: none;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    display: block;
                }

                @media (max-width: 767px) {
                    .form-group {
                        flex-direction: column;
                    }
                    .btn-wrapper {
                        width: 100%;
                        margin-left: 0;
                        margin-top: 15px;
                    }
                }
            `}</style>

            <section className="subscribe-section">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text-box">
                                <h2>Subscribe us to Receive Latest Updates</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="form-inner ml_40">
                                <form method="post" action="/contact">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Your email" required />
                                        
                                        <div className="btn-wrapper">
                                            <button type="submit" className="submit-trigger">
                                                <LiquidButton text="Join" bgcolor="#17479e" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
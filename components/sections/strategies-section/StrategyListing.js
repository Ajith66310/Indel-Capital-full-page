"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import LiquidButton from '@/components/LiquidButton.js';

export default function StrategyListing() {
    const [selectedFilters, setSelectedFilters] = useState({
        asset: [],
        geo: [],
        risk: [],
        horizon: []
    });

    const strategies = [
        { id: 1, title: "Global Equity Alpha", asset: "Equities", geo: "Global", risk: "High Risk", horizon: "5+ Years" },
        { id: 2, title: "Fixed Income Core", asset: "Fixed Income", geo: "Europe", risk: "Low Risk", horizon: "1-3 Years" },
        { id: 3, title: "Emerging Markets Growth", asset: "Equities", geo: "APAC", risk: "High Risk", horizon: "5+ Years" },
        { id: 4, title: "Real Estate Income", asset: "Real Estate", geo: "North America", risk: "Medium Risk", horizon: "5+ Years" },
        { id: 5, title: "Tech Innovation Fund", asset: "Private Equity", geo: "Global", risk: "High Risk", horizon: "5+ Years" },
        { id: 6, title: "Stable Bond Yield", asset: "Fixed Income", geo: "North America", risk: "Low Risk", horizon: "3-5 Years" },
    ];

    const handleFilterChange = (category, value) => {
        setSelectedFilters(prev => {
            const currentCategory = prev[category];
            const newCategory = currentCategory.includes(value)
                ? currentCategory.filter(i => i !== value)
                : [...currentCategory, value];
            return { ...prev, [category]: newCategory };
        });
    };

    const filteredStrategies = useMemo(() => {
        return strategies.filter(strategy => {
            const assetMatch = selectedFilters.asset.length === 0 || selectedFilters.asset.includes(strategy.asset);
            const geoMatch = selectedFilters.geo.length === 0 || selectedFilters.geo.includes(strategy.geo);
            const riskMatch = selectedFilters.risk.length === 0 || selectedFilters.risk.includes(strategy.risk);
            const horizonMatch = selectedFilters.horizon.length === 0 || selectedFilters.horizon.includes(strategy.horizon);
            return assetMatch && geoMatch && riskMatch && horizonMatch;
        });
    }, [selectedFilters]);

    return (
        <>
            <style jsx>{`
                .listing-section { padding: 80px 0; background: #ffffff; min-height: 800px; }
                .listing-container { max-width: 1200px; margin: 0 auto; display: flex; gap: 40px; padding: 0 15px; }
                .filter-sidebar { flex: 0 0 280px; background: #fcfdfe; padding: 30px; border-radius: 15px; border: 1px solid #f1f5f9; height: fit-content; }
                .filter-group { margin-bottom: 25px; }
                .filter-group h5 { font-size: 16px; font-weight: 700; color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #eb2525; display: inline-block; }
                .filter-options label { display: flex; align-items: center; font-size: 14px; color: #6b7280; margin-bottom: 10px; cursor: pointer; transition: color 0.2s; }
                .filter-options label:hover { color: #eb2525; }
                .filter-options input { margin-right: 12px; width: 16px; height: 16px; accent-color: #eb2525; }
                .strategy-grid-col { flex: 1; }
                .grid-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 15px; border-bottom: 1px solid #f1f5f9; }
                .strategy-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
                .strategy-card { background: #ffffff; border: 1px solid #f1f5f9; border-radius: 15px; padding: 30px; transition: all 0.3s ease; position: relative; }
                .strategy-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.05); border-color: #eb2525; }
                .card-tag { font-size: 11px; background: #fff1f1; color: #eb2525; padding: 4px 12px; border-radius: 50px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; display: inline-block; }
                .strategy-card h4 { font-size: 22px; color: #1f2937; margin-bottom: 15px; font-weight: 700; }
                .meta-info { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; }
                .meta-item { font-size: 13px; color: #6b7280; }
                .meta-item strong { color: #1f2937; display: block; margin-bottom: 2px; }
                .no-results { text-align: center; padding: 100px 0; color: #9ca3af; grid-column: span 2; }

                /* Liquid Button Integration */
                .btn-wrapper {
                    width: 160px;
                    height: 48px;
                    position: relative;
                }

                @media (max-width: 991px) { 
                    .listing-container { flex-direction: column; } 
                    .filter-sidebar { flex: 1; } 
                    .strategy-grid { grid-template-columns: 1fr; } 
                }
            `}</style>

            <section className="listing-section">
                <div className="listing-container">
                    <aside className="filter-sidebar">
                        <div className="filter-group">
                            <h5>Asset Class</h5>
                            <div className="filter-options">
                                {["Equities", "Fixed Income", "Real Estate", "Private Equity"].map(opt => (
                                    <label key={opt}>
                                        <input type="checkbox" checked={selectedFilters.asset.includes(opt)} onChange={() => handleFilterChange("asset", opt)} /> {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <h5>Geography</h5>
                            <div className="filter-options">
                                {["Global", "North America", "Europe", "APAC"].map(opt => (
                                    <label key={opt}>
                                        <input type="checkbox" checked={selectedFilters.geo.includes(opt)} onChange={() => handleFilterChange("geo", opt)} /> {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <h5>Risk Profile</h5>
                            <div className="filter-options">
                                {["Low Risk", "Medium Risk", "High Risk"].map(opt => (
                                    <label key={opt}>
                                        <input type="checkbox" checked={selectedFilters.risk.includes(opt)} onChange={() => handleFilterChange("risk", opt)} /> {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <h5>Horizon</h5>
                            <div className="filter-options">
                                {["1-3 Years", "3-5 Years", "5+ Years"].map(opt => (
                                    <label key={opt}>
                                        <input type="checkbox" checked={selectedFilters.horizon.includes(opt)} onChange={() => handleFilterChange("horizon", opt)} /> {opt}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <div className="strategy-grid-col">
                        <div className="grid-header">
                            <h3>Showing {filteredStrategies.length} Strategies</h3>
                            <button 
                                onClick={() => setSelectedFilters({asset:[], geo:[], risk:[], horizon:[]})}
                                style={{background: 'none', border: 'none', color: '#eb2525', cursor: 'pointer', fontWeight: '600'}}
                            >
                                Reset Filters
                            </button>
                        </div>

                        <div className="strategy-grid">
                            {filteredStrategies.length > 0 ? (
                                filteredStrategies.map((item) => (
                                    <div key={item.id} className="strategy-card">
                                        <span className="card-tag">{item.asset}</span>
                                        <h4>{item.title}</h4>
                                        <div className="meta-info">
                                            <div className="meta-item"><strong>Geography</strong> {item.geo}</div>
                                            <div className="meta-item"><strong>Risk Profile</strong> {item.risk}</div>
                                            <div className="meta-item"><strong>Time Horizon</strong> {item.horizon}</div>
                                        </div>
                                        
                                        <div className="btn-wrapper">
                                            <Link href={`/strategies/${item.id}`} style={{ textDecoration: 'none', display: 'block', width: '100%', height: '100%' }}>
                                                <LiquidButton text="View Details" bgcolor="#eb2525" />
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-results">
                                    <p>No strategies match your current filters.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
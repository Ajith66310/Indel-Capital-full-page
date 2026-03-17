'use client'
import Layout from "@/components/layout/Layout";

export default function TermsAndConditions() {

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing, browsing, or using any website, platform, application, or financial service operated by Indel Capital Ventures and Investments Private Limited ("Indel Capital", "the Company", "we", "us", or "our"), you unconditionally agree to be bound by these Terms and Conditions ("Terms"), our Privacy Policy, and all applicable Indian laws and regulations. If you do not agree to any part of these Terms, you must immediately cease using our services. These Terms constitute a legally binding agreement between you ("User", "you", or "your") and Indel Capital Ventures and Investments Private Limited (CIN: U67110MH2021PTC358085), incorporated under the Companies Act, 2013 and headquartered in Mumbai, Maharashtra, India.`,
    },
    {
      id: "about",
      title: "About Indel Capital",
      content: `Indel Capital Ventures and Investments Private Limited is the investment arm of Indel Corporation, incorporated on 30th March 2021. The Company is headquartered at No. 301, Floor No. 3, Sai Arcade, N.S Road, Mulund West, Mumbai – 400080, with its Corporate Office at Indel House, Changampuzha Nagar, South Kalamassery, Ernakulam – 682033, Kerala. The Company is led by Mr. Mohanan Gopalakrishnan (Chairman & Managing Director), Mr. Umesh Mohanan, and Mr. Anish Mohanan. The name "INDEL", derived from Indian Elements, reflects core values rooted in India's heritage  representing integrity, transparency, and responsible growth. Indel Capital focuses on the prudent deployment and professional management of funds, operating with a strong emphasis on financial discipline, transparency, and long-term value creation.`,
    },
    {
      id: "services",
      title: "Scope of Services",
      content: `Indel Capital provides the following core financial services and activities, subject to applicable regulatory approvals and requirements:`,
      list: [
        "Investments in marketable fixed coupon securities diversified investment exposure aligned with market dynamics, liquidity considerations, and prudent capital management",
        "Securitisation of NBFC assets and down-selling of the same in accordance with applicable RBI guidelines",
        "Corporate and retail lending to associate and group entities with structured, transparent evaluation processes",
        "Equity investments across carefully evaluated opportunities guided by in-depth research and governance standards",
        "Strategic financial solutions and investment management for group entities within the Indel Corporation",
        "Any additional financial services as may be notified from time to time, subject to regulatory authorisation",
      ],
      note: "The availability and terms of each service may vary and are subject to separate agreements, sanction letters, and applicable regulatory conditions. Indel Capital reserves the right to modify, suspend, or discontinue any service at any time without prior notice.",
    },
    {
      id: "eligibility",
      title: "User Eligibility",
      content: `To access and use our services, you represent and warrant that:`,
      list: [
        "You are at least 18 years of age and legally competent to enter into a binding contract under the Indian Contract Act, 1872",
        "You are a resident of India or a person authorised under applicable FEMA/RBI regulations to engage in financial transactions with Indian entities",
        "You are not a person barred or prohibited from receiving financial services by any order of a court, tribunal, regulatory authority, or applicable law",
        "All information you provide to us is accurate, complete, and current, and you will promptly update such information if it changes",
        "You are accessing our services for legitimate purposes and not for any unlawful, fraudulent, or deceptive activity",
        "You have obtained all necessary approvals, consents, and authorisations required for your intended use of our services",
      ],
    },
    {
      id: "investment-disclaimer",
      title: "Investment Risk Disclaimer",
      content: null,
      highlight: true,
      highlightTitle: "Important Please Read Carefully",
      highlightText: "All investments, lending, and financial activities involve risk. Past performance of any investment or financial product offered or managed by Indel Capital is not indicative of future results. The value of investments may go up or down. You may receive back less than the amount originally invested.",
      subsections: [
        {
          title: "General Investment Risks",
          items: [
            "Market risk: fluctuations in market prices may adversely affect the value of securities and investments",
            "Credit risk: the risk that borrowers or counterparties may default on their financial obligations",
            "Liquidity risk: certain investments may be difficult to exit at desired prices or timeframes",
            "Regulatory risk: changes in laws, RBI/SEBI regulations, or tax rules may affect investment returns",
            "Concentration risk: exposure to specific sectors, instruments, or group entities within the Indel Corporation",
          ],
        },
        {
          title: "Lending Activities",
          items: [
            "All lending decisions are subject to Indel Capital's internal credit assessment and risk management framework",
            "Loan approvals are at the sole discretion of Indel Capital and are not guaranteed",
            "Interest rates, fees, and repayment terms will be specified in individual loan agreements",
            "Collateral and security requirements will be determined on a case-by-case basis",
          ],
        },
      ],
    },
    {
      id: "prohibited",
      title: "Prohibited Conduct",
      content: `When using our website, platforms, or services, you agree not to:`,
      list: [
        "Provide false, misleading, or fraudulent information in any application, form, or communication with Indel Capital",
        "Attempt to gain unauthorised access to our systems, databases, networks, or accounts",
        "Use our platform or services for money laundering, terrorist financing, or any activity in violation of PMLA 2002 or FEMA",
        "Engage in any conduct that disrupts, damages, or impairs the functionality or security of our website or services",
        "Copy, reproduce, distribute, or create derivative works from any content on our website without prior written consent",
        "Use automated bots, scrapers, or data harvesting tools on our website or systems",
        "Circumvent or interfere with any KYC, AML, or fraud prevention measures implemented by Indel Capital",
        "Impersonate Indel Capital, its directors, employees, or any authorised representative",
      ],
    },
    {
      id: "kyc-compliance",
      title: "KYC / AML Compliance",
      content: `In compliance with the Prevention of Money Laundering Act, 2002 (PMLA), RBI Master Directions on KYC, and other applicable regulations, all users and clients of Indel Capital are required to complete full Know Your Customer (KYC) verification before accessing financial services. This includes:`,
      list: [
        "Submission of valid government-issued identity proof (Aadhaar, PAN, Passport, or Voter ID)",
        "Submission of valid address proof documents",
        "Completion of in-person or video-based KYC verification as applicable",
        "Periodic re-KYC as required by applicable RBI guidelines",
        "Disclosure of source of funds and beneficial ownership information where required",
        "Compliance with all Enhanced Due Diligence requirements for high-value or high-risk transactions",
      ],
      note: "Indel Capital reserves the right to suspend or terminate access to services if KYC verification cannot be completed or if suspicious activity is detected. We are legally obligated to report suspicious transactions to the Financial Intelligence Unit – India (FIU-IND).",
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `All content published on our website and platforms, including but not limited to the Indel Capital name, logo, brand identity, text, images, financial data, reports, and software, is the exclusive property of Indel Capital Ventures and Investments Private Limited or its licensors, and is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian intellectual property laws. The name "INDEL" and associated marks are proprietary to Indel Corporation and its subsidiaries. Unauthorised use, reproduction, or distribution of any intellectual property owned by Indel Capital is strictly prohibited and may result in civil and criminal liability. You are granted a limited, non-exclusive, non-transferable licence to access and use our website solely for your personal, non-commercial use in connection with our services.`,
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      content: `Any financial proposals, term sheets, investment documents, lending agreements, or other communications shared by Indel Capital with prospective or existing clients are strictly confidential. By accepting such documents or information, you agree to:`,
      list: [
        "Not disclose, share, or disseminate such information to any third party without our prior written consent",
        "Use confidential information solely for the purpose for which it was shared",
        "Return or destroy confidential materials upon request or upon termination of the business relationship",
        "Notify Indel Capital immediately if you become aware of any unauthorised disclosure of confidential information",
      ],
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      content: `To the fullest extent permitted under applicable Indian law, Indel Capital, its directors, officers, employees, and agents shall not be liable for:`,
      list: [
        "Any loss of profits, revenue, investment returns, or anticipated savings arising from your use of our services",
        "Any indirect, consequential, incidental, special, or punitive damages, howsoever caused",
        "Any interruption, suspension, or unavailability of our website or digital platforms",
        "Any errors, omissions, or inaccuracies in information provided on our website or in our communications",
        "Any third-party actions, defaults, or insolvencies that may affect your investments or loans",
        "Any loss arising from force majeure events including natural disasters, regulatory changes, or market disruptions",
      ],
      note: "Nothing in these Terms limits liability for fraud, wilful misconduct, or death/personal injury caused by our negligence, or any liability that cannot be lawfully excluded under applicable Indian law.",
    },
    {
      id: "indemnification",
      title: "Indemnification",
      content: `You agree to indemnify, defend, and hold harmless Indel Capital Ventures and Investments Private Limited, along with its parent company Indel Corporation, directors, officers, employees, advisors, and agents, from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with: (a) your breach of these Terms; (b) your violation of any applicable law or regulation; (c) any fraudulent, negligent, or wilful act or omission by you; or (d) your infringement of any third-party rights including intellectual property, privacy, or contractual rights.`,
    },
    {
      id: "third-party",
      title: "Third-Party Links & Services",
      content: `Our website may contain links to websites and services operated by other entities within the Indel Corporation group, including Indel Money (gold-backed NBFC lending), Indel Honda, Indel Yamaha, Kairali Toyota, and other subsidiaries, as well as independent third-party platforms. These links are provided for your convenience only. Indel Capital does not endorse, control, or accept responsibility for the content, services, privacy practices, or terms of any third-party website. Your use of any third-party service is governed solely by the terms and policies of that third party.`,
    },
    {
      id: "amendments",
      title: "Amendments to Terms",
      content: `Indel Capital reserves the right to revise, update, or amend these Terms at any time, with or without prior notice. Updated Terms will be posted on this page with a revised Effective Date. If we make material changes, we will notify registered users by email or through a notice on our website. Your continued use of our services after any amendment constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically to stay informed of any changes.`,
    },
    {
      id: "termination",
      title: "Termination of Access",
      content: `Indel Capital reserves the right, at its sole discretion, to suspend, restrict, or permanently terminate your access to any of our services or platforms at any time, with or without notice, if we determine that: (a) you have breached any provision of these Terms; (b) you have provided false or misleading information; (c) your use poses a risk to the security, integrity, or reputation of Indel Capital; (d) we are required to do so by any applicable law, court order, or regulatory directive. Termination shall not affect any accrued rights or obligations arising prior to the date of termination, including any outstanding loan repayment obligations or investment commitments.`,
    },
    {
      id: "governing-law",
      title: "Governing Law & Dispute Resolution",
      content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute, controversy, or claim arising out of or relating to these Terms or your use of Indel Capital's services shall be subject to the exclusive jurisdiction of the courts at Mumbai, Maharashtra, and/or Ernakulam, Kerala, as applicable. Before initiating formal legal proceedings, both parties agree to make good-faith efforts to resolve any dispute through mutual negotiation. If unresolved within 30 days, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Mumbai.`,
    },
    {
      id: "contact",
      title: "Contact Information",
      contact: true,
    },
  ];

  return (
    <>
      <style jsx global>{`

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --blue:         #17479e;
          --blue-dark:    #0f3278;
          --blue-deeper:  #0a2155;
          --blue-mid:     #1d56bb;
          --blue-light:   #e8eef8;
          --blue-pale:    #f2f5fb;
          --blue-dim:     rgba(23,71,158,0.10);

          --red:          #ee3824;
          --red-dark:     #c42d1c;
          --red-light:    #fff3f2;
          --red-border:   #fac8c3;

          --white:        #ffffff;
          --off-white:    #f8f9fc;
          --text:         #0f1c30;
          --text-body:    #2d3a4f;
          --muted:        #6b7a92;
          --border:       #dce4f0;
          --border-soft:  #e8edf6;

          --shadow-xs:    0 1px 6px rgba(23,71,158,0.07);
          --shadow-sm:    0 3px 16px rgba(23,71,158,0.09);
          --shadow:       0 6px 32px rgba(23,71,158,0.12);
          --shadow-lg:    0 16px 56px rgba(23,71,158,0.16);
          --radius:       12px;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: sans-serif;
          background: var(--off-white);
          color: var(--text);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <style jsx>{`

        .header {
          background: var(--blue-deeper);
          position: sticky;
          top: 0;
          z-index: 200;
          border-bottom: 3px solid var(--red);
        }
        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 13px;
          text-decoration: none;
        }
        .logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: var(--red);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          color: var(--white);
          flex-shrink: 0;
          box-shadow: 0 2px 12px rgba(238,56,36,0.45);
        }
        .logo-copy { display: flex; flex-direction: column; line-height: 1.15; }
        .logo-name {
          font-family:  sans-serif;
          font-size: 1.12rem;
          font-weight: 600;
          color: var(--white);
          letter-spacing: 0.05em;
        }
        .logo-tagline {
          font-size: 0.61rem;
          color: rgba(255,255,255,0.48);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .header-pill {
          border: 1px solid rgba(238,56,36,0.45);
          background: rgba(238,56,36,0.1);
          color: #ff9b90;
          font-size: 0.67rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          font-weight: 500;
        }

        .hero {
          background: linear-gradient(150deg, var(--blue-deeper) 0%, var(--blue) 58%, var(--blue-mid) 100%);
          padding: 76px 2rem 64px;
          position: relative;
          overflow: hidden;
        }
 
        .hero-glow {
          position: absolute;
          top: -100px; right: -80px;
          width: 550px; height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-red {
          position: absolute;
          bottom: -60px; left: 8%;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(238,56,36,0.14) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-divider {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
        }
        .hero-inner {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }
       
        .eyebrow-label {
          font-size: 0.67rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }
        .hero-heading {
          font-family:  sans-serif;
          font-size: clamp(2.6rem, 5.2vw, 4rem);
          font-weight: 600;
          color: var(--white);
          line-height: 1.08;
          margin-bottom: 20px;
          letter-spacing: -0.015em;
        }
        .hero-heading em {
          color: #ff9b90;
          font-style: italic;
        }
        .hero-body {
          font-size: 0.96rem;
          color: rgba(255,255,255,0.57);
          max-width: 580px;
          line-height: 1.76;
          margin-bottom: 36px;
          font-weight: 300;
        }
        .hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 0.74rem;
          color: rgba(255,255,255,0.54);
        }
        .chip-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--red);
          flex-shrink: 0;
        }

        .page-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 2rem 90px;
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 48px;
          align-items: start;
        }

        .sidebar {
          position: sticky;
          top: 88px;
        }
        .sidebar-head {
          font-size: 0.61rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
          padding: 0 0 12px 14px;
          border-bottom: 1px solid var(--border-soft);
          margin-bottom: 10px;
        }
        .nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
        }
        .nav-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 14px;
          font-size: 0.79rem;
          color: var(--muted);
          text-decoration: none;
          border-radius: 6px;
          border-left: 2px solid transparent;
          transition: all 0.18s ease;
          line-height: 1.4;
        }
   
        .nav-num {
          font-size: 0.61rem;
          color: var(--red);
          font-weight: 600;
          min-width: 20px;
          flex-shrink: 0;
        }

        .content { min-width: 0; }

        .card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 40px 44px;
          margin-bottom: 20px;
          box-shadow: var(--shadow-xs);
          transition: box-shadow 0.22s ease, border-color 0.22s ease;
          scroll-margin-top: 88px;
          position: relative;
          overflow: hidden;
        }
   
        .card:hover::after { transform: scaleY(1); }

        .card-eyebrow {
          font-size: 0.61rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--red);
          font-weight: 500;
          margin-bottom: 10px;
        }
        .card-title {
          font-family:  sans-serif;
          font-size: 1.48rem;
          font-weight: 600;
          color: var(--blue-dark);
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-soft);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .card-text {
          font-size: 0.92rem;
          color: var(--text-body);
          line-height: 1.82;
          font-weight: 300;
        }

        .highlight-box {
          background: var(--red-light);
          border: 1px solid var(--red-border);
          border-radius: 8px;
          padding: 18px 22px;
          margin-bottom: 24px;
        }
        .highlight-title {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--red-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .highlight-title::before { content: '⚠'; font-size: 0.88rem; }
        .highlight-text {
          font-size: 0.88rem;
          color: #8b1c10;
          line-height: 1.72;
          font-weight: 300;
        }

        .note-box {
          background: var(--blue-pale);
          border: 1px solid rgba(23,71,158,0.18);
          border-radius: 8px;
          padding: 14px 18px;
          margin-top: 18px;
          font-size: 0.84rem;
          color: var(--blue-dark);
          line-height: 1.68;
        }
        .note-box strong { font-weight: 600; color: var(--blue-deeper); }

        .subsection { margin-top: 24px; }
        .subsection + .subsection {
          padding-top: 20px;
          border-top: 1px dashed var(--border-soft);
        }
        .sub-title {
          font-size: 0.84rem;
          font-weight: 500;
          color: var(--blue-dark);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
   

        .policy-list {
          list-style: none;
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .policy-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-body);
          line-height: 1.72;
          font-weight: 300;
        }
      

        .accept-banner {
          background: linear-gradient(135deg, var(--blue-deeper) 0%, var(--blue) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          padding: 30px 38px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }
  
        .accept-icon {
          width: 50px; height: 50px;
          border-radius: 10px;
          background: var(--red);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(238,56,36,0.45);
        }
        .accept-title {
          font-family:  sans-serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 5px;
        }
        .accept-body {
          font-size: 0.81rem;
          color: rgba(255,255,255,0.54);
          line-height: 1.65;
          font-weight: 300;
        }

        .contact-intro {
          font-size: 0.92rem;
          color: var(--text-body);
          line-height: 1.78;
          font-weight: 300;
          margin-bottom: 28px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 14px;
        }
        .contact-tile {
          background: var(--blue-pale);
          border: 1px solid var(--border-soft);
          border-radius: 10px;
          padding: 18px 20px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-tile:hover {
          border-color: rgba(23,71,158,0.3);
          box-shadow: var(--shadow-xs);
        }
        .contact-label {
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--red);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .contact-value {
          font-size: 0.86rem;
          color: var(--blue-dark);
          line-height: 1.55;
          font-weight: 400;
        }
        .contact-value a {
          color: var(--blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .contact-value a:hover { color: var(--red); }

        .footer {
          background: var(--blue-deeper);
          border-top: 3px solid var(--red);
          padding: 36px 2rem;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-left { display: flex; flex-direction: column; gap: 5px; }
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 4px;
        }
        .footer-logo-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--red);
        }
        .footer-logo-name {
          font-family:  sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
          letter-spacing: 0.04em;
        }
        .footer-company {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.42);
          font-weight: 300;
        }
        .footer-cin {
          font-size: 0.64rem;
          color: rgba(255,255,255,0.24);
          letter-spacing: 0.04em;
        }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a {
          font-size: 0.73rem;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-links a:hover { color: #ff9b90; }

        @media (max-width: 920px) {
          .page-wrap { grid-template-columns: 1fr; gap: 0; }
          .sidebar { display: none; }
          .card { padding: 28px 22px; }
          .hero { padding: 52px 1.5rem 46px; }
          .accept-banner { flex-direction: column; gap: 16px; padding: 24px; }
        }
        @media (max-width: 600px) {
          .hero-heading { font-size: 2.1rem; }
          .header-pill { display: none; }
          .contact-grid { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>


      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms & Conditions" breadcrumbImg='assets/images/background/page-title.jpg'>

        {/* <section className="hero">
          <div className="hero-glow" />
          <div className="hero-glow-red" />
          <div className="hero-divider" />
          <div className="hero-inner">
            <div className="eyebrow">
              <span className="eyebrow-label">Legal &amp; Compliance</span>
            </div>
            <h1 className="hero-heading">
              Terms &amp; Conditions
            </h1>
            <p className="hero-body">
              These Terms govern your access to and use of services provided by Indel Capital
              Ventures and Investments Private Limited the strategic investment arm of Indel
              Corporation. Please read them carefully before engaging with our services.
            </p>
            <div className="hero-chips">
              <span className="chip"><span className="chip-dot" />CIN: U67110MH2021PTC358085</span>
              <span className="chip"><span className="chip-dot" />Governed by Indian Law</span>
              <span className="chip"><span className="chip-dot" />RBI / SEBI Compliant</span>
            </div>
          </div>
        </section> */}

        <div className="page-wrap">

          <aside className="sidebar">
            <p className="sidebar-head">Table of Contents</p>
            <ul className="nav-list">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="nav-num">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <main className="content">

            <div className="accept-banner">
              <div>
                <p className="accept-title">Agreement to Terms</p>
                <p className="accept-body">
                  By accessing our website or using any service offered by Indel Capital, you confirm
                  you have read, understood, and agreed to be legally bound by these Terms and Conditions.
                  If you do not agree, please discontinue use immediately.
                </p>
              </div>
            </div>

            {sections.map((s, i) => (
              <div id={s.id} key={s.id} className="card">
                <p className="card-eyebrow">Section {String(i + 1).padStart(2, "0")}</p>
                <h2 className="card-title">{s.title}</h2>

                {s.highlight && (
                  <div className="highlight-box">
                    <p className="highlight-title">{s.highlightTitle}</p>
                    <p className="highlight-text">{s.highlightText}</p>
                  </div>
                )}

                {s.content && <p className="card-text">{s.content}</p>}

                {s.list && (
                  <ul className="policy-list">
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}

                {s.note && (
                  <div className="note-box">
                    <strong>Note: </strong>{s.note}
                  </div>
                )}

                {s.subsections &&
                  s.subsections.map((sub) => (
                    <div key={sub.title} className="subsection">
                      <h3 className="sub-title">{sub.title}</h3>
                      <ul className="policy-list">
                        {sub.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}

                {s.contact && (
                  <>
                    <p className="contact-intro">
                      If you have any questions, concerns, or feedback regarding these Terms and Conditions,
                      or wish to exercise any rights under applicable law, please contact our Legal &amp;
                      Compliance team using the details below. We aim to respond to all enquiries within
                      5 working days.
                    </p>
                    <div className="contact-grid">
                      <div className="contact-tile">
                        <p className="contact-label">Company</p>
                        <p className="contact-value">Indel Capital Ventures And Investments Private Limited</p>
                      </div>
                      <div className="contact-tile">
                        <p className="contact-label">Corporate Office</p>
                        <p className="contact-value">
                          Indel House, Changampuzha Nagar<br />South Kalamassery<br />Ernakulam – 682033, Kerala
                        </p>
                      </div>
                      <div className="contact-tile">
                        <p className="contact-label">Email</p>
                        <p className="contact-value">
                          <a href="mailto:your@domain.com">your@domain.com</a>
                        </p>
                      </div>
                      <div className="contact-tile">
                        <p className="contact-label">Phone</p>
                        <p className="contact-value">
                          <a href="tel:+914842933985">+91 90726 06615</a>
                        </p>
                      </div>
                      <div className="contact-tile">
                        <p className="contact-label">CIN</p>
                        <p className="contact-value">U67110MH2021PTC358085</p>
                      </div>
                      <div className="contact-tile">
                        <p className="contact-label">Jurisdiction</p>
                        <p className="contact-value">Mumbai &amp; Ernakulam Courts, India</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </main>
        </div>

      </Layout>
    </>
  );
}
'use client'

import Layout from "@/components/layout/Layout";

export default function PrivacyPolicy() {

  const sections = [
    {
      id: "overview",
      title: "Overview",
      content: `Indel Capital Ventures and Investments Private Limited ("Indel Capital","we","us", or "our") is a financial services company incorporated in India. This Privacy Policy explains what data we collect, why we collect it, how we use and protect it, and the rights you hold regarding your personal information (CIN: U67110MH2021PTC358085).`,
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      subsections: [
        {
          title: "Personal Identification Information",
          items: [
            "Full name, date of birth, and government-issued identification numbers (Aadhaar, PAN)",
            "Contact details including email address, phone number, and address",
            "Photographs and KYC documents as required by applicable laws",
          ],
        },
        {
          title: "Financial Information",
          items: [
            "Bank account details, income details, and credit history",
            "Investment history and transaction records",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      list: [
        "Processing loan applications and financial transactions",
        "Complying with RBI regulations and KYC/AML requirements",
        "Verifying identity and preventing fraud",
        "Communicating about account updates and financial products",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      contact: true,
    },
  ];

  return (
    <>
      <style jsx global>{`

        :root {
          --brand-blue:  #17479e;
          --brand-red:   #ee3824;
          --bg-light:    #f8fafc;
          --text-main:   #1e293b;
          --text-muted:  #64748b;
          --white:       #ffffff;
          --border:      #e2e8f0;
        }

        body {
          font-family: sans-serif;
          background: var(--bg-light);
          color: var(--text-main);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <style jsx>{`
    
        .logo { font-weight: 700; font-size: 1.25rem; letter-spacing: -0.5px; }
        .badge { 
            background: var(--brand-red); 
            font-size: 0.7rem; 
            padding: 4px 12px; 
            border-radius: 4px; 
            text-transform: uppercase;
            font-weight: 600;
        }

        .hero {
          background: white;
          padding: 60px 2rem;
          border-bottom: 1px solid var(--border);
          text-align: center;
        }
        .hero h1 { 
            color: var(--brand-blue); 
            font-size: 2.5rem; 
            margin-bottom: 10px;
        }
        .hero p { color: var(--text-muted); max-width: 600px; margin: 0 auto; }

        .container {
          max-width: 1100px;
          margin: 40px auto;
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 40px;
          padding: 0 2rem;
        }

        .sidebar nav { position: sticky; top: 100px; }
        .sidebar a {
          display: block;
          padding: 10px 0;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          border-bottom: 1px solid transparent;
          transition: 0.2s;
        }
        .sidebar a:hover { color: var(--brand-red); }

        .card {
          background: white;
          padding: 40px;
          border-radius: 8px;
          border: 1px solid var(--border);
          margin-bottom: 30px;
        }
        h2 { 
            color: var(--brand-blue); 
            padding-left: 15px;
            margin-bottom: 20px;
        }
        h3 { font-size: 1rem; color: var(--brand-blue); margin-top: 20px; }
        
        ul { list-style: none; padding: 0; }
        li { 
            margin-bottom: 8px; 
            padding-left: 20px; 
            position: relative; 
            font-size: 0.95rem;
        }
        li::before {
          content: "•";
          color: var(--brand-red);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .contact-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        .contact-item {
          background: var(--bg-light);
          padding: 15px;
          border-radius: 6px;
        }
        .label { font-size: 0.7rem; text-transform: uppercase; color: var(--brand-red); font-weight: 700; }

        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr; }
          .sidebar { display: none; }
          .contact-box { grid-template-columns: 1fr; }
        }
      `}</style>
  <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Privacy & Policy" breadcrumbImg='assets/images/background/page-title.jpg'>

        <div className="container">
          <aside className="sidebar">
            <nav>
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`}>{s.title}</a>
              ))}
            </nav>
          </aside>

          <main>
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="card">
                <h2>{s.title}</h2>
                {s.content && <p>{s.content}</p>}

                {s.subsections?.map(sub => (
                  <div key={sub.title}>
                    <h3>{sub.title}</h3>
                    <ul>{sub.items.map(item => <li key={item}>{item}</li>)}</ul>
                  </div>
                ))}

                {s.list && <ul>{s.list.map(item => <li key={item}>{item}</li>)}</ul>}

                {s.contact && (
                  <div className="contact-box">
                    <div className="contact-item">
                      <div className="label">Email</div>
                      <div>info@indelcapital.in</div>
                    </div>
                    <div className="contact-item">
                      <div className="label">Phone</div>
                      <div>0484 2933985</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </main>
        </div>
      </Layout>
    </>
  );
}
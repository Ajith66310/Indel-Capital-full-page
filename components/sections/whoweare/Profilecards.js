'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const teamMembers = [
  {
    name: "Mohanan Gopalakrishnan",
    role: "Managing Director",
    img: "assets/images/team/team-1.png",
    bio: "Mr. Mohanan Gopalakrishnan, a banking professional with an experience of 37 years in and around GCC, he was the head of the trade finance operations of United Arab Bank, UAE. He held the position for a span of 11 years commencing from 2001. He, jointly with his sons, has been promoting the investment company namely M/s. Indel Corporation Private Limited as an SPV for investments into various sectors. He currently has investments in Finance, Automobile, Hospitality and Infrastructure sectors.",
  },
  {
    name: "Umesh Mohanan",
    role: "Director",
    img: "assets/images/team/team-2.png",
    bio: "An investment professional with more than 2 decades of rich experience in Managing investment verticals with a proven track record of heading a Middle Eastern multi national multi billion conglomerate at its executive level, spearheading its complete global operations Diversified into portfolios such as Banking investments, infrastructure construction, Oil and Gas, Power stations, Defence supplies, Manufacturing , Trading of minerals, bullion and other commodities across the global. Currently he serves Indel Money as its ED & CEO, at Indel Money his corporate inheritance of skills from the multinational business background is envisaged to grow the business into multifolds.",
  },
  {
    name: "Anish Mohan",
    role: "Director",
    img: "assets/images/team/team-3.png",
    bio: "A dynamic leader with expertise in finance and investments, driving business growth. He plays a key role in expanding Indel’s strategic vision, and ensuring sustainable development for long-term success.",
  },
]

function TeamModal({ member, onClose }) {
  if (!member) return null

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(10, 20, 50, 0.7)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="modal-inner"
          style={{
            background: "#fff",
            borderRadius: "24px",
            width: "100%",
            maxWidth: "850px",
            height: "500px", // FIXED HEIGHT for all popups
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#ee3824", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            style={{
              position: "absolute", top: "20px", right: "20px",
              width: "40px", height: "40px", borderRadius: "50%",
              background: "#f1f5f9", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 10, color: "#1e293b", transition: "all 0.2s"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          {/* Left Column: Fixed Image Area */}
          <div
            className="modal-img-col"
            style={{
              width: "35%",
              height: "100%",
              background: "#17479e",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.img
              src={member.img}
              alt={member.name}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top center",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(12, 45, 107, 0.4), transparent)",
              pointerEvents: "none"
            }} />
          </div>

          {/* Right Column: Scrollable Content Area */}
          <div
            className="modal-content-col"
            style={{ 
              flex: 1, 
              padding: "50px 45px", 
              display: "flex", 
              flexDirection: "column",
              height: "100%",
              overflow: "hidden"
            }}
          >
            <div style={{ marginBottom: "12px" }}>
              <span style={{ 
                fontSize: "12px", 
                fontWeight: "800", 
                textTransform: "uppercase", 
                letterSpacing: "2.5px", 
                color: "#ee3824",
                background: "#fff5f3",
                padding: "4px 12px",
                borderRadius: "4px"
              }}>
                {member.role}
              </span>
            </div>

            {/* Name Container with Dynamic Line Width */}
            <div style={{ width: "fit-content", marginBottom: "25px" }}>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "32px", fontWeight: "800",
                color: "#17479e", margin: "0",
                lineHeight: 1.1,
              }}>
                {member.name}
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.28, duration: 0.4, ease: "easeOut" }}
                style={{ 
                  height: "3px", 
                  width: "100%", // Matches width of 'fit-content' parent
                  background: "#ee3824", 
                  marginTop: "8px",
                  transformOrigin: "left" 
                }} 
              />
            </div>

            {/* Scrollable Bio Container */}
            <div style={{ 
              flex: 1, 
              overflowY: "auto", 
              paddingRight: "10px",
              scrollbarWidth: "thin",
              scrollbarColor: "#cbd5e1 transparent" 
            }} className="custom-scrollbar">
              <p style={{ 
                fontSize: "16px", 
                color: "#475569", 
                lineHeight: "1.8", 
                margin: 0,
                fontWeight: "400"
              }}>
                {member.bio}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function TeamCard({ member, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        onClick={() => onClick(member)}
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #f0f0f0",
          marginBottom: "40px",
          cursor: "pointer",
        }}
        variants={{
          rest: { borderColor: "#f0f0f0", y: 0 },
          hover: { borderColor: "#17479e", y: -5 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div style={{
          position: "relative", overflow: "hidden",
          aspectRatio: "1 / 1.15", display: "block", background: "#f8f9fa",
        }}>
          <motion.img
            src={member.img}
            alt={member.name}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top center",
              display: "block",
            }}
          />
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 0.3 } }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent, #17479e)",
              pointerEvents: "none", zIndex: 2,
            }}
          />
        </div>

        <div style={{
          padding: "25px 20px",
          textAlign: "center",
          background: "#fff",
          minHeight: "90px",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden", position: "relative",
        }}>
          <motion.div
            variants={{ rest: { y: 0, opacity: 1 }, hover: { y: 30, opacity: 0 } }}
            transition={{ duration: 0.3 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "20px", fontWeight: 700,
              margin: 0, color: "#1e293b",
            }}>
              {member.name}
            </h3>
          </motion.div>

          <motion.div
            variants={{ rest: { y: -30, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.3 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <span style={{
              fontSize: "16px", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "1px",
              color: "#ee3824",
            }}>
              {member.role}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Profilecards() {
  const [activeMember, setActiveMember] = useState(null)

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .team-section { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        @media (max-width: 768px) {
          .modal-inner { 
            flex-direction: column !important; 
            height: 85vh !important; 
            max-width: 450px !important;
          }
          .modal-img-col { 
            width: 100% !important; 
            height: 250px !important; 
            flex-shrink: 0;
          }
          .modal-content-col { 
            padding: 30px 25px !important; 
          }
          .modal-content-col h2 {
            font-size: 24px !important;
          }
        }
      `}</style>

      <section className="team-section pt_120 pb_75">
        <div className="auto-container">
          <div className="sec-title mb_70 centred">
            <h6 style={{ color: "#ee3824", textTransform: "uppercase", fontWeight: 800, letterSpacing: "3px", marginBottom: "10px" }}>
              Our People
            </h6>
            <h2 style={{ fontSize: "42px", fontWeight: 800, color: "#17479e" }}>
              Our Board Members
            </h2>
          </div>

          <div className="row clearfix">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <TeamCard member={member} index={index} onClick={setActiveMember} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeMember && (
          <TeamModal member={activeMember} onClose={() => setActiveMember(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
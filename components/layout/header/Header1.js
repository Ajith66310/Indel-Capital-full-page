'use client'
import { useState } from "react"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
import styles from "./Header1.module.css"

const NAV_ITEMS = [
  {
    label: "About us",
    href: "/",
    children: [
      { label: "Who we are", href: "/who-we-are" },
      { label: "How we invest", href: "/investment-approach" },
      { label: "FAQ", href: "/FAQ" },
    ],
  },
  { label: "Strategies", href: "/strategies" },
  {
    label: "Insights",
    href: "/",
    children: [{ label: "Blog", href: "/blog-page" }],
  },
  {
    label: "Contact Us",
    href: "/",
    children: [
      { label: "Contact", href: "/contact-us" },
      { label: "Career", href: "/career" },
    ],
  },
]

function NavItem({ item, scroll }) {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children

  return (
    <li
      className={`${styles.navListItem} ${hasChildren ? styles.hasDropdown : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={styles.navLink}
        style={{ color: scroll ? "#333333" : "#ffffff" }}
      >
        {item.label}
        {hasChildren && (
          <span className={styles.dropdownArrow}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </Link>

      {hasChildren && open && (
        <ul className={styles.subMenu}>
          {item.children.map((child) => (
            <li key={child.href} className={styles.subMenuItem}>
              <Link href={child.href} className={styles.subLink}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Header1({ scroll, handleMobileMenu }) {
  return (
    <header className={`${styles.mainHeader} ${scroll ? styles.fixedHeader : ""}`}>
      <div className={styles.headerLower}>
        <div className={styles.customContainer}>
          <div className={styles.outerBox}>
            <figure className={styles.logoFigure}>
              <Link href="/">
                <img
                  className={styles.logoImg}
                  src={`/assets/images/indel-capital-logo${scroll ? "-blue.png" : ".png"}`}
                  alt="Indel Capital"
                />
              </Link>
            </figure>

            <div className={styles.menuArea}>
              <div
                className={styles.mobileNavToggler}
                onClick={handleMobileMenu}
                style={{ color: scroll ? "#000" : "#fff", cursor: "pointer" }}
              >
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className={styles.mainMenu}>
                <ul className={styles.navigation}>
                  {NAV_ITEMS.map((item) => (
                    <NavItem key={item.label} item={item} scroll={scroll} />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </header>
  )
}
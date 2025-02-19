import React from 'react';
import { FaHome, FaFacebook, FaYoutube } from "react-icons/fa";
import '@src/css/footer.css';
import siteConfig from '@generated/docusaurus.config';

const iconMap = {
  Home: <FaHome size={24} />,
  Facebook: <FaFacebook size={24} />,
  Youtube: <FaYoutube size={24} />,
};

const Link = ({ key, href, label }) => (
  <a
    key={key}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className='footer-link-item'
  >
    {iconMap[label] || label}
  </a>
)

export default function FooterWrapper() {
  const items = siteConfig.themeConfig.footer.links[0].items;
  return (
    <footer className={"footer"}>
      <div>
        <h4>Community</h4>
      </div>
      <div className={"linkContainer"}>
        {items.map((item) => (
          <Link key={item.label} href={item.href} label={item.label} />
        ))}
      </div>
      <p>
        Copyright © {new Date().getFullYear()} eStream Software
      </p>
    </footer>
  );
}

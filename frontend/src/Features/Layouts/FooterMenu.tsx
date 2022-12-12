import React from 'react';
import ExternalLinkIcon from '../Components/ExternalLinkIcon';

const FooterSection: React.FC = () => {
  return (
    <footer>
      <div className="socials">
        <ExternalLinkIcon
          link="https://facebook.com"
          icon="fa-brands fa-facebook-f"
        />
        <ExternalLinkIcon
          link="https://instagram.com"
          icon="fa-brands fa-instagram"
        />
        <ExternalLinkIcon
          link="https://twitter.com"
          icon="fa-brands fa-twitter"
        />
        <ExternalLinkIcon
          link="https://google.com"
          icon="fa-brands fa-google"
        />
        <ExternalLinkIcon
          link="https://linkedin.com"
          icon="fa-brands fa-linkedin"
        />
      </div>
      <p>© 2022 Fixxo. All Rights Reserved.</p>
    </footer>
  );
};
export default FooterSection;

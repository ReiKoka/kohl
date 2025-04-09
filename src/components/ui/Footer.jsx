function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-secondary font-primary p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-4">
      <div className="text-center text-sm text-slate-500">
        © {new Date().getFullYear()} OSIS — AI Powered Marine Intelligence
      </div>
    </footer>
  );
};

export default Footer;

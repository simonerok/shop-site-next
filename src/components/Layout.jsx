import Anchor from "./Anchor";
export default function Layout({ children }) {
  return (
    <>
      <nav className="nav">
        {/* dette linker til roden */}
        <Anchor href="/">Home</Anchor>
      </nav>
      {/* children gør at vi får vores layout fra Layout components */}
      {children}
      <footer>Footer</footer>
    </>
  );
}

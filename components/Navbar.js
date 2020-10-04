import Link from "next/link";

const Navbar = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
  };
  console.log("Navbar Page");
  return (
    <div style={styles}>
      <div>
        <Link href="/">Home</Link>
      </div>

      <div>
        <Link href="/about">About </Link>
      </div>
    </div>
  );
};

export default Navbar;

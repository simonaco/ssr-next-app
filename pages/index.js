import Link from "next/link";

function Home({ numbers }) {
  return (
    <div>
      <Link href="/numbers">
        <a>Magic Numbers</a>
      </Link>
    </div>
  );
}

export default Home;

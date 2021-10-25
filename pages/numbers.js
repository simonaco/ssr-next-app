import Link from "next/link";

function Numbers({ numbers }) {
  return (
    <div>
      <Link href="/">
        <a>Index</a>
      </Link>
      {numbers.map((number) => {
        return <h2 key={number}>{number}</h2>;
      })}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  return { props: { numbers: ["one", "two", "three"] } };
}

export default Numbers;

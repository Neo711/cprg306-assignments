import Link from "next/link";
import StudentInfo from "../student-info";

export default function Page() {
  return (
  <main>
    <h1>My Shopping List</h1> 
    <Link href="/">Back to Home</Link>
    <StudentInfo />
  </main>
  );
}
import Link from "next/link";
import StudentInfo from "./student-info";

export default function Home() {
  return (
    <main>
      <h1>CPRG-306: Web Development 2 Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week 2 </Link>
      <Link href="/week3">Week 3 </Link>
      <Link href="/week4">Week 4 </Link>
      <Link href="/week5">Week 5 </Link>
      <Link href="/week6">Week 6 </Link>
      <Link href="/week7">Week 7 </Link>
    </main>
  );
}

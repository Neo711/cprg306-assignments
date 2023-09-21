import React from 'react';
import Link from "next/link";


export default function StudentInfo() {
    return (
        <div className="student-info">
            <p>Name: Cyril Dizon</p>
            <p>Course Section: CPRG 306 B</p>
            <Link href="https://github.com/Neo711/cprg306-assignments">Github Repo</Link>
        </div>
    );
}



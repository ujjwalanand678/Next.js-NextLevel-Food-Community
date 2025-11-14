import Link from "next/link";
import React from "react";

const blog = () => {
  return <div>This the blog about two blogs
    <Link href="/blog/post-1">Post 1</Link>
    <Link href="/blog/post-2">Post 2</Link>
  </div>;
};

export default blog;

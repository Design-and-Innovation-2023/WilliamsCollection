import { Typography } from "@material-tailwind/react";
import Link from "next/link";
export function SimpleFooter() {
  return (
    <footer className="flex w-screen flex-row flex-wrap mx-auto px-10 items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="white" className="font-normal">
        &copy; 2023 Team 3A
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link href="/credits">
            <Typography
              as="a"
              color="amber"
              className="font-normal transition-colors amber-500"
            >
              Credits
            </Typography>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

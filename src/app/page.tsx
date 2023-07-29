import Image from 'next/image'
import { headers } from 'next/headers'

export default function Home() {
  const ip = headers().get('x-forwarded-for')
  const headersList = headers();

  for (const header in headersList) {
    console.log(`${header}:`);
  }
  return (
    <div>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p>
        IP Address:
        {` ${ip}` || " Not found"}

      </p>
    </div>
  )
}

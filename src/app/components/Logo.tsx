import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" >
      <Image
        src="/logo_caece .png"
        alt="AgroSistemas Logo"
        width={200}
        height={30}
        className=""
      />
    </Link>
  )
} 
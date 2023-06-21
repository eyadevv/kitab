import Link from "next/link"

export function Button({
  className = "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  href,
  ...props
}: any) {
  return href ? <Link href={href} {...props} /> : <button {...props} />
}

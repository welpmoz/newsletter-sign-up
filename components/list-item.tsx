import Image from "next/image"

interface Props {
  content: string
}

export function ListItem({
  content
}: Props) {
  return (
    <li className="flex flex-row gap-4 items-start">
      <Image
        alt="Icon List"
        height={21}
        src={`/assets/images/icon-list.svg`}
        width={21}
      />
      {content}
    </li>
  )
}
export default function Underlined({ tag: Tag, children, className }) {
  return (
    <span className="inline-block w-max relative">
      <Tag className={className}>{children}</Tag>
      <span className="bg-red-500 opacity-50 h-2 absolute left-0 bottom-1 w-full"></span>
    </span>
  )
}

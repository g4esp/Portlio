export default function Section({ className, children, style, id }) {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  )
}

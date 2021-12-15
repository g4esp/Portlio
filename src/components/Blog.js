import { posts } from "../posts"

export const Blog = () => {
  return (
    <div className="lg:flex lg:gap-6">
      {posts.map(({ id, cat, title, content, featuredImg, styles }) => {
        return (
          <article
            key={id}
            className={`relative mb-4 lg:w-1/3 ${styles.wrapper}`}
          >
            <div className="relative">
              <img alt={title} src={featuredImg} />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex content-start items-end bg-transparent">
              <div className="absolute top-4 left-4 bg-red-500 py-1 px-2 rounded-md shadow-md">
                <span className="text-white text-sm font-poppins capitalize">
                  {cat}
                </span>
              </div>
              <div className={`p-4 flex flex-col ${styles.bg}`}>
                <h5
                  className={`font-poppins text-2xl font-bold mb-2 ${styles.title}`}
                >
                  {title}
                </h5>
                <p className={`font-poppins ${styles.content}`}>{content}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

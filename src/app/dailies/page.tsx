export default function Dailies() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-white text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Latest
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                A blog created with Next.js and Tailwind.css
              </p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>November 11, 2020</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <a
                              className="text-gray-900 dark:text-gray-100"
                              href="/blog/new-features-in-v1"
                            >
                              New features in v1
                            </a>
                          </h2>
                          <div className="flex flex-wrap">
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              next-js
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/tailwind"
                            >
                              tailwind
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/guide"
                            >
                              guide
                            </a>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          An overview of the new features released in v1 - code
                          block copy, multiple authors, frontmatter layout and
                          more
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>November 11, 2020</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <a
                              className="text-gray-900 dark:text-gray-100"
                              href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing"
                            >
                              Introducing Multi-part Posts with Nested Routing
                            </a>
                          </h2>
                          <div className="flex flex-wrap">
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/multi-author"
                            >
                              multi-author
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              next-js
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/feature"
                            >
                              feature
                            </a>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          The blog template supports posts in nested
                          sub-folders. This can be used to group posts of
                          similar content e.g. a multi-part course. This post is
                          itself an example of a nested route!
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>November 11, 2020</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <a
                              className="text-gray-900 dark:text-gray-100"
                              href="/blog/introducing-tailwind-nextjs-starter-blog"
                            >
                              Introducing Tailwind Nextjs Starter Blog
                            </a>
                          </h2>
                          <div className="flex flex-wrap">
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              next-js
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/tailwind"
                            >
                              tailwind
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/guide"
                            >
                              guide
                            </a>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          Looking for a performant, out of the box template,
                          with all the best in web technology to support your
                          blogging needs? Checkout the Tailwind Nextjs Starter
                          Blog template.
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>November 11, 2020</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <a
                              className="text-gray-900 dark:text-gray-100"
                              href="/blog/deriving-ols-estimator"
                            >
                              Deriving the OLS Estimator
                            </a>
                          </h2>
                          <div className="flex flex-wrap">
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              next-js
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/math"
                            >
                              math
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/ols"
                            >
                              ols
                            </a>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          How to derive the OLS Estimator with matrix notation
                          and a tour of math typesetting using markdown with the
                          help of KaTeX.
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label='Read "Deriving the OLS Estimator"'
                          href="/blog/deriving-ols-estimator"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>November 11, 2020</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <a
                              className="text-gray-900 dark:text-gray-100"
                              href="/blog/guide-to-using-images-in-nextjs"
                            >
                              Images in Next.js
                            </a>
                          </h2>
                          <div className="flex flex-wrap">
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              next-js
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/guide"
                            >
                              guide
                            </a>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          In this article we introduce adding images in the
                          tailwind starter blog and the benefits and limitations
                          of the next/image component.
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label='Read "Images in Next.js"'
                          href="/blog/guide-to-using-images-in-nextjs"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

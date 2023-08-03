import React from "react";
import Image from "next/image";

export default function ZoomWithRuth() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Sharing Session with Ruth (through Zoom)
              </h1>
              <p className="text-lg leading-7 text-white">24th July 2023</p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="text-base font-bold leading-6 text-white">
                    Feedback Given on Each Game
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Bug Collectibles</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          <p>
                            <strong>Pros</strong>
                          </p>
                          <ul>
                            <li>
                              <strong>Colors and Engaging Visuals:</strong> The
                              application features a wide range of colors and
                              visually interesting elements. The inclusion of
                              bugs, which are very popular, adds to its appeal.
                            </li>
                            <br />
                            <li>
                              <strong>Interactive Experience:</strong> Users are
                              actively involved in the application as they have
                              to find the answers themselves, enhancing
                              engagement and interactivity.
                            </li>
                          </ul>
                          <br />
                          <p>
                            <strong>Cons</strong>
                          </p>
                          <ul>
                            <li>
                              {" "}
                              <strong> Lack of Variety:</strong> The application
                              is primarily focused on bugs and insects, which
                              might limit its appeal to a specific audience and
                              feels somewhat one-sided.
                            </li>
                          </ul>
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
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Qr Code Quiz Trivia</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          <p>
                            <strong>Pros</strong>
                          </p>
                          <ul>
                            <li>
                              <strong>Wide-ranging Scope: </strong> Application
                              is not limited to a particular category or genre.
                              Instead, it covers a broad range of topics,
                              genres, or functionalities.
                            </li>
                          </ul>
                          <br />
                          <p>
                            <strong>Cons</strong>
                          </p>
                          <ul>
                            <li>
                              {" "}
                              <strong>
                                Embracing Positivity and Encouragement :
                              </strong>{" "}
                              The application feedback to user only cross and
                              tick which is not very encouraging to age group
                              from 8-11
                            </li>
                          </ul>
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
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Multiplayer Co-Op</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          <p>
                            <strong>Question ask from Ruth</strong>
                          </p>
                          <ul>
                            <li>why do you need to create a room?</li>
                            <li>Can you play without it being multiplayer?</li>
                            <li>What happens if the family only has 1 kids?</li>
                            <li>
                              Not sure if this game will match terribly well
                              with how ppl carry out their visits
                            </li>
                            <li>
                              Seems only works well if there is a large grp/ or
                              an organisation came
                            </li>
                            <li>
                              The picture disappear when you've got the big tick
                              (its strange)
                            </li>
                          </ul>
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
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Next Steps</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          <p>
                            After the zoom session, our team have decided to
                            combine our Bug Collectibles idea with our Qr Code
                            Quiz Trivia idea into a single idea.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/WilliamsCollection/img/zoomWRuth.jpeg"
                    alt="Zoom With Ruth"
                    style={{ width: "70%", height: "70%" }}
                  />
                </article>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function productRefinement() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Product Refinement
              </h1>
              <p className="text-lg leading-7 text-white">24th July 2023</p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Detailed Description</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <div className="flex">
                            <div
                              className="team-list"
                              style={{ marginRight: "50px" }}
                            >
                              <ul>
                                <li>
                                  1. Users will be presented with a QR code at
                                  the entrance of the museum.
                                </li>
                                <li>
                                  2. Upon scanning of the QR code, users will be
                                  redirected to the loading screen.
                                </li>
                                <li>
                                  3. After the loading screen is done, users
                                  will be presented with an instruction page
                                  stating how the game is played and rules of
                                  the game. At the bottom of this page woud be a
                                  &ldquo;Let's Go`&rdquo;` button.
                                </li>
                                <li>
                                  4. Upon clicking of the "Let's Go" button,
                                  users will be redirected to a screen with a
                                  spinning animation before being presented with
                                  the first question.
                                </li>
                                <li>
                                  5. Users will be presented with a Multiple
                                  Choice Question (MCQ) with 3 answers to choose
                                  from. The questions asked will be related to
                                  the artifact.
                                </li>
                                <li>
                                  6. Each artifact will require the user to
                                  complete 3 questions before they "obtain" the
                                  collectible.
                                </li>
                                <li>
                                  7. After successfully answering all 3
                                  questions, the user will be presented with a
                                  congratulations page where confetti will
                                  appear.
                                </li>
                                <li>
                                  8. The user will then be able to view more
                                  details about the artifact, play the next
                                  round or view his/her basket for today.
                                </li>
                                <li>
                                  9. Upon playing 3 rounds, users will then hit
                                  a daily limit and will not be allowed to
                                  continue spinning for new artifacts
                                </li>
                                <li>
                                  10. Their progress can be saved by creating an
                                  account.
                                </li>
                                <li>
                                  11. A user that is logged in can view all the
                                  artifacts collected in the collections page.
                                </li>
                              </ul>
                            </div>
                          </div>
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
                        <p>Figma of final product</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-justify text-white">
                          <p>
                            Check out our figma{" "}
                            <Link
                              className="text-amber-600"
                              href="https://www.figma.com/file/0Z1wbQ0pYOWU13dqEbbJcz/Untitled?type=design&node-id=18%3A2&mode=design&t=Va9JcGmi3LvZrBL6-1"
                            >
                              here
                            </Link>
                            !
                          </p>
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
                        <p>Refinement in progress</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-justify text-white">
                          <div>
                            <Image
                              src="/img/refinement.jpg"
                              alt="BrainstormSession"
                              style={{ width: "70%", height: "70%" }}
                              fill={true}
                            />
                          </div>
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
                        <p>Testing of protoype on the ground</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-justify text-white">
                          <div>
                            <Image
                              src="imgestingprototype.jpg"
                              alt="BrainstormSession"
                              style={{ width: "70%", height: "70%" }}
                              fill={true}
                            />
                          </div>
                        </div>
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

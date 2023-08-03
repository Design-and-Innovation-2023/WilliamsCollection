import React from "react";

export default function RequirementGathered() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Bug Collectible idea
              </h1>
              <p className="text-lg leading-7 text-white">20th July 2023</p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Description</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          An interactive game where visitors can scan a QR-code
                          to stand a chance to receive a digital arteface
                          collectible where they can save in their personal
                          collection
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
                        <p>Questions Asked</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          <ul className="list-decimal">
                            <li>
                              QR codes are placed at bug exhibits throughout the
                              museum.
                            </li>
                            <li>
                              Kids can scan QR codes using smartphones or
                              provided devices.
                            </li>
                            <li>
                              Scanning a QR code captures a digital version of
                              the bug, like a collectible card.
                            </li>
                            <li>
                              Digital bug includes various stats related to the
                              real bug (e.g., weight, interesting facts).
                            </li>
                            <li>
                              Each visit allows kids to 'roll' twice, collecting
                              random digital bugs.
                            </li>
                            <li>
                              Encourages repeated visits to collect all
                              different bug types.
                            </li>
                            <li>
                              Digital bugs ask questions, promoting exploration
                              in other museum areas.
                            </li>
                            <li>
                              Correct answers award special "bug" cards with
                              rare bugs or unique traits.
                            </li>
                            <li>
                              Encourages continued engagement with the game and
                              museum exploration.
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
                        <p>Discussion in progress</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <img
                          src="/img/msg-959516274-445962 (2).jpg"
                          alt="Wujie and nadiah in discussion"
                          style={{ width: "70%", height: "70%" }}
                        />
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
                        <p>Storyboard</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <img
                          src="/imgbug_game_idea.jpeg"
                          alt="Storyboard"
                          style={{ width: "70%", height: "70%" }}
                        />
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
                        <p>Link to figma</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div></div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <p>
                            Click{" "}
                            <a
                              className="text-amber-600"
                              href={
                                "https://www.figma.com/file/0Z1wbQ0pYOWU13dqEbbJcz/Untitled?type=design&node-id=18%3A2&mode=design&t=jGNAKFHiHaCReBdy-1"
                              }
                            >
                              here
                            </a>{" "}
                            for the figma
                          </p>
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

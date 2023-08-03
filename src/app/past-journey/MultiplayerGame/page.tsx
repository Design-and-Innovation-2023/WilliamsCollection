import React from "react";
import Image from "next/image";
export default function MultiplayerGame() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Multiplayer Co-Op Game
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
                          The game is a multiplayer co-op where two players work
                          together. One player gathers information from Part A
                          location, and the other player gathers information
                          from Part B location. To win, they must collaborate
                          and share their findings to uncover the full
                          information. Teamwork is essential for success.
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
                      {/* <dt className="sr-only">Published on</dt> */}
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Steps</p>
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
                              {/* <p className="font-bold underline decoration-solid">
                                Team 3A
                              </p> */}
                              <ul>
                                <li>
                                  1. When a family enters the museum, a parent
                                  would create a room and become the host.
                                </li>
                                <li>
                                  2. The rest of the family members would be
                                  able to join the room using the room code.
                                </li>
                                <li>
                                  3. When the host starts the room, each player
                                  would be given a random location that the
                                  player needs to navigate to.
                                </li>
                                <li>
                                  4. There would also be a warning at the bottom
                                  of the screen to advice the kids to walk
                                  slowly in the museum.
                                </li>
                                <li>
                                  5. When the player arrives at thier designated
                                  location, they would be asked questions about
                                  the artifact at that location.
                                </li>
                                <li>
                                  6. After they correctly answer a question,
                                  they need to move to another location for the
                                  next question.
                                </li>
                                <li>
                                  7. When everyone on the room completes all
                                  thier questions, they will return to the
                                  meeting point.
                                </li>
                                <li>
                                  8. The host would then be able to start the
                                  final quiz after everyone is back.
                                </li>
                                <li>
                                  9. Questions would be asked about the
                                  artifacts they have just visited and the
                                  person that visited that particular artifact
                                  would have to share about their knowledge of
                                  the artifact so that everyone can answer the
                                  question correctly.
                                </li>
                                <li>
                                  10. When everyone have answered all the
                                  questions correctly, all the players would get
                                  a digital badge to show that they have
                                  completed the game.
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
                        <p>Discussion in progress</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <Image
                          src="/img/jwandky.jpeg"
                          alt="Junwei and Keiyang in discussion"
                          style={{ width: "70%", height: "70%" }}
                          fill={true}
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
                        <Image
                          src="imgcoop_storyboard.jpeg"
                          alt="Coop Storyboard"
                          style={{ width: "70%", height: "70%" }}
                          fill={true}
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
                                "https://www.figma.com/file/0Z1wbQ0pYOWU13dqEbbJcz/Untitled?type=design&node-id=11%3A9&mode=design&t=3Vr3xWx0QV8B4HLs-1"
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

import React from "react";

export default function bugCollectibles() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Bug Collectibles
              </h1>
              {/* <p className="text-lg leading-7 text-white">20th July 2023</p> */}
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      {/* <dt className="sr-only">Published on</dt> */}
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Description</p>
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
                                <li>1. QR codes are placed at bug exhibits throughout the museum.</li>
                                <li>2. Kids can scan QR codes using smartphones or provided devices.</li>
                                <li>3. Scanning a QR code captures a digital version of the bug, like a collectible card.</li>
                                <li>4. Digital bug includes various stats related to the real bug (e.g., weight, interesting facts).</li>
                                <li>5. Each visit allows kids to 'roll' twice, collecting random digital bugs.</li>
                                <li>6. Encourages repeated visits to collect all different bug types.</li>
                                <li>7. Digital bugs ask questions, promoting exploration in other museum areas.</li>
                                <li>8. Correct answers award special "bug" cards with rare bugs or unique traits.</li>
                                <li>9. Encourages continued engagement with the game and museum exploration.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                //Add photos of izz and lionel doing the planning
                //Add photos of storyboard/wireframe
                //Add link of figma, or screenshot of figma, or can add a carousell

              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

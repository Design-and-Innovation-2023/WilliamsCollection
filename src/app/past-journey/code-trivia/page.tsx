export default function EmailUpdates() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-white-200 dark:divide-white-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Qr Code Quiz Trivia
              </h1>
              <p className="text-lg leading-7 text-white">
                20th July 2023
              </p>
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
                          The QR Code quiz/game is a museum scavenger hunt where visitors scan a QR code at the entrance,
                          leading them on an adventure to find a mystery object. By solving quizzes and games related to
                          exhibits, they receive hints to locate QR codes hidden throughout the museum. When the initial
                          QR code matches the object's QR code, they win the game.
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
                        <p>Steps</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                        </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          1. Upon entry to the museum, the user scans a QR code
                          <br />
                          2. The QR code contains an object in the museum
                          <br />
                          3. The user plays a series of games or quizzes which leads them to the object
                          <br />
                          4. Each object in the museum contains a QR code
                          <br />
                          5. To win the game, the user must scan the QR code of the object they find and match it with the right answer obtained during the games.
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

                        <img src="/img/wujie-nadiah.jpeg" alt="Wujie and nadiah in discussion" style={{ width: '70%', height: '70%' }} />

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

                        <img src="/img/QR_Codegame_Idea.jpeg" alt="Qr Code Quiz Trivia Storyboard" style={{ width: '70%', height: '70%' }} />

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
                        <div>
                        </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <p>Click <a className="text-amber-600" href={"https://www.figma.com/file/0Z1wbQ0pYOWU13dqEbbJcz/Untitled?type=design&node-id=0%3A1&mode=design&t=3Vr3xWx0QV8B4HLs-1"}>here</a> for the figma</p>
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

export default function RequirementGathered() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Requirement Gathering
              </h1>
              <p className="text-lg leading-7 text-white">
                19th July 2023
              </p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Problem Statement</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          When considering the diverse needs of families, it is imperative to
                          prioritize engaging and captivating experiences for children within
                          a museum setting. The primary objective lies in developing innovative
                          strategies that enable families to interact meaningfully with the content
                          on display. This entails designing interactive exhibits or activities that
                          cater specifically to children's interests and abilities while simultaneously
                          providing educational value. By incorporating elements like hands-on experiments,
                          multimedia presentations, or immersive technologies such as virtual reality,
                          museums can create an environment where kids are not just occupied but also deeply
                          engaged with the subject matter. Moreover, fostering an inclusive atmosphere where
                          families feel encouraged to actively participate amplifies their overall experience
                          inside the museum walls.
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
                              What is the primary problem or goal you would like this app to address or achieve?
                            </li>
                            <li>
                              What is your intended target audience for the app in terms of age group and preference
                              for difficulty level or design aesthetics?
                            </li>
                            <li>
                              Which platform would you prefer for the app: mobile, web, or both?
                            </li>
                            <li>
                              Could you describe any challenges or frustrations you currently face?
                            </li>
                            <li>
                              What are your areas of interest or themes you would like the app to focus on?
                            </li>
                            <li>
                              Are there any specific accessibility considerations we need to keep in mind for the app?
                            </li>
                            <li>
                              Are there any specific visual design elements or branding guidelines we should consider
                              for the prototype?
                            </li>
                            <li>
                              Is there any existing user feedback on their visit experience that we could use to gain insights?
                            </li>
                            <li>
                              Would you prefer a simplified user flow in the prototype, focusing only on the essential
                              tasks to showcase the concept effectively?
                            </li>
                            <li>
                              Which single feature or functionality, in your opinion, would be most valuable to include
                              in the prototype? (alternative way to ask: What would you like/expect to see in the upcoming prototype?)
                            </li>
                            <li>
                              Are there any privacy or safety considerations we should take into account when designing the
                              interactive experience, particularly if it involves the use of smartphone cameras or multiplayer functionality?
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
                        <p>Requirements Gathered</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify">
                          <ul className="list-disc">
                            <li>
                              Engage families, including adults, young kids, and reluctant older siblings (11 to 14 years old).
                            </li>
                            <li>
                              Target Age Group: Upper primary (8-11 years old) and secondary (11-14 years old).
                            </li>
                            <li>
                              Kids should be able to complete tasks themselves, without heavy reading or effort-based requirements.
                            </li>
                            <li>
                              The primary aim is to provide a fun and enjoyable experience to encourage repeated visits
                            </li>
                            <li>
                              The activity should have an underlying educational component related to the topic.
                            </li>
                            <li>
                              Flexible design, appealing to the target audience and linking to activities on the website.
                            </li>
                            <li>
                              The activity should be ongoing and accessible from the webpage.
                            </li>
                            <li>
                              Visitors should use their own devices for convenience.
                            </li>
                            <li>
                              Preferred over independent app due to WiFi-related difficulties with uploading videos and audio.
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
                  <div className="flex">
                    <img src="img/rq2.jpeg" alt="RQ2" style={{ width: '50%', height: '50%', marginRight: '10px' }} />
                    <img src="img/rq1.jpeg" alt="RQ1" style={{ width: '50%', height: '50%', marginRight: '10px' }} />
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

export default function Dailies() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-white text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                DAILIES
              </h1>
              <p className="text-lg leading-7 text-white">
                Team 3A Dailies
              </p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>18th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        Upon getting into our teams, team 3A wasted no time in getting to know each other, the team
                        assimilated well and learnt a lot about each other <a className="text-amber-600"> (our team even went out for lunch together after!)</a>. 
                        Apart from formalities, we learnt about mental models that we might have when first facing a 
                        problem, many of us realised that our initial mental models that may differ greatly from one another. 
                        Hence it is important that we streamline our thoughts and agree on how something 
                        <a className="text-amber-600"> (eg. the final product of the project)</a> will turn out. Also, we were educated on asking the useful 
                        questions as part of the requirement gathering. Asking the right questions can help us gain more leads 
                        and assist us in understanding that out clients are looking for instead of presuming their desires for 
                        the final product.
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
                        <p>19th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>

                        <div className="prose max-w-none text-justify text-white">
                        <p>Team 3A and 3B had a great morning session with Ruth at the Hunterian Museum, 
                        we had a quick tour of the museum and learnt a great deal about the artefacts  
                        <a className="text-amber-600"> (and the rich history behind them)</a>
                        . After the tour, we sat down to answer some 
                        questions with regards to the project. One prominent point made by the client is 
                        the fact that the product should aim to encourage children <a className="text-amber-600"> (age group 8 - 11 and 11- 14) </a>
                        to constantly re-visit the museum. This serves as a significant factor as the approach 
                        we will be taking takes a turn.</p>
                        <p>
                          <br></br>
                        The teams also did a study of the museum’s current application <a className="text-amber-600">  (eg. bloomberg connect) </a>
                        to get a feel of what might be desired from the clients. From our observation, the 
                        application used by the Hunterian Museum uses largely visuals and audio to enhance 
                        interactivity between visitors and artefacts, but interactions lacks activity for the 
                        visitors to participate in. From these observed flaws, the team went into a brain storming 
                        session, in search for the one optimal solution.
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
                        <p>20th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">

                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                    
                        <div className="prose max-w-none text-justify text-white">
                        <p>The team has started the brain storming and ideation process by gathering and thinking of feasible ideas. 
                        This is extremely important because it allows us to explore our idea before it can be realised. 
                        Feasibility and design concerns are extensively discussed while user experience and interfaces are 
                        carefully crafted. </p>
                        <br></br>
                        <p> The following idea are some that we are considering: </p>
                        <br></br>
                        <div>
                          <ul className="list-disc">
                            <li>
                              A digital card collection for bugs where visitors can scan a QR code to spin for a random digital 
                              collectible bug card that they can keep in their very own collection.
                            </li>
                            <br></br>
                            <li>
                              A QR code quiz game, where users will move around the museum to scan QR code 
                              to be redirected in to a webpage. At the webpage there are a series of quizzes 
                              about artefacts where visitors have to guess which artefacts the quiz is 
                              referring to. Upon finding the correct artefact, players will scan the artefact’s 
                              QR code to answer the quiz and gain points.
                            </li>
                            <br></br>
                            <li>
                              Multiplayer Co-op where one perform an activity at one area of the museum and another 
                              player performs another activity at another part of the museum. They’ll need to collaborate 
                              to find out the full information to win the game. The activities might include “count the number 
                              of gems stone at the gem stone section” or “count the number of Mantodea Mantids at the bugs exhibit”
                            </li>
                        </ul>
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
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        {/* <p>November 11, 2020</p> */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">

                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">jgrizou</span>
                      </div>
                        
                        <div className="prose max-w-none text-white">
                          Thanks for the update, some good ideas generated
                        </div>


                        <div className="prose max-w-none text-white">
                          <div className="border-dotted border-2 border-white ">
                            <div className="flex flex-wrap items-center text-white">
                              <img src="/img/accountIcon.png" alt="Account Icon" />
                              <span className="ml-2">Team 3A</span>
                            </div>
                            <div className="prose max-w-none italic text-white">
                            in their very own collection.
                            </div>
                          </div>
                          Does this require an account? Is that ok with the client?
                        </div>

                        <div className="prose max-w-none text-white">
                          <div className="border-dotted border-2 border-white ">
                            <div className="flex flex-wrap items-center text-white">
                              <img src="/img/accountIcon.png" alt="Account Icon" />
                              <span className="ml-2">Team 3A</span>
                            </div>
                            <div className="prose max-w-none italic text-white">
                            Multiplayer Co-op where one perform an activity at one area of 
                            the museum and another player performs another activity at another 
                            part of the museum.
                            </div>
                          </div>
                          What mechanism makes it multiplayer? Why can’t they do each task one by one?
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
                        {/* <p>18th July 2023</p> */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <p>Thank you prof for your feedback. below is our thoughts when coming up with the ideas. </p>
                          <br></br>

                          <div className="font-bold">Does this require an account? Is that ok with the client?</div>
                          <p>Yes this is an account based solution. This is so that young visitors can own their 
                            personalised collection of bugs that they can have ownership of. This makes it more meaningful 
                            and personal for them. We will be conveying this aspect of the solution to our clients for approval.</p>

                            <br></br>

                          <div className="font-bold">What mechanism makes it multiplayer? Why can’t they do each task one by one?</div>
                          <p>Network and Synchronization. Completion of task concurently allow both user to reach 
                            the goal faster and with the intention that they will play the game again.</p>
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
                        <p>21st July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                          Upon brainstorming our ideas, the team went forward with prototyping the ideas with wireframes. 
                          Wireframes were brought to the Huerian Museum to test their feasibility and flow.
                        </p>
                        <br></br>
                        <p>
                          A reflection by the team: Prototyping proved very useful for the team to visualize our ideas, 
                          it is only when we see the product’s form, did we realize that certain features are infeasible. 
                          On top of visualization, prototyping also allowed us to streamline our mental model with regard to 
                          how the final product will look or how the product will work.
                        </p>
                        <br></br>
                        <p>Below is the wireframe for the Digital card collection for bugs: </p>
                        <img src="/img/bug_game_idea.jpeg" alt="Bug Game Idea"  style={{ width: '50%', height: '50%' }}/>
                        <br></br>
                        <p>In conclusion, the team has found prototyping to be a crucial step in product development.</p>
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
                        <p>24th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <p>
                            Finally! The most exciting part of the design project, the designing phase. 
                            Team 3A has commenced high-fidelity prototyping on the the Figma tool. This 
                            is truly an exciting time because we get to take a step further in realising 
                            our ideas and putting our very own touch on our product. More designing to do, 
                            be right back!
                          </p>
                          <br></br>
                          <p>One hi-fi prototype example we did:</p>
                          <img src="/img/24thJulyHi-FI.png" alt="24th July Hi-Fi"  style={{ width: '20%', height: '20%' }}/>
                         
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
                        <p>25th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <p>
                            The activity in class today was very useful for the team to compare 
                            between our different models, it compared the essential components of our 
                            opposing model <a className="text-amber-600"> (ie. having an app that requires accounts VS having an app 
                            that do not require accounts)</a>. This activity sparked the idea of a potential 
                            “optional account” system that allows to users of our app to sign up if they 
                            would like their game’s progress saved.
                          </p>
                          <br></br>
                          <p>
                          With regards to the project, the team is in the midst of designing and 
                          crafting the high fidelity prototype and hope to complete it soon. More 
                          trips are made to the Hunterian museum to more intensively test the prototype 
                          to ensure its usability and smooth flow of user experience.
                          </p>
                          <br></br>
                          <img src="/img/25thJulyInTheMuseum.jpg" alt="25th July In The Museum"  style={{ width: '60%', height: '60%' }}/>
                         
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
                        {/* <p>18th July 2023</p> */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">jgrizou</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          

                          <p>Good to see some visuals on this thread!</p>
                          <br></br>
                          <p>
                          Keep going and don’t hesitate to share more visuals, or even a video 
                          following you around the museum while your test your idea vie experiencial 
                          prototyping. I am asking because I am still unsure of the “game play” of your 
                          idea and how it feels like for the user to go through it.
                          </p>
                          <br></br>
                          <p>
                            PS: If you choose to do a video, don’t make a fancy video, 
                            just a raw footage uploaded on Youtube
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
                        <p>26th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Yuxin</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                        What a wonderful hi-fi prototype example you posted 2 days ago! I can imaging your completed application which is practical, popular in the market, and educationally meaningful in the near future. Please keep going on with it and share your updates frequently!
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
                        {/* <p>18th July 2023</p> */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        Today the team continued their efforts in refining our high-fidelity prototype. This 
                        intensive process of iterative refinement is so that our solution can be seamless in 
                        design and smooth during use. Other than the product’s design, works on the static 
                        website has began as well and with the design of the static website still in discussion, 
                        the team hopes to finalise a design that can best catch our reader’s attention and most 
                        effectively showcase our work.
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
                        {/* <p>18th July 2023</p> */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Yuxin</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        It would be better if you post your work although it’s still on the way in your 
                        dailies. Otherwise I can only say good plan, keep going on!
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
                        <p>27th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                        Today we had a fruitful client meeting with Ruth where we discussed about our finalised idea 
                        <a className="text-amber-600"> (showing of Figma prototype)</a> to identify gaps and area of improvements. 
                        One key takeaway for team 3A is the idea of having 3 options instead of 2 options in our multiple 
                        choice questions to the children utilising our app. This is indeed a valid suggestion as we feel 
                        that it will further reinforce learning for the young minds engaging with our app.
                        
                        </p>
                        <br></br>
                        <p>
                        The team as began development of the application and aims to finish it by the next client meeting.
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
                        <p>28th July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                        Team 3A has been working diligently on our product and also the static website. 
                        Our progress has been smooth and on schedule. The team is currently focusing on 
                        fixing bugs in our code for the product 
                        <a className="text-amber-600"> (eg. Button sizing and etc) </a>
                        and also integrating the frontend and backend of our product. 
                        </p>
                        
                        <br></br>
                        <p>
                          We are planning to complete the product by this weekend so that we can 
                          perform some usability testing on our product. Excited to see the final outcome. :D
                        </p>
                        <br></br>
                        <div className="flex">
                          <img src="/img/28thJuly1.jpg" alt="28th July 1" style={{ width: '25%', height: '25%', marginRight: '10px' }} />
                          <img src="/img/28thJuly2.jpg" alt="28th July 2" style={{ width: '25%', height: '25%', marginRight: '10px' }} />
                          <img src="/img/28thJuly3.jpg" alt="28th July 3" style={{ width: '25%', height: '25%', marginRight: '10px' }} />
                        </div>
                        <br></br>
                        <img src="/img/28thJuly4.jpg" alt="28th July 4" style={{ width: '70%', height: '70%'}} />

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
                        <p>31st July 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                        Good news! Final touches are being done to the product as we speak, this is to ensure that it is usable and error-free. The team has achieved great progress over the past few days in realizing the idea and we are excited to present our product to you.

                        With regards, to the static website, team 3A requested feedback from teaching assistants and we are in the progress of making changes in accordance with the feedback
                        </p>
                        <br></br>
                        <div className="flex">
                          <img src="/img/grpphoto.jpeg" alt="28th July 1" style={{ width: '70%', height: '70%'}} />
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
                        <p>1st August 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                        Today the team performed a usability test with our client, Ruth as our tester. Feedback were taken in and actions to rectify any gaps were performed after (ie. minor cosmetics changes). Later in the day, the team went on to finalise our product and we are very happy with how it turned out.
                            <br></br><br></br>
                        The team will be working on the static website where we will be completing it as soon as possible.
                        </p>
                        <br></br>
                        <p>
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
                        <p>2nd August 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                      <div className="flex flex-wrap items-center text-white">
                        <img src="/img/accountIcon.png" alt="Account Icon" />
                        <span className="ml-2">Team 3A</span>
                      </div>
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                        <p>
                        At this final stage of the project, the team performed a last run-through of all necessary tests of the product and static website. Together with that, the team has also completed our poster, and we are very excited to showcase all of our work during the exhibition.
                        <br></br><br></br>
                        As we bring this project to a close, the team would like to express our gratitude to Professor Jonathan Grizou, Ruth Fletcher, and all participating academics for their guidance, encouragement and effort for making this module such an enriching and meaningful experience.
                        </p>
                        <br></br>
                        <p>
                        
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

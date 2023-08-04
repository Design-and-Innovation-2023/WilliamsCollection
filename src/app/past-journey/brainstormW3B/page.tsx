"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomNavbar from "@/app/component/navbar2";
export default function BrainstormW3B() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <CustomNavbar />
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Brainstorming Session with 3B
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
                        <p>Attendees</p>
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
                              <p className="font-bold underline decoration-solid">
                                Team 3A
                              </p>
                              <ul>
                                <li>Nur Farah Nadiah Binte Kamsani</li>
                                <li>Chew Chyou Keat Lionel</li>
                                <li>Chen Wujie</li>
                                <li>Lim Jun Wei</li>
                                <li>Izz Danial Bin Selamat</li>
                                <li>Lim Kei Yiang</li>
                              </ul>
                            </div>

                            <div className="team-list">
                              <p className="font-bold underline decoration-solid">
                                Team 3B
                              </p>
                              <ul>
                                <li>Shyam Prasad</li>
                                <li>Tan Xin Jie</li>
                                <li>Leong Weng Yan Ivan</li>
                                <li>Lee Jun Hao Jeff</li>
                                <li>Lau Jun Xiang Jeff</li>
                                <li>Ayan Priyadarshi</li>
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
                        <p>What was discussed</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-justify text-white">
                          <p>Team 3A: 11 - 14 years old</p>
                          <p>Team 3B: 8 - 11 years old</p>

                          <p>
                            <br></br>
                            Each team came up with 3 different solutions that
                            target our age group respectively.
                            <br></br>
                            // maybe can write a bit more stuff here
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
                        <p>Ideas proposed by Team 3A</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-justify text-white">
                          <div>
                            <ul className="list-decimal">
                              <li>Bug Collectibles</li>
                              <p>
                                A digital card collection for bugs where
                                visitors can scan a QR code to spin for a random
                                digital collectible bug card that they can keep
                                in their very own collection.
                              </p>
                              <p>
                                Click{" "}
                                <Link
                                  className="text-amber-600"
                                  href="/past-journey/bugCollectibles"
                                >
                                  here
                                </Link>{" "}
                                for the prototype
                              </p>
                              <br></br>
                              <li>Qr Code Quiz Trivia</li>
                              <p>
                                A QR code quiz game, where users will move
                                around the museum to scan QR code to be
                                redirected in to a webpage. At the webpage there
                                are a series of quizzes about artefacts where
                                visitors have to guess which artefacts the quiz
                                is referring to. Upon finding the correct
                                artefact, players will scan the artefact’s QR
                                code to answer the quiz and gain points.
                              </p>
                              <p>
                                Click{" "}
                                <Link
                                  className="text-amber-600"
                                  href="/past-journey/code-trivia"
                                >
                                  here
                                </Link>{" "}
                                for the prototype
                              </p>
                              <br></br>
                              <li>Multiplayer Co-Op</li>
                              <p>
                                Multiplayer Co-op where one performs an activity
                                at one area of the museum and another player
                                performs another activity at another part of the
                                museum. They’ll need to collaborate to find out
                                the full information to win the game. The
                                activities might include “count the number of
                                gems stone at the gem stone section” or “count
                                the number of Mantodea Mantids at the bugs
                                exhibit”
                              </p>
                              <p>
                                Click{" "}
                                <Link
                                  className="text-amber-600"
                                  href="/past-journey/MultiplayerGame"
                                >
                                  here
                                </Link>{" "}
                                for the prototype
                              </p>
                            </ul>
                          </div>
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
                    src="/WilliamsCollection/img/brainstormSession.jpg"
                    alt="BrainstormSession"
                    style={{ width: "70%", height: "70%" }}
                    width={400}
                    height={400}
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

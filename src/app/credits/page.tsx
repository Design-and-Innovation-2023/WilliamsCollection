"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomNavbar from "../component/navbar2";
export default function CreditsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <CustomNavbar />
        <main className="mb-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-amber-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Credits
              </h1>
              <p className="text-lg leading-7 text-white">
                A page to credit to provide requred attribution.
              </p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white">
                        <p>Device Frame</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="prose max-w-none text-white text-justify dark:text-white">
                          <div className="flex">
                            <div
                              className="team-list text-amber-500"
                              style={{ marginRight: "50px" }}
                            >
                              <p>
                                Device Mockup created from{" "}
                                <Link href="https://deviceframes.com/templates/iphone-14">
                                  Iphone mockups
                                </Link>
                              </p>
                            </div>
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

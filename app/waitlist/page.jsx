"use client";

import React from "react";
import Head from "next/head";

export default function WaitlistPage() {
  return (
    <>
      <Head>
        <title>Waitlist</title>
      </Head>
      <div className="mt-20 fixed w-full">
        <div className="aspect-video w-full">
          <iframe
            style={{ width: "100%" }}
            height="569"
            src="https://www.create.xyz/app/e4dc1b5e-7568-4fa6-bb56-6247b9313535"
            title="Waiting List Landing Page"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

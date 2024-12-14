"use client";
import React from "react";
// import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { StickyScroll } from "./ui/StickyScrollReveal";

const OUR_CLIENTS = [
    {
        title: "Legal Lounge",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/embed/PmwvOV5Lq5Q?si=zRBg7Z0mXhDH5U2s"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Legal Lounge demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "Leon Hendrix",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sJdjCy35Hww?si=Pv2KRqMZFcIvmSUN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "HIP Creative",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/R0CfLm0brJ8?si=gxxIqbpJUo84Q0Qm"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Magical AI",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/w42zsR8oWOQ?si=3Rb3ImpwzpHWLiOG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Kaleb",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MjT_9XfvEcE?si=e4CbwmRAg7tCf-R0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Luke Infinger",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pgj_cPqTMqk?si=9X4Wzi5hxyXQEFSG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Versed",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/embed/M4dQP7c_bjM?si=VZdKi9yoY2vcVK_s"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Versed demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "PracticeBeacon",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis quod culpa alias earum vitae voluptatem excepturi quam qui vel?",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/@YOUR_VIDEO_ID?&mute=1&loop=1&playlist=YOUR_VIDEO_ID" // Replace YOUR_VIDEO_ID with the actual ID if available
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="PracticeBeacon demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
];
export function OurClients() {
    return (
        <div className="">
            <StickyScroll content={OUR_CLIENTS} />
        </div>
    );
}

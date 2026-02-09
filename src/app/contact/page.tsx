"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-20 text-center">Contact Me</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md px-20 py-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <p className="text-secondary mb-7">
              I&apos;m open to junior frontend roles, freelance projects, and
              collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link
                  href="mailto:zhalehelmi@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  zhalehelmi@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <Link
                  href="tel:+989109744783"
                  className="text-secondary hover:text-primary"
                >
                  +98 910 974 4783
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Iran, Shz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

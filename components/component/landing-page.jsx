/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/C1jTlKstO28
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div
              className="flex flex-col justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Academic Potential
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  Apply for our prestigious scholarship program and take the first step towards a brighter future.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Scholarship"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last" />
          </div>
        </div>
      </section>
      <section id="application" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Scholarship Application</h2>
              <p className="text-muted-foreground md:text-xl">
                Fill out the form below to apply for our scholarship program.
              </p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="academic-background">Academic Background</Label>
                <Textarea
                  id="academic-background"
                  placeholder="Describe your academic background"
                  required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="personal-statement">Personal Statement</Label>
                <Textarea
                  id="personal-statement"
                  placeholder="Tell us about your goals and why you deserve this scholarship"
                  required />
              </div>
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Eligibility Criteria</h2>
              <p className="text-muted-foreground md:text-xl">
                Review the eligibility criteria to ensure you meet the requirements.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Academic Excellence</h3>
                <p className="text-muted-foreground">Maintain a minimum GPA of 3.5 or equivalent.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Financial Need</h3>
                <p className="text-muted-foreground">Demonstrate financial need through supporting documents.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Community Involvement</h3>
                <p className="text-muted-foreground">
                  Actively participate in community service or extracurricular activities.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Leadership Potential</h3>
                <p className="text-muted-foreground">Showcase your leadership skills and potential.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Recommendation Letters</h3>
                <p className="text-muted-foreground">Provide two letters of recommendation from teachers or mentors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}

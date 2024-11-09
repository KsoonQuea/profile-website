import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Notebook } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
      <main className="flex items-center justify-center flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                    yOffset={8}
                    text={`Hi there, this is ${DATA.firstName}`}
                />

                <BlurFadeText
                    className="max-w-[600px] md:text-sm"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.role.join(" | ")}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl}/>
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown
                className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.about_me}
            </Markdown>
            <div className="flex items-center justify-end">
              <Link
                  href={DATA.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <Button size={`sm`} variant={`outline`}>
                  Download Resume
                  <Notebook className="ml-2 h-4 w-4"/>
                </Button>
              </Link>
            </div>
          </BlurFade>
        </section>
        <section id="work">
          <div className="flex min-h-0 max-w-2xl flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
                <BlurFade
                    key={work.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                      key         ={work.company}
                      logoUrl     ={work.logoUrl}
                      altText     ={work.company}
                      title       ={work.company}
                      subtitle    ={work.title}
                      href        ={work.href}
                      badges      ={work.badges}
                      period      ={`${work.start} - ${work.end ?? "Present"}`}
                      description ={work.description}
                      links       ={work.links}
                      subtitle2   ={`${work.work_type} | ${work.work_mode}`}
                  />
                </BlurFade>
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 min-w-[60vw] w-full flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
                <BlurFade
                    key={education.school}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                      key={education.school}
                      logoUrl={education.logoUrl}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.major}
                      subtitle2={`CGPA ${education.cgpa}`}
                      period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold text-center">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1 justify-center">
              {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="language">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold text-center">Languages</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1 justify-center">
              {DATA.talking_language.map((item, index) => (
                  <BlurFade key={item.name} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                    <Badge key={item.name}>{item.name}</Badge>
                  </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full" >
          <div className="space-y-12 py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Personal Projects 📝
                  </h2>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[1000px] mx-auto">
              {DATA.projects.map((project, id) => (
                  <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                        href        = {project.href}
                        key         = {project.title}
                        title       = {project.title}
                        description = {project.description}
                        dates       = {project.dates}
                        tags        = {project.technologies}
                        image       = {project.image}
                        links       = {project.links}
                    />
                  </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>

                <div className="border-4 border-red-500">
                  <table>

                  </table>
                </div>

                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to talk about something? Just shoot me a dm{" "}
                  <Link
                      href={DATA.contact.social.X.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    on Twitter
                  </Link>{" "}
                  or any other social media below.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
  );
}

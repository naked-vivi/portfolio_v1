import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function CertificatesSection() {
  return (
    <div className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Certificates</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 id="certificates-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              I enjoy learning new things
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I build my skills through practical courses and hands-on learning.
              Each certificate brings me closer to my next career opportunity.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.certificates.map((certificate) => (
            <TimelineItem key={certificate.href} className="w-full flex items-start gap-4 sm:gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={`View the ${certificate.title} certificate`}
                      className="z-10 shrink-0 cursor-zoom-in rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Image
                        src={certificate.image}
                        alt=""
                        width={40}
                        height={40}
                        className="size-10 bg-white border rounded-full shadow ring-2 ring-border object-contain p-1"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="gap-3 p-3 sm:max-w-3xl">
                    <DialogHeader className="px-1 pt-1 pr-10 text-left">
                      <DialogTitle>{certificate.title}</DialogTitle>
                      <DialogDescription>
                        {certificate.issuer} · {certificate.date}
                      </DialogDescription>
                    </DialogHeader>
                    <Image
                      src={certificate.certificate.src}
                      alt={`${certificate.title} certificate from ${certificate.issuer}`}
                      width={certificate.certificate.width}
                      height={certificate.certificate.height}
                      sizes="(min-width: 640px) 768px, 100vw"
                      className="h-auto max-h-[75vh] w-full rounded-md border object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col gap-2 min-w-0">
                <time dateTime={certificate.dateTime} className="text-xs text-muted-foreground">
                  {certificate.date}
                </time>
                <h3 className="font-semibold leading-snug">
                  <Link
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/certificate inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {certificate.title}
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-muted-foreground opacity-0 -translate-x-2 group-hover/certificate:opacity-100 group-hover/certificate:translate-x-0 group-focus-visible/certificate:opacity-100 group-focus-visible/certificate:translate-x-0 transition-all duration-200 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                  {certificate.description}
                </p>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

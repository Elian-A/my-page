import { Project, Tag } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProjectCard: FC<{ project: Project & { tags: Tag[] } }> = ({
  project,
}) => {
  const { demoUrl, githubUrl, title, imageUrl, description, warning, tags } =
    project;
  return (
    <div className="overflow-auto rounded-lg bg-white shadow-lg">
      <div className="relative h-[13rem] w-full">
        <Image src={imageUrl} alt="title" fill style={{ objectFit: "cover" }} />
      </div>
      <ul className="flex flex-wrap gap-x-2 px-4 pt-2 text-neutral-600">
        {tags.map(({ id, name }) => (
          <li key={id}>#{name}</li>
        ))}
      </ul>
      <div className="grid gap-4 px-4 pb-7 pt-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="max-h-[4.3rem] overflow-hidden overflow-ellipsis">
          {description}
        </p>
        <div className="grid grid-flow-col gap-5 pt-3">
          <Link
            href={githubUrl}
            target="_blank"
            className="rounded-md border border-neutral-600 py-2 text-center shadow-lg active:bg-black active:text-white"
          >
            Code
          </Link>
          <Link
            href={demoUrl}
            target="_blank"
            className="rounded-md border border-neutral-600 py-2 text-center shadow-lg active:bg-black active:text-white"
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

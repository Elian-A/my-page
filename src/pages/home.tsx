import { type NextPage } from "next";
import Image from "next/image";
import {
  EmailSvg,
  InterestsSvg,
  LocationSvg,
  SkillSvg,
  TechnologySvg,
} from "~/components/Svgs";
import MainLayout from "~/layouts/MainLayout";
import greenSquares from "../assets/green-squares.webp";

const Home: NextPage = () => {
  return (
    <MainLayout title="Elian Avalos | Home">
      <div className="grid min-h-main place-content-center px-5">
        <div className="grid gap-8 bg-white p-5 shadow-2xl">
          <div className="relative aspect-square w-[120px] overflow-auto rounded-full">
            <Image
              src={greenSquares}
              alt="me"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-3xl font-bold">Elian Avalos</h2>
          <p>
            Fullstack developer based on LATAM. I'm passionate about learning
            new things about everything.
          </p>
          <ul className="grid gap-3">
            <li>
              <p className="info">
                <span className="flex min-w-max items-center gap-1">
                  <SkillSvg />
                  <b>Skills: </b>
                </span>
                Typescript, React
              </p>
            </li>
            <li>
              <p className="info">
                <span className="flex min-w-max items-center gap-1 self-start">
                  <InterestsSvg />
                  <b>Interests: </b>
                </span>
                State managment, Science, Artificial Inteligence
              </p>
            </li>
            <li>
              <p className="info gap-3">
                <span className="flex min-w-max items-center gap-1 self-start">
                  <TechnologySvg />
                  <b>Technologies:</b>
                </span>
                Tanstack query, Next, Trpc, Zod, Prisma, Tailwind
              </p>
            </li>
          </ul>
          <ul className="h-0 w-0 overflow-hidden sm:h-full sm:w-full">
            <li>
              <p className="flex items-center gap-1">
                <LocationSvg /> Paraguay, Encarnacion
              </p>
            </li>
            <li>
              <p className="flex items-center gap-1">
                <EmailSvg />
                elian.emanuel.avalos@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

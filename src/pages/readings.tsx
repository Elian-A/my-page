import MainLayout from "~/layouts/MainLayout";

const Readings = () => {
  return (
    <MainLayout title="Elian Avalos | Readings">
      <ul>
        <li className="bg-white p-3">
          <div className="grid gap-3">
            <h2 className="">TypeScript and Set Theory</h2>
            <p className="text-sm text-neutral-600">
              How does set theory help to undesrand type assignability and
              resolution in typescript?
            </p>
            <ul className="flex gap-3 text-sm text-neutral-600">
              <li>#Typescript</li>
              <li>#Math</li>
            </ul>
          </div>
        </li>
      </ul>
    </MainLayout>
  );
};

export default Readings;

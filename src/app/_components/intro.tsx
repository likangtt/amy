import { CMS_NAME } from "@/lib/constants";
import { Navigation } from "./navigation";

export function Intro() {
  return (
    <section className="flex-col flex items-center mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-center mb-6 text-blue-600">
        Massage Chair Expert
      </h1>
      <h4 className="text-center text-lg mb-8 text-teal-600">
        Your trusted guide to finding the perfect massage chair for relaxation and wellness.
      </h4>
      <div className="w-full flex justify-center mb-6">
        <Navigation />
      </div>
    </section>
  );
}

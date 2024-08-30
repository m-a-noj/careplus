import PatientForm from "@/components/form/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image
        src="/assets/icons/logo-full.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="mb-12 h-10 w-fit"
        ></Image>
        <PatientForm/>
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left"> c 2024 CarePulse</p>

        </div>

      </div>

    </section>
    <Image
    src="/assets/images/onboarding-img.png"
    height={1000}
    width={1000}
    alt="patient"
    className="side-img max-w-[50%]">
  
    </Image>
   
   </div>
  );
}

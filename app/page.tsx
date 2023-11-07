"use client";

import DenominationInput from "@/components/DenominationInput";
import TotalAmount from "@/components/TotalAmount";
import Image from "next/image";
import { useState } from "react";

const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];

export default function Example() {
  const [denominationCounts, setDenominationCounts] = useState<
    Record<number, number>
  >({});
  const total = Object.keys(denominationCounts).reduce(
    (acc, denomination: any) =>
      acc + parseInt(denomination) * denominationCounts[denomination],
    0
  );

  const handleInputChange = (denomination: number, count: number) => {
    setDenominationCounts((prevCounts) => ({
      ...prevCounts,
      [denomination]: count,
    }));
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center -mt-28 -mb-10">
        <Image src="/images/logo.png" width={132} height={132} alt="Rasya Cafe Logo" className="mx-auto" />
        <p className="-mt-2 text-lg leading-8 text-gray-600">Cash Calculator</p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {denominations.map((denomination) => (
            <DenominationInput
              key={denomination}
              denomination={denomination}
              onInputChange={handleInputChange}
            />
          ))}
        </div>
        <TotalAmount total={total} />
      </form>
    </div>
  );
}

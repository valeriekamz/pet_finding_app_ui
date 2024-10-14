"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { SearchBreedProps } from "@/types";
import { breeds } from "@/constants";

const SearchBreed = ({ breed, setBreed }: SearchBreedProps) => {
  const [query, setQuery] = useState("");

  const filteredBreeds =
    query === ""
      ? breeds
      : breeds.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/paw.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="paw logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-full max-sm:rounded-full bg-gray-200 outline-none cursor-pointer text-sm"

            placeholder="Hamster"
            displayValue={(breed: string) => breed}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredBreeds.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="cursor-default select-none py-2 pl-10 pr-4"
                >
                  Create &quot;{query}&quot;
                </Combobox.Option>
              ) : (
                filteredBreeds.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-[#9B82FF] text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBreed;

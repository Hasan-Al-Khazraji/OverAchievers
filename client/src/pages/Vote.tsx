import { useEffect, useState } from "react";
import Category from "../components/category/category";
import SubmitButton from "../components/form/submitButton";

interface nomineesType {
  User: string;
  votes: votesType[];
}

interface votesType {
  Category: string;
  nominee: string;
}

export default function Vote() {
  const handleSelect = (selectedNom: string, category: string) => {
    setNominees((prevNominees) => {
      // Check if the category exists, if it is change the nominee, else keep the same vote
      const updatedVotes = prevNominees.votes.map((vote) =>
        vote.Category === category ? { ...vote, nominee: selectedNom } : vote
      );

      // Check if the vote has a category and return boolean
      const isCategoryExists = prevNominees.votes.some(
        (vote) => vote.Category === category
      );

      // If test fails, add new vote
      return {
        ...prevNominees,
        votes: isCategoryExists
          ? updatedVotes
          : [...updatedVotes, { Category: category, nominee: selectedNom }],
      };
    });
  };

  const [nominees, setNominees] = useState<nomineesType>({
    User: "some-UUID",
    votes: [],
  });

  useEffect(() => {
    console.log(nominees);
  }, [nominees]);

  return (
    <div className="bg-gradient-to-b from-emerald-200 to-emerald-600">
      <div className="mb-24">
        <div className="flex justify-center pt-20">
          <span className="bg-black bg-opacity-85 p-6">
            <h1 className="font-Arcade text-white text-6xl">Vote Now</h1>
          </span>
        </div>
        <h3 className="font-Retro text-white text-lg drop-shadow-sm text-center mt-5">
          Categories may be skipped.
        </h3>
      </div>
      <Category
        title="Sample Category"
        toolTipText="Sample"
        onSelect={handleSelect}
      />
      <div className="flex justify-center">
        <SubmitButton />
      </div>
    </div>
  );
}

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

  const handleSubmit = () => {
    console.log(nominees);
  };

  const [nominees, setNominees] = useState<nomineesType>({
    User: "some-UUID",
    votes: [],
  });

  return (
    <div className="bg-gradient-to-b from-emerald-800 to-emerald-950">
      <div className="mb-24 h-fit">
        <div className="flex justify-center pt-56">
          <span className="bg-black bg-opacity-85 p-6">
            <h1 className="font-Arcade text-white text-8xl text-center">Vote Now</h1>
          </span>
        </div>
        <h3 className="font-Retro text-white text-lg drop-shadow-sm text-center mt-5">
          Categories may be skipped.
        </h3>
        <div className="flex justify-center mt-16 animate-bounce">
          <img src="https://github.com/user-attachments/assets/c66e9dcd-d287-451a-83f8-ebc2160527ac" alt="Downward Arrow" width={150}/>
        </div>
      </div>
      <Category
        title="Best *minecraft* youtubers"
        toolTipText="Sample"
        onSelect={handleSelect}
      />
      <div className="flex justify-center">
        <span onClick={handleSubmit}>
          <SubmitButton />
        </span>
      </div>
    </div>
  );
}

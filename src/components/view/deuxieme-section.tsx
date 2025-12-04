import TitleSection from "../parties/title";
import Button from "../parties/button";

export default function DeuxiemeSection() {
  return (
    <div className=" text-center ">
      <TitleSection
        titre="What is"
        sousTitre="Skilline?"
        description="Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
      />

      <div className="flex items-center justify-between gap-6 my-24 container">
        <div className="bg-[url(https://mhaecal.github.io/frontend/img/Rectangle%2019.png)] bg-center bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center flex-col gap-5 rounded-2xl ">
          <h3 className="text-3xl font-bold text-white ">For instructor</h3>
          <Button
            className="bg-transparent border-2 text-white"
            text="start a class to day "
          />
        </div>
        <div className="bg-[url(https://mhaecal.github.io/frontend/img/Rectangle%2021.png)] bg-center bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center flex-col gap-5 rounded-2xl">
          <h3 className="text-3xl font-bold text-white">For Students</h3>

          <Button
            className="bg-blue-500 text-white "
            text="Enter access code"
          />
        </div>
      </div>
    </div>
  );
}

// What isSkilline?

// Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.

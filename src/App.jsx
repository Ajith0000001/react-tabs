import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setJobs(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <h1 className="text-[2rem] text-center">Loading...</h1>
      </div>
    );
  }
  const { id, title, dates, duties, company } = jobs[value];
  return (
    <div>
      <header className="text-[2rem] text-center my-[3rem]">
        <h1>Experience</h1>
        <div className="w-[6rem] h-[3px] bg-sky-500 mx-auto"></div>
      </header>
      <main className="w-screen min-h-screen bg-white  ">
        <section className="max-w-[800px] sm:max-w-[1000px] mx-auto  px-8 sm:grid  sm:grid-cols-[auto_1fr] sm:gap-16 ">
          <div className="flex items-center mb-4 gap-4 justify-center sm:flex-col sm:justify-start ">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className="text-[1.5rem] p-[5px] px-4  rounded-lg hover:underline"
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="" key={id}>
            <h1 className="text-[1.8rem] mb-2 ">{title}</h1>
            <h3 className="text-[1.2rem] ml-4 rounded-md mb-1 inline-block p-1 border bg-slate-400 px-4">
              {company}
            </h3>
            <p className="mb-4 mt-1 ml-3">{dates} </p>
            {duties.map((duty, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] gap-8 items-center"
                >
                  <FaAngleDoubleRight className="text-sky-600 " />
                  <p className="p-2">{duty}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
export default App;

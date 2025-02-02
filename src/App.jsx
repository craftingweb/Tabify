import { useEffect, useState } from "react";
import { JobInfo } from "./JobInfo";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return setError(true);
      }
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  const { title, dates, duties } = jobs[index];

  return (
    <main>
      <section>
        <JobInfo title={title} dates={dates} duties={duties} />
      </section>
    </main>
  );
};
export default App;

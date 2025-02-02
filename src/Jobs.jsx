import { JobInfo } from "./JobInfo";

export const Jobs = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => {
        return <JobInfo key={job.id} {...job} />;
      })}
    </div>
  );
};

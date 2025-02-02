export const JobInfo = ({ title, dates, duties }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{dates}</p>
      <p>{duties}</p>
    </div>
  );
};

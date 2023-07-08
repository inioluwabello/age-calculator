
const DisplayComponent = ({ age }) => {
  return (
    <>
      <hr />

      <div className="relative">
        <div className="absolute">
          <img src="/assets/images/icon-arrow.svg" alt="icon" />
        </div>
      </div>

      <div className="age-display">
        <h1>
          <span>{age.years}</span> years
        </h1>
        <h1>
          <span>{age.months}</span> months
        </h1>
        <h1>
          <span>{age.days}</span> days
        </h1>
      </div>
    </>
  );
};
export default DisplayComponent;

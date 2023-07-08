const DisplayComponent = ({ age }) => {
  return (
    <>
      <div className="space-between mt-3">
        <hr className="line" />
        <div className="icon purple-bg">
          <img src="/assets/images/icon-arrow.svg" alt="icon" />
        </div>
      </div>
      <div className="relative">
        <div className="icon-mobile purple-bg">
          <img src="/assets/images/icon-arrow.svg" alt="icon" />
        </div>
      </div>

      <div className="age-display fontFaceRobotoExtraBoldItalic">
        <h1>
          <div className="fl">
            <div className="purple-color">{age.years}</div>
            <div className="label">years</div>
          </div>
        </h1>
        <h1>
          <div className="fl">
            <div className="purple-color">{age.months}</div>
            <div className="label">months</div>
          </div>
        </h1>
        <h1>
          <div className="fl">
            <div className="purple-color">{age.days}</div>
            <div className="label">days</div>
          </div>
        </h1>
      </div>
    </>
  );
};
export default DisplayComponent;

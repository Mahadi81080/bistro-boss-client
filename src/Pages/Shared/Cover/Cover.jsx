import { Parallax } from "react-parallax";

const Cover = ({ img, title, description, height }) => {
  const dynamicHeight = height ? height : "600px";
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero" style={{ height: dynamicHeight }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

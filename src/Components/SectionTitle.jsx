 

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 my-8 text-center">
            <h3 className="text-yellow-600 mb-2">.... {subHeading} ....</h3>
            <h1 className="text-3xl uppercase border-y-2 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;
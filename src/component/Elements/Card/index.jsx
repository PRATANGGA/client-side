const Card = ({ title = false, desc, variant }) => {
  return (
    <div className={`flex flex-col flex-1 mb-6 ${variant}`}>
      {title && (
        <>
          {title.length === 1 ? (
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
              {title}
            </div>
          ) : (
            <div className="text-lg text-gray-02 mb-2">{title}</div>
          )}
        </>
      )}
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl">{desc}</div>
    </div>
  );
};

export default Card;

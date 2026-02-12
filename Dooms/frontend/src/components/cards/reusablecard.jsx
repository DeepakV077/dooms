const Card = ({ title, children }) => {
  return (
    <div
      className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:scale-105"
    >
      <h3 className="text-sm text-black/70 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default Card;

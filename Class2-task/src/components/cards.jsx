const Cards = (user) => {
  return (
    <div className="card w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="Images relative h-48">
        <img
          className="w-full h-full object-cover"
          src={user.user.coverImage}
          alt="cover"
        />
        <div className="absolute -bottom-10 left-4">
          <img
            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm"
            src={user.user.profile}
            alt=""
          />
        </div>
      </div>
      <div className="pt-14 p-8 flex flex-col grow">
        <div className="mb-4">
          <h2 className="Heading text-xl font-bold text-gray-800 leading-tight">
            {user.user.fullname}
          </h2>
          <p className="SubHeading text-sm text-gray-500 font-medium">
            {user.user.title}
          </p>
        </div>

        <div className="Count grid grid-cols-3 gap-4 text-center text-sm text-gray-600 mb-4 py-3 border-t border-b border-gray-100">
          <div>
            <span className="Count block font-bold text-gray-800">
              {user.user.likesCount}
            </span>
            <span className="Count text-xs">Likes</span>
          </div>
          <div>
            <span className="PostCount block font-bold text-gray-800">
              {user.user.postCount}
            </span>
            <span className="PostCount text-xs">Posts</span>
          </div>
          <div>
            <span className="ViewsCount block font-bold text-gray-800">
              {user.user.viewsCount}
            </span>
            <span className="ViewsCount text-xs">Views</span>
          </div>
        </div>

        <div className="mt-auto flex justify-center">
          <button
            className={`py-2 px-2 rounded-lg w-45  font-semibold text-sm transition-colors ${user.user.followed ? "bg-gray-200 text-gray-800 hover:bg-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            {user.user.followed ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

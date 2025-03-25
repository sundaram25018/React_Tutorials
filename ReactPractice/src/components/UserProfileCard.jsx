export default function UserProfileCard() {
  const user = {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "Frontend Developer | React Enthusiast | Coffee Lover ☕",
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold mt-4">{user.name}</h2>
      <p className="text-gray-600 text-center mt-2">{user.bio}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Follow
      </button>
    </div>
  );
}

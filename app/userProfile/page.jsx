import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center mb-6">
        <Image
          src="/default-profile.png"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">Username</p>
          <p className="text-gray-500">user@email.com</p>
        </div>
      </div>
      <div>
        <p className="mb-2">
          Welcome to your profile page. Here you can view and manage your
          account details.
        </p>
        {/* Add more user info and actions here as needed */}
      </div>
    </div>
  );
};

export default UserProfile;

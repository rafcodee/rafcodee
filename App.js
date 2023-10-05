const user = {
  name: "Diana",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 1100
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: 250,
          height: 50
        }}
      />
    </>
  );
}

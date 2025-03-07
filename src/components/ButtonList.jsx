const Button = ({ name }) => (
  <button className="px-4 py-2 mx-2 bg-gray-200 rounded-lg">{name}</button>
);

const ButtonList = () => {
  const list = [
    "All",
    "Trending",
    "Live",
    "Music",
    "New",
    "Sports",
    "India",
    "Politics",
    "Podcasts",
    "Bollywood",
    "Education",
    "Virat Kohli",
    "Kerala",
  ];

  return (
      <div className="flex w-max space-x-4 px-4 py-2">
        {list.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
  );
};

export default ButtonList;

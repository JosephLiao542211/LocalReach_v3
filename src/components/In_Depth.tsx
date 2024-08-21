interface ComponentProps {}

const In_Depth: React.FC<ComponentProps> = ({}) => {
  return (
    <div className="flex h-[30em] w-full justify-around bg-green-400">
      <div className="flex-2 m-16 w-[55%] bg-black">
        <div className="flex h-full w-full justify-around space-x-8 bg-purple-500">
          <div className="h-full flex-1 bg-yellow-300"></div>
          <div className="h-full flex-1 bg-yellow-300"></div>
        </div>
      </div>
      <div className="m-16 w-[45%] flex-1 bg-black">
        <div className="flex h-1/3 w-full justify-around space-x-8 bg-purple-500">
          <div className="h-full w-full flex-1 rounded-full bg-yellow-300"></div>
          <div className="h-full flex-1 bg-yellow-300"></div>
        </div>
        <div className="h-2/3">ahhhhhhhhhh</div>
      </div>
    </div>
  );
};

export default In_Depth;

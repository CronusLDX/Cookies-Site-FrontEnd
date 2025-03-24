import { CollabInfo } from '../interfaces/Interfaces';

const CollabCard: React.FC<{ prop: CollabInfo }> = ({ prop }) => {
  return (
    <div className=" flex justify-center items-center flex-col w-full h-full ">
      <div className="border-2 rounded-2xl border-white px-5 py-5 w-[17rem] lg:w-[25rem] h-full flex justify-center items-center flex-col">
        <div
          className="h-[8rem] lg:h-[11rem] w-[8rem] lg:w-[11rem] bg-cover bg-center rounded-[50%] justify-center flex items-center "
          style={{ backgroundImage: `url(${prop.profileImage})` }}
        ></div>
        <h1 className="lily text-2xl lg:text-3xl  py-3">{prop.name}</h1>
        <p className=" text-md lg:text-lg font-light">{prop.description}</p>
      </div>
    </div>
  );
};

export default CollabCard;

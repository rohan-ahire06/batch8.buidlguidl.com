import CheckedInCounter from "../components/CheckedInCounter";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow my-5">
        <div className="px-5">
          <p className="text-lg flex gap-2 justify-center">
            <CheckedInCounter />
          </p>
        </div>

        <div className=" px-[100px] w-full">
          <div className="bg-base-300 flex md:flex-row flex-col items-center rounded-[10px] p-10">
            <div></div>

            <div className=" border-l-2 border-white flex flex-col justify-center items-center pl-[40px]">
              <p className=" text-lg font-bold mt-0">Previous Bidder</p>

              <div className=" flex flex-col items-center gap-y-3">
                <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px]">
                  <Address address="0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4" />
                </div>
                <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px]">
                  <Address address="0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4" />
                </div>
                <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px]">
                  <Address address="0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4" />
                </div>
                <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px]">
                  <Address address="0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

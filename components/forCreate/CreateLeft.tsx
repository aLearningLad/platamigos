"use client";

import { Icreateleft } from "@/interfaces";
import { ChangeEvent, useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { TbProgressCheck } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const CreateLeft: React.FC<Icreateleft> = ({
  purpose,
  setPurpose,
  setTitle,
  title,
  principle,
  setPrinciple,
  totalDue,
  interestValue,
  setInterestValue,
  setInterestRate,
}) => {
  const handleInterestChanges = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setInterestValue((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  return (
    <section className="w-full h-full lg:w-1/2 flex flex-col items-start justify-around px-1 md:px-4 lg:px-8 xl:px-16 bg-gradient-to-br">
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-3 font-semibold flex items-center gap-1">
          Loan details
          <span
            className={` p-[1px] gap-1 ${
              title.length === 0 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <FaCircleExclamation size={14} className="" color="red" />
            <p className=" text-[12px] lg:text-[10px] text-red-500  ">
              required
            </p>
          </span>
          <p
            className={`bg-green-500 p-[1px] ${
              title.length > 5 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <TiTick size={14} className=" text-white" />
          </p>
          <span
            className={` p-[1px] gap-1 ${
              title.length >= 1 && title.length <= 5 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <TbProgressCheck size={14} className="" />
            <p className=" text-[12px] lg:text-[10px] text-pink-400  ">
              ...try adding a descriptive title
            </p>
          </span>
        </h3>

        {/* TITLE */}
        <div className=" w-full h-full flex flex-col items-start ">
          <label className="labelStyles" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter a title for your loan"
            className="inputField"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
      </div>

      {/* PURPOSE */}
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-3 font-semibold flex items-center gap-1">
          About
          <p
            className={`bg-green-500 p-[1px] ${
              purpose.length > 10 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <TiTick size={14} className=" text-white" />
          </p>
          <span
            className={` p-[1px] gap-1 ${
              purpose.length <= 1 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <FaCircleExclamation size={14} className="" color="red" />{" "}
            <p className="text-[12px] lg:text-[10px] text-red-500">required</p>
          </span>
          <span
            className={` p-[1px] gap-1 ${
              purpose.length > 1 && purpose.length <= 10 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <TbProgressCheck size={14} className="" />
            <p className=" text-[12px] lg:text-[10px] text-pink-400  ">
              ...keep adding info
            </p>
          </span>
        </h3>

        <div className=" w-full h-full flex flex-col items-start ">
          <label className="labelStyles" htmlFor="title">
            Additional Info on Offer
          </label>
          <textarea
            placeholder="Provide information on your loan offer"
            className="textarea"
            required
            value={purpose}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setPurpose(e.target.value)
            }
          />
        </div>
      </div>

      {/* PRINCIPLE AMOUNT */}
      <div className=" w-full flex flex-col">
        <h3 className="text-white flex text-[28px] lg:text-xl font-semibold items-center gap-1 mb-3 lg:mb-9 w-full">
          Terms Configurations
          <p
            className={`bg-green-500 p-[1px] ${
              totalDue > 299 ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            <TiTick size={14} className=" text-white" />
          </p>
        </h3>

        {/* Inputs */}
        <div className=" w-full h-full flex flex-col items-start">
          <label className="labelStyles" htmlFor="inputs">
            Principle Amount & Interest %
          </label>
          <section className="w-full h-[30vh] flex flex-col lg:flex-row gap-2 xl:gap-4 items-start ">
            <div className=" w-full group cursor-pointer h-[50%] border-2 lg:w-8/12 border-neutral-400/40 hover:border-neutral-100 rounded-md flex flex-col items-start px-1 md:px-2 lg:px-3 py-2 ">
              <label className="labelStyles" htmlFor="amount">
                Amount
              </label>
              <span className=" flex flex-row w-full items-center gap-[1px] lg:gap-[2px]  ">
                <p className="text-neutral-200 text-[12px] lg:text-[10px] w-fit group-hover:text-white group-hover:text-[15px] transition-all duration-300 ease-in-out ">
                  R300
                </p>
                <input
                  type="range"
                  id="amount"
                  name="amount"
                  min={300}
                  max={5000}
                  step={100}
                  value={Number(principle)}
                  className="rangeInput"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPrinciple(Number(e.target.value))
                  }
                  required
                />
                <p className="text-neutral-200 text-[12px] lg:text-[10px] w-fit group-hover:text-white group-hover:text-[15px] transition-all duration-300 ease-in-out">
                  R5000
                </p>
              </span>
              <span className=" w-full py-1 flex justify-center items-center">
                <div className=" text-[15px] flex items-center justify-center group-hover:px-3 lg:group-hover:px-5 py-1 group-hover:text-[12px] text-white group-hover:bg-white group-hover:text-black rounded-md transition-all duration-300 ease-in">
                  <p className=" group-hover:hidden mr-1  ">~</p>
                  <p className="lg:text-[10px] text-xl">R{principle}</p>
                </div>
              </span>
            </div>
            <div className="w-full group cursor-pointer h-[50%] lg:w-4/12 border-2 border-neutral-400/40 hover:border-neutral-100 transition-all duration-300 hover:bg-neutral-700/30 ease-in-out hover:scale-95 rounded-md flex flex-col items-start px-1 md:px-2 lg:px-3 py-2">
              <label className="labelStyles" htmlFor="interest">
                Interest rate
              </label>
              <span className=" w-full h-full text-white items-end lg:flex hidden">
                <input
                  type="number"
                  value={interestValue.unitValue}
                  name="unitValue"
                  className="numberInput"
                  min={18}
                  max={38}
                  onChange={handleInterestChanges}
                  required
                />

                <p className=" text-2xl font-semibold mx-1 h-full flex items-end">
                  .
                </p>
                <input
                  type="number"
                  className="numberInput mr-1"
                  value={interestValue.decimalValue}
                  name="decimalValue"
                  min={0}
                  max={9}
                  onChange={handleInterestChanges}
                  required
                />
              </span>
              <span className=" w-full h-full text-white flex lg:hidden items-center ">
                <select
                  className=" text-white bg-blue-950/80 text-lg p-2 w-4/12"
                  value={interestValue.unitValue}
                  onChange={handleInterestChanges}
                  name="unitValue"
                  id="unitValue"
                >
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                </select>
                <p className=" text-2xl font-semibold mx-1 h-full flex items-end">
                  .
                </p>
                <select
                  className=" text-white text-lg bg-blue-950/80 p-2 w-4/12"
                  name="decimalValue"
                  id="decimalValue"
                  value={interestValue.decimalValue}
                  onChange={handleInterestChanges}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </span>
              <span className="w-full h-full text-white flex justify-center items-end py-1">
                <p className=" text-white text-[13px] lg:text-[12px]">
                  {interestValue.unitValue ? interestValue.unitValue : 0}
                </p>
                <p className="text-[12px] mx-[1px] font-semibold h-full flex items-end">
                  .
                </p>
                <p className=" text-white text-[13px] lg:text-[12px]">
                  {interestValue.decimalValue ? interestValue.decimalValue : 0}
                </p>
                <p className="text-[12px] text-neutral-200">%</p>
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CreateLeft;

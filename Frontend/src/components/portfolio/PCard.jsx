import React from "react";

function PCard({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card md:min-h-[460px] w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="max-h-60">
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge text-slate-50 badge-secondary">{item.category}  </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><a target="_blank" href={item.git}>GitHub</a></div>
              <div className=" cursor-pointer px-4 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                <a href={item.link} target="_blank" >Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCard;

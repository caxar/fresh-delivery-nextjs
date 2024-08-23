/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Item.scss";

const ProductGroupItem = () => {
  return (
    <div className="relative w-[305px] rounded-xl">
      {/* Картинка */}
      <Link href="/">
        <div className="w-full flex items-center justify-center h-[190px] overflow-hidden">
          <img
            src="/cat-apple.jpg"
            className="w-full h-full object-contain transition ease-in-out delay-80 hover:scale-110"
            alt=""
          />
        </div>
      </Link>
      <div className="cat-slide__bottom bg-white flex flex-col gap-[18px] py-[15px] px-[20px] rounded-xl shadow-cardShadow">
        <div className="flex items-center justify-between">
          {/* рейтинг */}
          <div className="flex item gap-[5px]">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                fill="#179c49"
              />
            </svg>
            4.98
          </div>
          <span className="text-gray1 text-[18px]">{234} г</span>
        </div>
        {/* НАзвание */}
        <Link href="/">
          <div className="text-black font-bold text-[20px] mb-1 transition ease delay-150 hover:text-green3 cursor-pointer">
            Овощи кари в кари
          </div>
        </Link>
        {/* Цена */}
        <div className="flex items-center justify-between ">
          <span className="text-[30px] font-bold color-black">249 ₽</span>
          <div className="group flex items-center justify-center rounded-xl bg-gray3 w-[50px] h-[50px] cursor-pointer">
            <svg
              width="27px"
              height="27px"
              viewBox="0 0 24 24"
              version="1.1"
              className="transition ease-in-out delay-100 group-hover:scale-110"
            >
              <g
                id="页面-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Business"
                  transform="translate(-480.000000, -144.000000)"
                >
                  <g
                    id="basket_fill"
                    transform="translate(480.000000, 144.000000)"
                  >
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M10.4636,3.28164 C11.2283391,2.36384783 12.6100181,2.32395297 13.4284042,3.16192917 L13.5364,3.28164 L17.4684,7.99996 L20.4528,7.99996 C21.331,7.99996 22.0375,8.7584 21.9373,9.65484 L21.8453424,10.4210773 L21.8453424,10.4210773 L21.7454433,11.1603324 L21.7454433,11.1603324 L21.6633364,11.7152836 L21.6633364,11.7152836 L21.5683391,12.3098119 L21.5683391,12.3098119 L21.4600362,12.9352476 L21.4600362,12.9352476 L21.3380125,13.5829209 L21.3380125,13.5829209 L21.2018528,14.2441624 C21.1301698,14.5767303 21.05303,14.911135 20.9702,15.2425 C20.7313111,16.1978778 20.433321,17.0740852 20.1375081,17.8257604 L19.9170141,18.3654582 L19.9170141,18.3654582 L19.7030815,18.8542037 L19.7030815,18.8542037 L19.501455,19.2877443 C19.4691953,19.3551644 19.4376877,19.4201071 19.4070519,19.4824838 L19.1581,19.9722 L19.1581,19.9722 C18.8371462,20.5813385 18.2344124,20.9416722 17.595138,20.9935038 L17.4347,21 L6.55426,21 C5.86955,21 5.19629,20.6446 4.84591,19.9921 L4.61293027,19.5418423 L4.61293027,19.5418423 L4.43317577,19.171822 C4.4019028,19.1056719 4.37003591,19.0373171 4.33766962,18.9668107 L4.13823539,18.5183747 C3.76439211,17.6504579 3.35299789,16.535 3.02987,15.2425 C2.97519095,15.0237857 2.92311508,14.8051875 2.87354793,14.58779 L2.73227819,13.9402837 L2.73227819,13.9402837 L2.60549408,13.3064885 L2.60549408,13.3064885 L2.49262888,12.6929113 L2.49262888,12.6929113 L2.39311588,12.1060596 L2.39311588,12.1060596 L2.30638837,11.5524403 L2.30638837,11.5524403 L2.23187963,11.0385607 L2.23187963,11.0385607 L2.14178704,10.3564878 L2.14178704,10.3564878 L2.07599895,9.80043219 C2.06996857,9.74646259 2.06435286,9.69523333 2.05914,9.64688 C1.96754842,8.79721368 2.59876404,8.07931934 3.40713478,8.00610516 L3.54341,7.99996 L6.53162,7.99996 L10.4636,3.28164 Z M9.96059039,12.721666 C9.821845,12.2405694 9.34145786,11.9292857 8.8356,12.0136 C8.32974214,12.0979143 7.97628607,12.5481653 8.00107282,13.0482541 L8.01361,13.1644 L8.51361,16.1644 L8.53941762,16.278334 C8.678155,16.7594306 9.15854214,17.0707143 9.6644,16.9864 C10.1702857,16.9020857 10.5237265,16.4518347 10.4989375,15.9517459 L10.4864,15.8356 L9.9864,12.8356 L9.96059039,12.721666 Z M15.1644,12.0136 C14.6585143,11.9292857 14.178151,12.2405694 14.0394092,12.721666 L14.0136,12.8356 L13.5136,15.8356 C13.4228,16.3804 13.7908,16.8956 14.3356,16.9864 C14.8414857,17.0707143 15.321849,16.7594306 15.4605908,16.278334 L15.4864,16.1644 L15.9864,13.1644 C16.0772,12.6196 15.7092,12.1044 15.1644,12.0136 Z M12,4.56201 L9.13504,7.99996 L14.865,7.99996 L12,4.56201 Z"
                      id="形状"
                      fill="#179c49"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* Избранное иконка */}
      <div className="group add-favorite absolute top-5 right-4 opacity-100 cursor-pointer">
        <span className="tooltiptext">В избранное</span>
        <svg
          className="transition ease-in-out delay-100 group-hover:scale-110"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
            stroke="#179c49"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductGroupItem;

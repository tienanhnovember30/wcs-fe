import React from "react";

type Props = {};

const Header = (props: Props) => {
  return <div>
    <section className="header-va">
        <div className="w-full bg-black h-[77px]">
            <div className="mx-auto  flex w-[1410px] ">
                <div>
                    <img src="./img//logo 1.png" className="text-slate-50 text-2xl mt-[20px]" alt=""/>
                </div>
                <div className="nav mx-auto mt-[24px]">
                    <ul className="content-center text-slate-50 flex justify-center	space-x-[48px]">
                        <li><a href="">Trang chủ</a></li>
                        <li><a href="">Sản phẩm </a></li>
                        <li><a href="/contact">Liên hệ </a></li>
                        <li><a href="">Tin tức </a></li>
                        <li><a href="">Giới thiệu</a></li>
                    </ul>
                </div>
                {/* <div className="icon flex mt-[24px] space-x-[20px]">
                    <i className="fa fa-search" style="font-size:24px;color: aliceblue;"></i>
                    <i className="fa fa-heart" style="font-size:24px;color: aliceblue;"></i>
                    <i className="fa fa-user" style="font-size:24px;color: aliceblue;"></i>
                    <i className="fa fa-bag-shopping" style="font-size:24px;color: aliceblue;"></i>

                </div> */}
            </div>
        </div>
    </section>
  </div>;
};

export default Header;

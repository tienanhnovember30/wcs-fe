import React from 'react'
import style from './login.module.css'
type Props = {}

const login = (props: Props) => {
    return (
        // <div className="h-screen w-[1240px] mx-auto">
        //     <div className="px-6 h-full text-gray-800">

        //         <div
        //             className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        //         >

        //             <div
        //                 className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
        //             >
        //                 <img
        //                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        //                     className="w-full"
        //                     alt="Sample image"
        //                 />
        //             </div>
        //             <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        //                 <h2 className='text-2xl text-center mb-[40px]'>Đăng nhập</h2>
        //                 <form>


        //                     <div className="mb-6">
        //                         <input
        //                             type="text"
        //                             className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                             id="exampleFormControlInput2"
        //                             placeholder="Email của bạn"
        //                         />
        //                     </div>

        //                     <div className="mb-6">
        //                         <input
        //                             type="password"
        //                             className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                             id="exampleFormControlInput2"
        //                             placeholder="Mật khẩu"
        //                         />
        //                     </div>

        //                     <div className="flex justify-between items-center mb-6">
        //                         <div className="form-group form-check">
        //                             <input
        //                                 type="checkbox"
        //                                 className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        //                                 id="exampleCheck2"
        //                             />
        //                             <label className="form-check-label inline-block text-gray-800"
        //                             >Nhớ mật khẩu </label>
        //                         </div>
        //                         <a href="#!" className="text-gray-800">Quên mật khẩu?</a>
        //                     </div>

        //                     <div className="text-center lg:text-left">
        //                         <button
        //                             type="button"
        //                             className="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        //                         >
        //                             Đăng nhập
        //                         </button>
        //                         <p className="text-sm font-semibold mt-2 pt-1 mb-0">
        //                             <a
        //                                 href="#!"
        //                                 className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
        //                             >Đăng ký</a>
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        //                         <p className="text-center font-semibold mx-4 mb-0">Hoặc</p>
        //                     </div>
        //                     {/* <div className="flex flex-row items-center justify-center lg:justify-start">
        //                         <p className="text-lg mb-0 mr-4">Đăng nhập bằng</p>
        //                         <button
        //                             type="button"
        //                             data-mdb-ripple="true"
        //                             data-mdb-ripple-color="light"
        //                             className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        //                         >

        //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
        //                                 <path
        //                                     fill="currentColor"
        //                                     d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        //                                 />
        //                             </svg>
        //                         </button>

        //                         <button
        //                             type="button"
        //                             data-mdb-ripple="true"
        //                             data-mdb-ripple-color="light"
        //                             className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        //                         >
        //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
        //                                 <path
        //                                     fill="currentColor"
        //                                     d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        //                                 />
        //                             </svg>
        //                         </button>

        //                         <button
        //                             type="button"
        //                             data-mdb-ripple="true"
        //                             data-mdb-ripple-color="light"
        //                             className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        //                         >
        //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
        //                                 <path
        //                                     fill="currentColor"
        //                                     d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        //                                 />
        //                             </svg>
        //                         </button>
        //                     </div> */}


        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="m-auto container px-12 sm:px-0 mx-auto">
  <div className="mx-auto h-full md:w-10/12 lg:w-6/12">
    <div className="m-auto  py-12 sm:p-20 xl:w-10/12">
      <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
        <div className="grid gap-6 sm:grid-cols-1">
          <button className="h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                className="w-5"
                alt=""
              />
              <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                Đăng nhập với Google{" "}
              </span>
            </div>
          </button>
        </div>
        <form action="" className="mt-10 space-y-8 dark:text-white">
          <div>
            <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input
                id=""
                type="email"
                placeholder="Email của bạn"
                className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
              />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input
                id=""
                type="Your password"
                placeholder="Mật khẩu"
                className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
              />
            </div>
            <button type="reset" className="-mr-3 w-max p-3">
              <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                Quên mật khẩu ?
              </span>
            </button>
          </div>
          <div>
            <button className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
              <span className="text-base font-semibold text-white dark:text-gray-900">
                Đăng nhập
              </span>
            </button>
            <button href="#" type="reset" className="-ml-3 w-max p-3">
              <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                Đăng ký
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}

export default login
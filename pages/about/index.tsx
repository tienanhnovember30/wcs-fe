import React from 'react'
import { ClientLayout } from '../../layouts'

import styles from './about.module.css'
type Props = {}

const About = (props: Props) => {
  return (
    <>
  {/* Breadcrumb Section Begin */}
  <section className="breadcrumb-option">
    <div className="container mx-auto sm:px-4">
      <div className="flex flex-wrap ">
        <div className="lg:w-full pr-4 pl-4">
          <div className="breadcrumb__text">
            <h4>Giới Thiệu</h4>
            <div className="breadcrumb__links">
              <a href="./index.html">Trang chủ</a>
              <span>Giới Thiệu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* About Section Begin */}
  <section className={styles.about}>
    <div className="container mx-auto sm:px-4">
      <div className="flex flex-wrap ">
        <div className="lg:w-full pr-4 pl-4">
          <div className="about__pic">
            <img src="img/about/about-us.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="about__item">
            <h4>Chúng tôi là ai?</h4>
            <p>
              Chúng tôi là cửa hàng WhiteCat- cửa hàng chuyên kinh doanh quần áo
              dành cho giới trẻ
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="about__item">
            <h4>Chúng tôi làm gì?</h4>
            <p>
              Chúng tôi là nhà cung cấp trung gian các sản phẩm quần áo từ các
              thương hiệu nổi tiếng trên thế giới
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="about__item">
            <h4>Tại sao nên chọn chúng tôi</h4>
            <p>
              Chúng tôi vừa bán online, vừa bán tại cưa hàng rất tiện lợi dành
              cho mọi người.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section End */}
  {/* Testimonial Section Begin */}
  {/* <section class="testimonial">
  <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
      <div class="flex flex-wrap ">
          <div class="lg:w-1/2 pr-4 pl-4 p-0">
              <div class="testimonial__text">
                  <span class="icon_quotations"></span>
                  <p>“Going out after work? Take your butane curling iron with you to the office, heat it up,
                      style your hair before you leave the office and you won’t have to make a trip back home.”
                  </p>
                  <div class="testimonial__author">
                      <div class="testimonial__author__pic">
                          <img src="img/about/testimonial-author.jpg" alt="">
                      </div>
                      <div class="testimonial__author__text">
                          <h5>Augusta Schultz</h5>
                          <p>Fashion Design</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="lg:w-1/2 pr-4 pl-4 p-0">
              <div class="testimonial__pic set-bg" data-setbg="img/about/testimonial-pic.jpg"></div>
          </div>
      </div>
  </div>
    </section> */}
  {/* Testimonial Section End */}
  {/* Counter Section Begin */}
  {/* <section class="counter spad">
  <div class="container mx-auto sm:px-4">
      <div class="flex flex-wrap ">
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div class="counter__item">
                  <div class="counter__item__number">
                      <h2 class="cn_num">102</h2>
                  </div>
                  <span>Our <br />Clients</span>
              </div>
          </div>
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div class="counter__item">
                  <div class="counter__item__number">
                      <h2 class="cn_num">30</h2>
                  </div>
                  <span>Total <br />Categories</span>
              </div>
          </div>
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div class="counter__item">
                  <div class="counter__item__number">
                      <h2 class="cn_num">102</h2>
                  </div>
                  <span>In <br />Country</span>
              </div>
          </div>
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div class="counter__item">
                  <div class="counter__item__number">
                      <h2 class="cn_num">98</h2>
                      <strong>%</strong>
                  </div>
                  <span>Happy <br />Customer</span>
              </div>
          </div>
      </div>
  </div>
    </section> */}
  {/* Counter Section End */}
  {/* Team Section Begin */}
  <section className="team spad">
    <div className="container mx-auto sm:px-4">
      <div className="flex flex-wrap ">
        <div className="lg:w-full pr-4 pl-4">
          <div className="section-title">
            <span>Our Team</span>
            <h2>Meet Our Team</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="team__item">
            <img src="img/about/team-1.jpg" alt="" />
            <h4>John Smith</h4>
            <span>Fashion Design</span>
          </div>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="team__item">
            <img src="img/about/team-2.jpg" alt="" />
            <h4>Christine Wise</h4>
            <span>C.E.O</span>
          </div>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="team__item">
            <img src="img/about/team-3.jpg" alt="" />
            <h4>Sean Robbins</h4>
            <span>Manager</span>
          </div>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
          <div className="team__item">
            <img src="img/about/team-4.jpg" alt="" />
            <h4>Lucy Myers</h4>
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section End */}
  {/* Client Section Begin */}
  <section className="clients spad">
    <div className="container mx-auto sm:px-4">
      <div className="flex flex-wrap ">
        <div className="lg:w-full pr-4 pl-4">
          <div className="section-title">
            <h2>Thương hiệu</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-1.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-2.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-3.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-4.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-5.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-6.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-7.png" alt="" />
          </a>
        </div>
        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 sm:w-1/3 pr-4 pl-4 w-1/2">
          <a href="#" className="client__item">
            <img src="img/clients/client-8.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default About
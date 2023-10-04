import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <nav>
        <ul>
          <li>이용약관</li>
          <li>유료서비스약관</li>
          <li className="white">개인정보 처리방침</li>
          <li>청소년보호정책</li>
          <li>게시물 운영정책</li>
          <li>이메일 상담</li>
          <li>제휴문의</li>
        </ul>
      </nav>
      <div className="text">
        <p>
          (주)커넥티비티 | 사업자등록번호 266-87-00917 [사업자정보확인] |
          통신판매신고번호 2019-서울마포-1455
          <br /> 서울특별시 마포구 월드컵북로56길 12, 4층 (상암동, Trutec
          Building)
          <br /> 대표이사 홍원의 | 청소년보호책임자 한승훈 | 이메일
          spotv_now@spotv.net | 고객센터 1833-8910
          <br /> ©Konnectivity Co., Ltd. All rights reserved.
        </p>
      </div>
      <img
        src={process.env.PUBLIC_URL + `/assets/footer_logo.png`}
        alt="로고"
      />
    </div>
  );
};

export default Footer;

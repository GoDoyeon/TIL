import axios from 'axios';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK a2ceaaa9b5d8805bcef9c6320a873f8c`,
  },
});

// search book api
export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book?target=title', { params });
};

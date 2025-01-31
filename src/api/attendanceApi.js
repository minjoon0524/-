import axios from "axios";
import jwtAxios from "../util/jwtUtil";

const API_SERVER_HOST = `http://localhost:80`;
const host = `${API_SERVER_HOST}`;

//eid를 통해 member를 읽어오는 함수
export const getOneMemberAttendance = async (eid) => {
  const res = await jwtAxios.get(`${API_SERVER_HOST}/member/attendance/${eid}`);
  console.log("getOneMemberAttendance 함수 테스트 .... ", res.data);

  return res.data;
};
// /check-in/{eid}
export const checkIn = async (eid) => {
  const res = await jwtAxios.post(`${API_SERVER_HOST}/member/attendance/check-in/${eid}`);
  // console.log("출근등록 테스트 .... ", res.data);
  return res.data;
};

export const checkOut = async (eid) => {
  const res = await jwtAxios.post(`${API_SERVER_HOST}/member/attendance/check-out/${eid}`);
  // console.log("퇴근등록 테스트 .... ", res.data);
  return res.data;
};

export const getAttendanceList = async ({ page, size, searchTerm, searchField, startDate, endDate }) => {
  try {
    const res = await jwtAxios.get(`${API_SERVER_HOST}/member/attendance/list`, {
      params: { page, size, term: searchTerm, option: searchField, startDate, endDate },
    });
    console.log("근태목록 테스트 .... ", res.data);
    return res.data;
  } catch (error) {
    console.error("근태목록 API 오류:", error);
    throw error; // 오류를 다시 던져서 호출하는 곳에서 처리
  }
};




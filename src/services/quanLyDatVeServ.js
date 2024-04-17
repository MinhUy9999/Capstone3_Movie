import { http } from './config';
export const quanLyDatVeServ = {
LayDanhSachPhongVe: ve => {
  return http.get(
    `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${ve}`
  );
}
}
/** @format */

const stateDefault = {
  mangNguoiDung: [
    // {
    //   taiKhoanKH: 'nguyenvanbinh',
    //   hoTen: 'Nguyen van an',
    //   matKhau: 123,
    //   email: 'nguyenvana@gmail.com',
    //   soDienThoai: 123,
    //   loaiKhachHang: 'Khach Hang 1',
    // },
  ],
  mangOption: {
    khachhang1: 'Khach Hang 1',
    khachhang2: 'Khach Hang 2',
    khachhang3: 'Khach Hang 3',
  },
  nguoiDungSua: {
    taiKhoanKH: '',
    matKhau: '',
    hoTen: '',
    email: '',
    soDienThoai: '',
    loaiKhachHang: 'Khach Hang 1',
  },
  nguoiDungRedux: {
    values: {
      taiKhoanKH: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDienThoai: '',
      loaiKhachHang: 'Khach Hang 1',
    },
    errors: {
      taiKhoanKH: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDienThoai: '',
    },
  },
};

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'THEM_KHACH_HANG': {
      state.mangNguoiDung = [...state.mangNguoiDung, state.nguoiDungRedux.values];
      return { ...state };
    }
    case 'SWITCH_CUSTOMER_TYPE':
      state.nguoiDungRedux.values.loaiKhachHang = action.customerType;
      return { ...state };
    case 'SET_USER': {
      state.nguoiDungRedux = action.nguoiDungRedux;
      return { ...state };
    }
    case 'XOA_NGUOI_DUNG': {
      let mangUserCapNhat = [...state.mangNguoiDung];
      mangUserCapNhat = mangUserCapNhat.filter(
        (user) => user.taiKhoanKH !== action.taiKhoanKH
      );
      state.mangNguoiDung = mangUserCapNhat;
      return { ...state };
    }
    case 'SUA_USER': {
      state.nguoiDungSua = { ...action.nguoiDungSua };
      let newNguoiDung = { ...state.nguoiDungRedux };
      newNguoiDung.values = { ...action.nguoiDungSua };
      return { ...state, nguoiDungRedux: newNguoiDung };
    }
    case 'CAP_NHAT_NGUOI_DUNG': {
      const mangUserCapNhat = [...state.mangNguoiDung];
      let userUpdate = mangUserCapNhat.find(
        (user) => user.taiKhoanKH === state.nguoiDungRedux.values.taiKhoanKH
      );
      console.log(userUpdate);
      if (userUpdate) {
        userUpdate.matKhau = state.nguoiDungRedux.values.matKhau;
        userUpdate.email = state.nguoiDungRedux.values.email;
        userUpdate.hoTen = state.nguoiDungRedux.values.hoTen;
        userUpdate.soDienThoai = state.nguoiDungRedux.values.soDienThoai;
        userUpdate.loaiKhachHang = state.nguoiDungRedux.values.loaiKhachHang;
      }
      state.mangNguoiDung = mangUserCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

/** @format */

const stateDefault = {
  mangNguoiDung: [
    {
      // id: 1,
      taiKhoanKH: 'nguyenvanbinh',
      hoTen: 'Nguyen van an',
      matKhau: 123,
      email: 'nguyenvana@gmail.com',
      soDienThoai: 123,
      loaiKhachHang: 'Khach Hang 1',
    },
  ],
  mangOption: {
    khachhang1: 'Khach Hang 1',
    khachhang2: 'Khach Hang 2',
    khachhang3: 'Khach Hang 3',
  },

  nguoiDungRedux: {
    values: {
      // id: 1,
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
      let index = state.mangNguoiDung.findIndex(
        (user) => user.id === state.nguoiDungRedux.values.id
      );
      if (index !== -1) {
        state.mangNguoiDung = [
          ...state.mangNguoiDung,
          state.nguoiDungRedux.values,
        ];
      }
      return { ...state };
    }
    case 'SWITCH_CUSTOMER_TYPE':
      state.nguoiDungRedux.values.loaiKhachHang = action.customerType;
      return { ...state };
    case 'SET_USER': {
      state.nguoiDungRedux = action.nguoiDungRedux;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

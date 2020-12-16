
const stateDefault = {

    mangNguoiDung: [
        { id: 1, taiKhoanKH: 'nguyenvanbinh', hoTen: 'Nguyen van an', matKhau: 123, email: 'nguyenvana@gmail.com', soDienThoai: 123 },
    ],
    nguoiDungRedux: {
        values: {
            id: 1,
            taiKhoanKH: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            taiKhoanKH: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        }
    }
}

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_KHACH_HANG': {
            const mangUserUpdate=[...state.mangNguoiDung]
            let index=mangUserUpdate.findIndex(user=>user.id===state.nguoiDungRedux.values.id)
            if(index !==-1){
                mangUserUpdate.push(state.nguoiDungRedux.values);
                index++;
            }
            // mangUserUpdate.push(state.nguoiDungRedux.values);
            // nguoiDungRedux.values.id++;
            state.mangNguoiDung=mangUserUpdate
            return{...state}
        }
        case 'SET_USER': {
            state.nguoiDungRedux = action.nguoiDungRedux;
            return { ...state }
        }
    }
    return { ...state }
}
import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType"

const stateDefault = {
    danhSachGheDangDat: [

    ]


}
export const BaiTapDatVePhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if (index !== -1) {
                //Ghe dang dat da co trong mang khi nguoi dung click vao thi se remove di
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                //Khi nguoi dung click ghe dang dat chua co trong mang => push vao mang
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }

        }
        case HUY_GHE: {
            let danhSachGheHuy = [...state.danhSachGheDangDat];
            danhSachGheHuy = danhSachGheHuy.filter(gheHuy => gheHuy.soGhe !== action.soGhe)
            state.danhSachGheDangDat = danhSachGheHuy;
            return { ...state }
        }

    }
    return { ...state }
}
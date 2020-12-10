
const stateDefault = {
    datCuoc: true, //True tai (tu 3-11 diem) , false xiu (>12 diem)
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/video_19_game_xuc_xac/6.png', diem: 6 },
        { hinhAnh: './img/video_19_game_xuc_xac/6.png', diem: 6 },
        { hinhAnh: './img/video_19_game_xuc_xac/6.png', diem: 6 }
    ]
};

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.datCuoc = action.taiXiu
            return { ...state }
        }
        case 'PLAY_GAME': {
            //Buoc 1 : Xu li random xuc xac
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < state.mangXucXac.length; i++) {
                // Mỗi lần lặp random ra sô ngẫu nhiên từ 1 > 6
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                // Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
                let xucXacNgauNhien =  { hinhAnh: `./img/video_19_game_xuc_xac/${soNgauNhien}.png`, diem: soNgauNhien }
            // Push vao mang xuc xac
            mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac=mangXucXacNgauNhien;
            state.soBanChoi +=1;
            //Xu li so ban thang 
            let tongSoDiem= mangXucXacNgauNhien.reduce((tongSoDiem,xucXac,index)=>{
                return(
                    tongSoDiem+=xucXac.diem
                )       
            },0);
            if((tongSoDiem<=11 && state.datCuoc===true) || (tongSoDiem>11 && state.datCuoc===false)){
                state.soBanThang+=1;
            }
            return {...state};
        }
    }
    return { ...state };
}

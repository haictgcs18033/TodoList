const stateDefault = {
    ketQua: "I love you 3000",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { hinhAnh: './img/keo.png', ma: 'keo' },
    mangDatCuoc: [
        { hinhAnh: './img/keo.png', ma: 'keo', datCuoc: false },
        { hinhAnh: './img/bua.png', ma: 'bua', datCuoc: true },
        { hinhAnh: './img/bao.png', ma: 'bao', datCuoc: false }
    ]

}
export const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            //Reset mang cuoc   
            let mangDatCuocUpdate = [...state.mangDatCuoc]
            //    Cap nhat lai mang moi voi tat ca thuoc tinh dat cuoc = false
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                if(item.ma===action.maCuoc){
                    return{...item,datCuoc: true}
                }
                return { ...item, datCuoc: false }
            })
            //Tim ra maCuoc de change trang thai dat cuoc ung voi ma cuoc do 
            // let index = mangDatCuocUpdate.findIndex(quanCuoc=>quanCuoc.ma===action.maCuoc)
            // if(index !==-1){
            //      mangDatCuocUpdate[index].datCuoc=true;
            // }
            state.mangDatCuoc = mangDatCuocUpdate;
            return { ...state }
        }
        case 'PLAY_GAME':{
            let soNgauNhien=Math.floor(Math.random() * 3);
            let quanCuocNgauNhien=state.mangDatCuoc[soNgauNhien] 
            state.computer=quanCuocNgauNhien;
            return{...state}
        }
        case 'END_GAME':{
            let player=state.mangDatCuoc.find(item=>item.datCuoc===true)
            let computer=state.computer;
            switch (player.ma){
                case 'keo':
                if(computer.ma==='keo'){
                    state.ketQua='Hoa nhau';
                }else if(computer.ma==='bua'){
                    state.ketQua ='Ban thua';
                }else if(computer.ma==='bao'){
                    state.soBanThang+=1;
                    state.ketQua='I love you 3000'
                };
               break;
                case 'bua':
                if(computer.ma==='keo'){
                    state.soBanThang+=1;
                    state.ketQua='I love you 3000';
                }else if(computer.ma==='bua'){
                    state.ketQua ='Hoa nhau';
                }else if(computer.ma==='bao'){
                    state.ketQua='Ban thua'
                };
               break;
                case 'bao':
                if(computer.ma==='keo'){
                    state.ketQua='Ban thua';
                }else if(computer.ma==='bua'){
                    state.soBanThang+=1;
                    state.ketQua ='I love you 3000';
                }else if(computer.ma==='bao'){
                    state.ketQua='Hoa nhau'
                };
               break;
               default :
               state.soBanThang+=1;
               state.ketQua='I love you 3000'
              
               return{...state}
            }
            state.soBanChoi+=1;
            return{...state}
           
        }
    }
    return { ...state }
}

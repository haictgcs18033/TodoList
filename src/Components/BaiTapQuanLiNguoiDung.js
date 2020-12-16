import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'

export default class BaiTapQuanLiNguoiDung extends Component {
    render() {
        return (
            <div>
                <FormDangKy></FormDangKy>
                <TableNguoiDung></TableNguoiDung>
            </div>
        )
    }
}

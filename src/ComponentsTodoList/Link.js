import styled from 'styled-components'
import React from 'react'

export const Link=({className,children,...reprops})=>(
    <a className={className}{...reprops}>{children}</a>
);
export const StyledLink=styled(Link)`
   background-color:red;
   font-weight:bold;
   color:#FFF !important;
   
`
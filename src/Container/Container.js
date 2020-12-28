import styled from 'styled-components'

export const Container = styled.div`
     width:100%;
     padding-left:15px;
     padding-right:15px;
     margin-left:auto;
     margin-right:auto;
     text-align:left;
     border: 3px solid ${props=>props.theme.borderColor}
`
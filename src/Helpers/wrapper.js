import React, { Children } from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
    width:100vw;
    max-width: 1400px;
    margin: auto;
    padding: 0 1rem;
`
function Wrapper({children}){
    return(
        <WrapperStyled className="Wrapper">
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
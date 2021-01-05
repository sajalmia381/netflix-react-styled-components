import styled from 'styled-components/macro';


export const Item = styled.div`
    padding: 50px 5%;
    border-bottom: 8px solid #222;
    &:last-child {
        border-bottom: 0;
    }
`

export const Container = styled.div`
    max-width: 1170px;
    margin: auto;
    width: 100%;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction}) => direction};
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const Pane = styled.div`
    max-width: 50%;
    @media (max-width: 767px) {
        max-width: 100%;
        text-align: center
    }
`

export const Title = styled.h2`
    font-size: 40px;
    @media (min-width: 992px) {
        font-size: 47px;
    }
`

export const SubTitle = styled.h3`
    font-size: 25px;
    @media (min-width: 992px) {
        font-size: 33px;
    }
`

export const Image = styled.img`
    max-width: 100%;
`
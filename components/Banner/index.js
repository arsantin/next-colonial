import styled from 'styled-components';

const BannerFull = styled.div`
  height: 520px;
  background-size: cover;
  background-image: url("/img/banner.png");
  background-position: top center;
  width: 100%;
  flex-basis: 100%;  
  border-bottom: solid 5px #EF4859;
  .section{
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    p{
      color: #7438a6;
      text-align: left;
      font-size: 30px;
      line-height: 36px;
      font-weight: 700;
      span{
        color: #ED475B;
      }
    }
  }
`


const Banner = ()=> {
  return(
  <>  
    <BannerFull className="img-banner">
      <div className="section">
        <p>O MELHOR DE <span>ITAPOÁ</span>,<br />VOCÊ ENCONTRA AQUI!</p>
      </div>
    </BannerFull>
  </>
  )
}

export default Banner
import styled from 'styled-components';

const BannerFull = styled.div`
  height: 450px;
  background-size: cover;
  background-image: url("./img/banner.png");
  width: 100%;
`


const Banner = ()=> {
  return(
  <>  
    <BannerFull className="img-banner" />
  </>
  )
}

export default Banner
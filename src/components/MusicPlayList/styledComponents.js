import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 450px;
  padding: 100px;
`

export const ArtistName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 600;
`

export const ArtistInfo = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 34px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NosongsText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 34px;
  font-weight: 500;
`
